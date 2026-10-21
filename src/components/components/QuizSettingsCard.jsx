
export default function QuizSettingsCard({
  number,
  title,
  description,
  children,
}) {
  return (
    <section className="rounded-2xl border border-[#5940a5] bg-[#0f1b2d] p-5 sm:p-6">
      <div className="mb-6 flex items-start gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#5940a5] bg-[#29204a] font-bold text-purple-200">
          {number}
        </span>

        <div>
          <h2 className="text-lg font-bold text-white sm:text-xl">
            {title}
          </h2>
          <p className="mt-1 text-sm leading-6 text-slate-400">
            {description}
          </p>
        </div>
      </div>

      {children}
    </section>
  );
}
