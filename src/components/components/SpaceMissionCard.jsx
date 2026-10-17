
import { Link } from "react-router-dom";

export default function SpaceMissionCard({ mission }) {
  return (
    <article className="bg-[#0E1A2B] border border-[#6142BF] rounded-2xl overflow-hidden shadow-lg hover:border-purple-400 transition flex flex-col h-full">
      <div className="h-48 bg-[#111827] mx-2 mt-2 rounded-xl overflow-hidden">
        {mission.image && (
          <img
            src={mission.image}
            alt={mission.title}
            className="w-full h-full object-cover"
          />
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-xl font-semibold text-white">
          {mission.title}
        </h2>

        <p className="text-purple-300 text-sm mt-2">
          {mission.date}
        </p>

        <p className="text-gray-300 mt-3 leading-relaxed">
          {mission.shortDescription}
        </p>

        <Link
          to={`/space-missions/${mission.slug}`}
          className="inline-block mt-auto pt-5"
        >
          <span className="inline-block rounded-lg bg-[#6142BF] px-4 py-2 text-white hover:bg-purple-500 transition">
            Know More
          </span>
        </Link>
      </div>
    </article>
  );
}
