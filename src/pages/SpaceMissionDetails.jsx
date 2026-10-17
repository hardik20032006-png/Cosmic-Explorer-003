
import { useParams, Link } from "react-router-dom";
import spaceMissions from "../spaceMissionsData";

export default function SpaceMissionDetails() {
  const { slug } = useParams();

  const mission = spaceMissions.find(
    (item) => item.slug === slug
  );

  if (!mission) {
    return (
      <div className="min-h-full flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Mission Not Found
          </h1>

          <p className="mt-3 text-gray-400">
            The mission you are looking for does not exist.
          </p>

          <Link
            to="/space-missions"
            className="inline-block mt-6 px-5 py-2 rounded-lg bg-[#6142BF] text-white hover:bg-purple-500 transition"
          >
            ← Back to Space Missions
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-8 pt-2 pb-8">
      <Link
        to="/space-missions"
        className="inline-flex items-center text-purple-300 hover:text-white transition mb-4"
      >
        ← Back to Space Missions
      </Link>

      <article className="bg-[#0E1A2B] border border-[#6142BF] rounded-2xl shadow-2xl overflow-hidden">
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            {mission.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-start gap-8 px-6 md:px-8 pb-8">
          <div className="rounded-xl overflow-hidden bg-[#111827] border border-[#1D2949]">
            {mission.image ? (
              <img
                src={mission.image}
                alt={mission.title}
                className="w-full h-[300px] md:h-[420px] object-cover"
              />
            ) : (
              <div className="w-full h-[300px] md:h-[420px] flex items-center justify-center text-gray-400">
                No image available
              </div>
            )}
          </div>

          <div className="bg-[#111827] rounded-xl border border-[#1D2949] p-6">
            <h2 className="text-xl font-semibold text-white mb-5">
              Mission Information
            </h2>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-purple-300">Mission</p>
                <p className="text-white mt-1">{mission.title}</p>
              </div>

              <div>
                <p className="text-sm text-purple-300">Agency</p>
                <p className="text-white mt-1">{mission.agency}</p>
              </div>

              <div>
                <p className="text-sm text-purple-300">Launch Date</p>
                <p className="text-white mt-1">{mission.date}</p>
              </div>

              <div>
                <p className="text-sm text-purple-300">Destination</p>
                <p className="text-white mt-1">{mission.destination}</p>
              </div>

              <div>
                <p className="text-sm text-purple-300">Status</p>
                <p className="text-white mt-1">{mission.status}</p>
              </div>

              <div>
                <p className="text-sm text-purple-300">Short Description</p>
                <p className="text-gray-300 mt-1 leading-relaxed">
                  {mission.shortDescription}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 md:px-8 pb-8">
          <div className="border-t border-[#1D2949] pt-8">
            <h2 className="text-2xl font-semibold text-white">
              About This Mission
            </h2>

            <p className="mt-5 text-gray-300 leading-8 text-base md:text-lg max-w-5xl whitespace-pre-line">
              {mission.description}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
