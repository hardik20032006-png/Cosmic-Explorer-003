
import { useState } from "react";
import QuizGame from "../components/components/QuizGame";

const QUESTION_COUNTS = [5, 10, 15, 20, 30, 40, 50, 100];
const DIFFICULTIES = [
  "Very Easy",
  "Easy",
  "Medium",
  "Hard",
  "Very Hard",
  "True Cosmos Lover",
  "Increasing Difficulty",
];
const TIME_LIMITS = [10, 15, 20, 30, 45, 60, 90, 120];

export default function Quiz() {
  const [questionCount, setQuestionCount] = useState("10");
  const [difficulty, setDifficulty] = useState("Medium");
  const [timerEnabled, setTimerEnabled] = useState(true);
  const [timeLimit, setTimeLimit] = useState("30");
  const [answerOptions, setAnswerOptions] = useState("4");
  const [isPlaying, setIsPlaying] = useState(false);
  const [saveWarning, setSaveWarning] = useState("");

  const settings = {
    questionCount: Number(questionCount),
    difficulty,
    timerEnabled,
    timeLimit: timerEnabled ? Number(timeLimit) : null,
    answerOptions: Number(answerOptions),
  };

  function handleStartQuiz(event) {
    event.preventDefault();
    setSaveWarning("");

    try {
      sessionStorage.setItem(
        "cosmicQuizSettings",
        JSON.stringify(settings)
      );
    } catch {
      setSaveWarning(
        "Your settings couldn't be saved in this browser, but you can still play."
      );
    }

    setIsPlaying(true);
  }

  function handleExitQuiz() {
    setIsPlaying(false);
    setSaveWarning("");
  }

  const selectClass =
    "w-full rounded-xl border border-[#293951] bg-[#162236] px-4 py-3 text-white outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20";

  if (isPlaying) {
    return (
      <QuizGame
        settings={settings}
        onExit={handleExitQuiz}
      />
    );
  }

  return (
    <main className="min-h-full w-full bg-[#171717] px-4 pt-2 pb-6 text-white sm:px-6 lg:px-10">
      <div className="mx-auto w-full max-w-3xl">
        <header className="mb-5">
          <h1 className="mt-2 text-3xl font-bold sm:text-4xl">
            Cosmic Challenge
          </h1>
        </header>

        <form
          onSubmit={handleStartQuiz}
          className="space-y-7 rounded-2xl border border-purple-500/40 bg-[#0f1b2d] p-5 shadow-xl sm:p-8 lg:p-10"
        >
          <div>
            <label
              htmlFor="questionCount"
              className="mb-2 block font-semibold sm:text-lg"
            >
              1. Number of Questions
            </label>

            <select
              id="questionCount"
              value={questionCount}
              onChange={(event) => setQuestionCount(event.target.value)}
              className={selectClass}
            >
              {QUESTION_COUNTS.map((number) => (
                <option key={number} value={number}>
                  {number} Questions
                </option>
              ))}
            </select>
          </div>

          <div>
            <label
              htmlFor="difficulty"
              className="mb-2 block font-semibold sm:text-lg"
            >
              2. Difficulty Level
            </label>

            <select
              id="difficulty"
              value={difficulty}
              onChange={(event) => setDifficulty(event.target.value)}
              className={selectClass}
            >
              {DIFFICULTIES.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>

            {difficulty === "Increasing Difficulty" && (
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Questions progress from easier levels to more
                challenging astronomy questions.
              </p>
            )}
          </div>

          <div>
            <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-[#293951] bg-[#162236] p-4 sm:p-5">
              <input
                type="checkbox"
                checked={timerEnabled}
                onChange={(event) => setTimerEnabled(event.target.checked)}
                className="h-5 w-5 shrink-0 accent-purple-500"
              />

              <span>
                <span className="block font-semibold sm:text-lg">
                  Time Limit
                </span>

                <span className="mt-1 block text-sm leading-6 text-slate-400">
                  {timerEnabled
                    ? "Choose the time allowed for each question."
                    : "Timer disabled — take as long as you need."}
                </span>
              </span>
            </label>

            {timerEnabled && (
              <div className="mt-4">
                <label
                  htmlFor="timeLimit"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Seconds per question
                </label>

                <select
                  id="timeLimit"
                  value={timeLimit}
                  onChange={(event) => setTimeLimit(event.target.value)}
                  className={selectClass}
                >
                  {TIME_LIMITS.map((seconds) => (
                    <option key={seconds} value={seconds}>
                      {seconds} seconds
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="answerOptions"
              className="mb-2 block font-semibold sm:text-lg"
            >
              3. Answer Options
            </label>

            <select
              id="answerOptions"
              value={answerOptions}
              onChange={(event) => setAnswerOptions(event.target.value)}
              className={selectClass}
            >
              <option value="2">2 Options</option>
              <option value="4">4 Options</option>
            </select>
          </div>

          <section className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-4 sm:p-5">
            <h2 className="font-semibold text-purple-300">
              Your Cosmic Challenge
            </h2>

            <p className="mt-2 leading-7 text-slate-300">
              {questionCount} questions
              {" · "}
              {difficulty}
              {" · "}
              {timerEnabled ? `${timeLimit}s per question` : "No time limit"}
              {" · "}
              {answerOptions} answer options
            </p>
          </section>

          {saveWarning && (
            <p role="status" className="text-sm text-amber-300">
              {saveWarning}
            </p>
          )}

          <button
            type="submit"
            className="w-full rounded-xl bg-[#6042c2] px-6 py-4 font-bold text-white transition hover:bg-[#7656dc] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#0f1b2d]"
          >
            Start Quiz →
          </button>
        </form>
      </div>
    </main>
  );
}
