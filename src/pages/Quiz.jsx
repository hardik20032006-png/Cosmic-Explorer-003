
import { useState } from "react";

export default function Quiz() {
  const [questionCount, setQuestionCount] = useState("10");
  const [difficulty, setDifficulty] = useState("Medium");
  const [timerEnabled, setTimerEnabled] = useState(false);
  const [timeLimit, setTimeLimit] = useState("30");
  const [answerOptions, setAnswerOptions] = useState("4");

  const handleStartQuiz = (e) => {
    e.preventDefault();

    const settings = {
      questionCount: Number(questionCount),
      difficulty,
      timerEnabled,
      timeLimit: timerEnabled ? Number(timeLimit) : null,
      answerOptions: Number(answerOptions),
    };

    // Save settings for the next stage of quiz development.
    sessionStorage.setItem("cosmicQuizSettings", JSON.stringify(settings));

  };

  const selectClass =
    "w-full rounded-lg border border-[#293951] bg-[#162236] px-4 py-3 text-white outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20";

  return (
    <main className="min-h-full bg-[#171717] px-4 pt-3 pb-6 text-white sm:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-4">
          <p className="mb-2 text-sm font-semibold tracking-[0.2em] text-purple-400">
            COSMIC EXPLORER
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl">
            Quiz Setup
          </h1>

          <p className="mt-2 text-sm text-slate-400 sm:text-base">
            Customize your challenge and test your knowledge of the universe.
          </p>
        </div>

        <form
          onSubmit={handleStartQuiz}
          className="space-y-6 rounded-2xl border border-[#5140a0] bg-[#0f1b2d] p-5 shadow-xl sm:p-8"
        >
          {/* Number of questions */}
          <div>
            <label
              htmlFor="questionCount"
              className="mb-2 block text-base font-semibold"
            >
              1. Number of Questions
            </label>

            <select
              id="questionCount"
              value={questionCount}
              onChange={(e) => setQuestionCount(e.target.value)}
              className={selectClass}
            >
              {[5, 10, 15, 20, 30, 40, 50, 100].map((number) => (
                <option key={number} value={number}>
                  {number} Questions
                </option>
              ))}
            </select>
          </div>

          {/* Difficulty */}
          <div>
            <label
              htmlFor="difficulty"
              className="mb-2 block text-base font-semibold"
            >
              2. Difficulty Level
            </label>

            <select
              id="difficulty"
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className={selectClass}
            >
              <option>Very Easy</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
              <option>Very Hard</option>
              <option>True Cosmos Lover</option>
              <option>Increasing Difficulty</option>
            </select>
          </div>

          {/* Timer */}
          <div>
            <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-[#293951] bg-[#162236] p-4">
              <input
                type="checkbox"
                checked={timerEnabled}
                onChange={(e) => setTimerEnabled(e.target.checked)}
                className="h-5 w-5 accent-purple-500"
              />

              <span>
                <span className="block font-semibold">Time Limit</span>
                <span className="mt-1 block text-sm text-slate-400">
                  {timerEnabled
                    ? "Choose the time allowed for each question."
                    : "Untimed quiz — take as long as you need."}
                </span>
              </span>
            </label>

            {timerEnabled && (
              <div className="mt-3">
                <label
                  htmlFor="timeLimit"
                  className="mb-2 block text-sm text-slate-300"
                >
                  Seconds per question
                </label>

                <select
                  id="timeLimit"
                  value={timeLimit}
                  onChange={(e) => setTimeLimit(e.target.value)}
                  className={selectClass}
                >
                  <option value="15">10 seconds</option>
                  <option value="15">15 seconds</option>
                  <option value="30">30 seconds</option>
                  <option value="30">45 seconds</option>
                  <option value="60">60 seconds</option>
                </select>
              </div>
            )}
          </div>

          {/* Answer format */}
          <div>
            <label
              htmlFor="answerOptions"
              className="mb-2 block text-base font-semibold"
            >
              3. Answer Options
            </label>

            <select
              id="answerOptions"
              value={answerOptions}
              onChange={(e) => setAnswerOptions(e.target.value)}
              className={selectClass}
            >
              <option value="2">2 Options</option>
              <option value="4">4 Options</option>
            </select>
          </div>

          {/* Summary */}
          <div className="rounded-lg border border-purple-500/30 bg-purple-500/10 p-4 text-sm text-slate-300">
            <p className="font-semibold text-purple-300">Your Quiz</p>
            <p className="mt-2">
              {questionCount} questions · {difficulty} ·{" "}
              {timerEnabled ? `${timeLimit}s per question` : "No time limit"} ·{" "}
              {answerOptions} answer options
            </p>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#6042c2] px-6 py-3 font-semibold text-white transition hover:bg-[#7656dc] focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 focus:ring-offset-[#0f1b2d]"
          >
            Start Quiz →
          </button>
        </form>
      </div>
    </main>
  );
}
