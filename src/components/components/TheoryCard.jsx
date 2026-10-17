
import { Link } from "react-router-dom";

export default function TheoryCard({ theory }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#6142BF] bg-[#0E1A2B] shadow-lg transition hover:border-purple-400">
      {/* Image */}
      <div className="mx-2 mt-2 h-48 overflow-hidden rounded-xl bg-[#111827]">
        {theory.image && (
          <img
            src={theory.image}
            alt={theory.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h2 className="mb-2 text-xl font-semibold text-white">
          {theory.title}
        </h2>

        <p className="mb-2 text-sm text-purple-300">
          {theory.year} · {theory.scientist}
        </p>

        <p className="mb-5 flex-1 leading-relaxed text-gray-300">
          {theory.shortDescription}
        </p>

        <Link
          to={`/theories/${theory.slug}`}
          className="mt-auto w-fit rounded-lg bg-[#6142BF] px-4 py-2 text-white transition hover:bg-purple-500"
        >
          Know More
        </Link>
      </div>
    </article>
  );
}
