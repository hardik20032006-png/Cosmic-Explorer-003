import { useCallback, useEffect, useMemo, useState } from "react";
import questionBank from "../../data/quizQuestions";

const DIFFICULTY_LEVELS = [
  "Very Easy",
  "Easy",
  "Medium",
  "Hard",
  "Very Hard",
  "True Cosmos Lover",
];

function normalizeText(value) {
  return String(value ?? "")
    .trim()
    .toLowerCase()
    .replace(/[_-]+/g, " ")
    .replace(/\s+/g, " ");
}

function normalizeDifficulty(value) {
  const normalized = normalizeText(value);

  const aliases = {
    veryeasy: "very easy",
    beginner: "very easy",
    easy: "easy",
    medium: "medium",
    moderate: "medium",
    hard: "hard",
    veryhard: "very hard",
    expert: "true cosmos lover",
    truecosmoslover: "true cosmos lover",
  };

  return aliases[normalized.replace(/\s/g, "")] ?? normalized;
}

function shuffle(items) {
  const result = [...items];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function readOptions(question) {
  const raw =
    question.options ?? question.answers ?? question.choices ?? [];

  if (Array.isArray(raw)) {
    return raw
      .map((option) => {
        if (
          typeof option === "string" ||
          typeof option === "number"
        ) {
          return String(option);
        }

        return String(
          option?.text ?? option?.label ?? option?.value ?? ""
        );
      })
      .filter(Boolean);
  }

  if (raw && typeof raw === "object") {
    return Object.values(raw).map(String).filter(Boolean);
  }

  return [];
}

function readCorrectAnswer(question, options) {
  const raw =
    question.correctAnswer ??
    question.correct_answer ??
    question.correctOption ??
    question.correct_option ??
    question.answer ??
    question.correct;

  if (typeof raw === "number" && options[raw] !== undefined) {
    return options[raw];
  }

  if (typeof raw === "string") {
    const value = raw.trim();

    if (/^[A-D]$/i.test(value)) {
      const index = value.toUpperCase().charCodeAt(0) - 65;

      if (options[index] !== undefined) {
        return options[index];
      }
    }

    const matchingOption = options.find(
      (option) => normalizeText(option) === normalizeText(value)
    );

    if (matchingOption) return matchingOption;
  }

  return null;
}

function normalizeQuestion(question, index) {
  if (!question || typeof question !== "object") return null;

  const text = String(
    question.question ?? question.text ?? question.prompt ?? ""
  ).trim();

  const options = readOptions(question);
  const uniqueOptions = [...new Set(options)];
  const correctAnswer = readCorrectAnswer(question, options);

  if (
    !text ||
    uniqueOptions.length < 2 ||
    !correctAnswer ||
    !uniqueOptions.some(
      (option) =>
        normalizeText(option) === normalizeText(correctAnswer)
    )
  ) {
    return null;
  }

  return {
    id: String(question.id ?? question._id ?? `question-${index}`),
    text,
    topic: String(
      question.topic ??
        question.category ??
        question.subject ??
        "COSMIC KNOWLEDGE"
    ),
    difficulty: normalizeDifficulty(
      question.difficulty ??
        question.level ??
        question.difficultyLevel ??
        ""
    ),
    options: uniqueOptions,
    correctAnswer,
    explanation: String(
      question.explanation ?? question.description ?? ""
    ),
  };
}

function buildQuestionSet(bank, settings) {
  const rawQuestions = Array.isArray(bank)
    ? bank
    : Array.isArray(bank?.questions)
      ? bank.questions
      : [];

  const normalized = rawQuestions
    .map((question, index) => normalizeQuestion(question, index))
    .filter(Boolean);

  const seenIds = new Set();
  const seenText = new Set();

  const uniqueQuestions = normalized.filter((question) => {
    const textKey = normalizeText(question.text);

    if (seenIds.has(question.id) || seenText.has(textKey)) {
      return false;
    }

    seenIds.add(question.id);
    seenText.add(textKey);

    return true;
  });

  let candidates;

  if (settings.difficulty === "Increasing Difficulty") {
    candidates = DIFFICULTY_LEVELS.flatMap((level) =>
      shuffle(
        uniqueQuestions.filter(
          (question) =>
            question.difficulty === normalizeDifficulty(level)
        )
      )
    );
  } else {
    const selectedDifficulty = normalizeDifficulty(
      settings.difficulty
    );

    candidates = shuffle(
      uniqueQuestions.filter(
        (question) => question.difficulty === selectedDifficulty
      )
    );
  }

  const count = Math.max(
    1,
    Number(settings.questionCount) || 10
  );

  // Select randomly from all matching questions without repeating.
  return candidates.slice(0, count).map((question) => {
    const correctAnswer = question.correctAnswer;
    let options;

    if (Number(settings.answerOptions) === 2) {
      const wrongOptions = shuffle(
        question.options.filter(
          (option) =>
            normalizeText(option) !== normalizeText(correctAnswer)
        )
      );

      options = shuffle(
        [correctAnswer, wrongOptions[0]].filter(Boolean)
      );
    } else {
      const wrongOptions = shuffle(
        question.options.filter(
          (option) =>
            normalizeText(option) !== normalizeText(correctAnswer)
        )
      ).slice(0, 3);

      options = shuffle([correctAnswer, ...wrongOptions]);
    }

    return { ...question, options };
  });
}

function formatTime(seconds) {
  const safeSeconds = Math.max(0, seconds);
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = safeSeconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}

export default function QuizGame({ settings, onExit }) {
  const [questions] = useState(() =>
    buildQuestionSet(questionBank, settings)
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answers, setAnswers] = useState({});

  const [timeLeft, setTimeLeft] = useState(
    settings.timerEnabled
      ? Number(settings.timeLimit) || 30
      : 0
  );

  const [showQuitDialog, setShowQuitDialog] = useState(false);
  const [finished, setFinished] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  const currentQuestion = questions[currentIndex];
  const questionCount = questions.length;

  const goToNextQuestion = useCallback(() => {
    if (!currentQuestion) return;

    // Save the final choice when the player moves forward.
    setAnswers((previous) => ({
      ...previous,
      [currentQuestion.id]: selectedAnswer,
    }));

    if (currentIndex + 1 >= questionCount) {
      setFinished(true);
      return;
    }

    setCurrentIndex((index) => index + 1);
    setSelectedAnswer(null);
    setTimeExpired(false);

    setTimeLeft(
      settings.timerEnabled
        ? Number(settings.timeLimit) || 30
        : 0
    );
  }, [
    currentIndex,
    currentQuestion,
    questionCount,
    selectedAnswer,
    settings.timerEnabled,
    settings.timeLimit,
  ]);

  // Timer pauses while an answer is selected so the player can reconsider.
  useEffect(() => {
    if (
      !settings.timerEnabled ||
      finished ||
      showQuitDialog ||
      !currentQuestion ||
      selectedAnswer !== null ||
      timeExpired
    ) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setTimeLeft((previous) => {
        if (previous <= 1) {
          window.clearInterval(timer);
          setTimeExpired(true);
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [
    currentIndex,
    currentQuestion,
    finished,
    selectedAnswer,
    settings.timerEnabled,
    showQuitDialog,
    timeExpired,
  ]);

  // Automatically move forward when time runs out.
  useEffect(() => {
    if (!timeExpired || finished || showQuitDialog) {
      return undefined;
    }

    const timeout = window.setTimeout(() => {
      goToNextQuestion();
    }, 900);

    return () => window.clearTimeout(timeout);
  }, [
    timeExpired,
    finished,
    showQuitDialog,
    goToNextQuestion,
  ]);

  function handleSelectAnswer(option) {
    if (timeExpired || finished) return;

    // Selection can change freely until the player presses Next.
    // No correctness feedback is shown here.
    setSelectedAnswer(option);
  }

  const score = useMemo(
    () =>
      questions.reduce(
        (total, question) =>
          total +
          (normalizeText(answers[question.id]) ===
          normalizeText(question.correctAnswer)
            ? 1
            : 0),
        0
      ),
    [answers, questions]
  );

  if (questionCount === 0) {
    return (
      <main className="min-h-full bg-[#171717] px-4 py-10 text-white sm:px-8">
        <section className="mx-auto max-w-3xl rounded-2xl border border-amber-500/40 bg-[#0f1b2d] p-6 sm:p-10">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Your Cosmic Challenge
          </h1>

          <p className="mt-4 leading-7 text-slate-300">
            We couldn't prepare this quiz right now. Try another
            difficulty or return to setup and try again.
          </p>

          <p className="mt-2 text-sm leading-6 text-slate-400">
            There may not be enough valid questions for your chosen
            difficulty.
          </p>

          <button
            type="button"
            onClick={onExit}
            className="mt-6 rounded-xl bg-[#6042c2] px-5 py-3 font-semibold transition hover:bg-[#7656dc]"
          >
            Back to Quiz Setup
          </button>
        </section>
      </main>
    );
  }

  if (finished) {
    return (
      <main className="min-h-full bg-[#171717] px-4 py-8 text-white sm:px-8">
        <section className="mx-auto w-full max-w-7xl rounded-2xl border border-purple-500/40 bg-[#0f1b2d] p-6 sm:p-10">
          <h1 className="text-3xl font-bold sm:text-4xl">
            Challenge Complete!
          </h1>

          <div className="mt-8 rounded-2xl border border-purple-500/30 bg-purple-500/10 p-6">
            <p className="text-slate-300">Your final score</p>

            <p className="mt-2 text-5xl font-bold text-purple-300">
              {score} / {questionCount}
            </p>

            <p className="mt-3 text-slate-300">
              {Math.round((score / questionCount) * 100)}% correct
            </p>

            <button
              type="button"
              onClick={onExit}
              className="mt-4 rounded-xl bg-[#6042c2] px-5 py-3 font-bold transition hover:bg-[#7656dc] focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              ← Back to Quiz Setup
            </button>
          </div>

          <h2 className="mt-8 text-xl font-bold">
            Review Your Answers
          </h2>

          <div className="mt-4 space-y-4">
            {questions.map((question, index) => {
              const answer = answers[question.id];
              const isCorrect =
                normalizeText(answer) ===
                normalizeText(question.correctAnswer);

              return (
                <article
                  key={question.id}
                  className="rounded-xl border border-[#293951] bg-[#162236] p-5"
                >
                  <p className="text-sm text-slate-400">
                    Question {index + 1} · {question.topic}
                  </p>

                  <h3 className="mt-2 font-semibold leading-7">
                    {question.text}
                  </h3>

                  <p
                    className={`mt-3 text-sm ${
                      isCorrect
                        ? "text-emerald-300"
                        : "text-rose-300"
                    }`}
                  >
                    Your answer: {answer ?? "Not answered"}
                  </p>

                  {!isCorrect && (
                    <p className="mt-2 text-sm text-emerald-300">
                      Correct answer: {question.correctAnswer}
                    </p>
                  )}

                  {question.explanation && (
                    <p className="mt-3 leading-6 text-slate-300">
                      {question.explanation}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </section>
      </main>
    );
  }

  const progress = ((currentIndex + 1) / questionCount) * 100;
  const answerLocked = timeExpired;
  const canContinue = selectedAnswer !== null || timeExpired;

  return (
    <main className="min-h-full w-full bg-[#171717] px-4 py-5 text-white sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <header className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs font-bold tracking-[0.25em] text-purple-300 sm:text-sm">
              COSMIC EXPLORER
            </p>

            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
              Cosmic Challenge
            </h1>
          </div>

          <button
            type="button"
            onClick={() => setShowQuitDialog(true)}
            className="rounded-xl border border-[#293951] px-5 py-3 text-slate-200 transition hover:border-purple-400 hover:bg-purple-500/10"
          >
            Exit Quiz
          </button>
        </header>

        <section className="rounded-2xl border border-purple-500/40 bg-[#0f1b2d] p-5 shadow-xl sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-slate-300 sm:text-base">
              Question {currentIndex + 1} of {questionCount}
            </p>

            <span className="rounded-full border border-purple-500/50 bg-purple-500/10 px-4 py-1 text-sm text-purple-200">
              {settings.difficulty}
            </span>
          </div>

          <div
            className="mt-5 h-2.5 overflow-hidden rounded-full bg-[#293951]"
            role="progressbar"
            aria-label="Quiz progress"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
          >
            <div
              className="h-full rounded-full bg-purple-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              {currentQuestion.topic}
            </p>

            {settings.timerEnabled && (
              <p
                className={`rounded-lg px-3 py-2 font-mono text-lg font-bold ${
                  timeLeft <= 5
                    ? "bg-rose-500/10 text-rose-300"
                    : "bg-[#162236] text-purple-200"
                }`}
                aria-live="polite"
              >
                {formatTime(timeLeft)}
              </p>
            )}
          </div>

          <h2 className="mt-5 max-w-5xl text-2xl font-bold leading-relaxed sm:text-3xl">
            {currentQuestion.text}
          </h2>

          {timeExpired && (
            <p className="mt-4 text-sm text-amber-300" role="status">
              Time is up. Moving to the next question…
            </p>
          )}

          <div className="mt-7 grid grid-cols-1 gap-3 md:grid-cols-2">
            {currentQuestion.options.map((option, index) => {
              const isSelected =
                normalizeText(selectedAnswer) ===
                normalizeText(option);

              // Important: no correct/incorrect feedback during the quiz.
              const optionClass = isSelected
                ? "border-purple-500 bg-purple-500/20"
                : "border-[#293951] bg-[#162236] hover:border-purple-400 hover:bg-[#1b2a42]";

              return (
                <button
                  key={`${currentQuestion.id}-${option}`}
                  type="button"
                  disabled={answerLocked}
                  aria-pressed={isSelected}
                  onClick={() => handleSelectAnswer(option)}
                  className={`flex min-h-[76px] items-center gap-4 rounded-xl border p-4 text-left transition sm:p-5 ${optionClass} ${
                    answerLocked
                      ? "cursor-default"
                      : "cursor-pointer"
                  }`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0f1b2d] font-bold text-purple-200">
                    {String.fromCharCode(65 + index)}
                  </span>

                  <span className="leading-6">{option}</span>
                </button>
              );
            })}
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-slate-400">
              {selectedAnswer !== null
                ? "Choice selected. You can change it before continuing."
                : timeExpired
                  ? "Question timed out."
                  : "Choose your answer to continue."}
            </p>

            <button
              type="button"
              onClick={goToNextQuestion}
              disabled={!canContinue}
              className="rounded-xl bg-[#6042c2] px-6 py-4 font-bold transition hover:bg-[#7656dc] disabled:cursor-not-allowed disabled:opacity-40"
            >
              {currentIndex + 1 === questionCount
                ? "Finish Quiz →"
                : "Next Question →"}
            </button>
          </div>
        </section>
      </div>

      {showQuitDialog && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setShowQuitDialog(false);
            }
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="quit-dialog-title"
            className="w-full max-w-lg rounded-2xl border border-purple-500/50 bg-[#0f1b2d] p-6 shadow-2xl sm:p-8"
          >
            <p className="text-sm font-bold tracking-[0.2em] text-purple-300">
              COSMIC EXPLORER
            </p>

            <h2
              id="quit-dialog-title"
              className="mt-3 text-2xl font-bold"
            >
              Leave your cosmic challenge?
            </h2>

            <p className="mt-3 leading-7 text-slate-300">
              Are you sure you want to quit this quiz? Your current
              answers and progress will be lost when you leave.
            </p>

            <div className="mt-7 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => setShowQuitDialog(false)}
                className="rounded-xl border border-[#293951] px-5 py-3 font-semibold transition hover:bg-[#162236]"
              >
                No, Continue Quiz
              </button>

              <button
                type="button"
                onClick={onExit}
                className="rounded-xl bg-[#6042c2] px-5 py-3 font-semibold transition hover:bg-[#7656dc]"
              >
                Yes, Quit
              </button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}