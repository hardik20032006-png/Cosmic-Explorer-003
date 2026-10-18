
import { useParams, Link } from "react-router-dom";
import scientists from "../scientistsData";

export default function ScientistDetails() {
  const { name } = useParams();

  const scientist = scientists.find(
    (item) => item.name === name
  );

  if (!scientist) {
    return (
      <div className="min-h-full flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Scientist Not Found
          </h1>

          <p className="mt-3 text-gray-400">
            The scientist you are looking for does not exist.
          </p>

          <Link
            to="/scientists"
            className="inline-block mt-6 px-5 py-2 rounded-lg bg-[#6142BF] text-white hover:bg-purple-500 transition"
          >
            ← Back to Scientists
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-8 pt-2 pb-8">

      {/* Back button */}
      <Link
        to="/scientists"
        className="inline-flex items-center text-purple-300 hover:text-white transition mb-4"
      >
        ← Back to Scientists
      </Link>

      {/* Main detail card */}
      <article className="bg-[#0E1A2B] border border-[#6142BF] rounded-2xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            {scientist.name}
          </h1>
        </div>

        {/* Image and scientist information */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 px-6 md:px-8 pb-8">

          {/* Image */}
          <div className="rounded-xl overflow-hidden bg-[#111827] border border-[#1D2949]">
            <img
              src={scientist.image}
              alt={scientist.name}
              className="w-full h-[300px] md:h-[420px] object-cover"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Information panel */}
          <div className="bg-[#111827] rounded-xl border border-[#1D2949] p-6">

            <h2 className="text-xl font-semibold text-white mb-5">
              Scientist Information
            </h2>

            <div className="space-y-5">

              <div>
                <p className="text-sm text-purple-300">Scientist</p>
                <p className="text-white mt-1">{scientist.name}</p>
              </div>

              <div>
                <p className="text-sm text-purple-300">Country</p>
                <p className="text-white mt-1">{scientist.country}</p>
              </div>

              <div>
                <p className="text-sm text-purple-300">Born</p>
                <p className="text-white mt-1">{scientist.born}</p>
              </div>

              <div>
                <p className="text-sm text-purple-300">Died</p>
                <p className="text-white mt-1">{scientist.died}</p>
              </div>

            </div>
          </div>
        </div>

        {/* Work and contributions */}
        <div className="px-6 md:px-8 pb-8">
          <div className="border-t border-[#1D2949] pt-8">

            <h2 className="text-2xl font-semibold text-white">
              Work &amp; Contributions
            </h2>

            <div
              className="mt-5 text-gray-300 leading-8 text-base md:text-lg max-w-5xl whitespace-pre-line break-words"
            >
              {scientist.description || scientist.shortDescription || "Detailed information about this scientist will be added soon."}
            </div>

          </div>
        </div>

      </article>
    </div>
  );
}
