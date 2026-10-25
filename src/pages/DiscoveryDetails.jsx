
import { useParams, Link } from "react-router-dom";
import discoveries from "../data/discoveriesData.js";

export default function DiscoveryDetails() {
  const { slug } = useParams();

  const discovery = discoveries.find(
    (item) => String(item.slug) === String(slug)
  );

  if (!discovery) {
    return (
      <div className="min-h-full flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-white">
            Discovery Not Found
          </h1>

          <p className="mt-3 text-gray-400">
            The discovery you are looking for does not exist.
          </p>

          <Link
            to="/discoveries"
            className="inline-block mt-6 px-5 py-2 rounded-lg bg-[#6142BF] text-white hover:bg-purple-500 transition"
          >
            ← Back to Discoveries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-8 pt-2 pb-8">
      <Link
        to="/discoveries"
        className="inline-flex items-center text-purple-300 hover:text-white transition mb-4"
      >
        ← Back to Discoveries
      </Link>

      <article className="bg-[#0E1A2B] border border-[#6142BF] rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-white">
            {discovery.title}
          </h1>
        </div>

        {/* Image and information */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] items-start gap-8 px-6 md:px-8 pb-8">
          {/* Discovery image */}
          <div className="w-full h-[300px] md:h-[420px] rounded-xl overflow-hidden bg-[#111827] border border-[#1D2949]">
            {discovery.image ? (
              <img
                src={discovery.image}
                alt={discovery.title}
                className="w-full h-full object-cover"
                onError={(event) => {
                  event.currentTarget.style.display = "none";

                  const fallback =
                    event.currentTarget.parentElement?.querySelector(
                      "[data-image-fallback]"
                    );

                  if (fallback) {
                    fallback.style.display = "flex";
                  }
                }}
              />
            ) : null}

            <div
              data-image-fallback
              className="w-full h-full items-center justify-center text-gray-400"
              style={{
                display: discovery.image ? "none" : "flex",
              }}
            >
              No image available
            </div>
          </div>

          {/* Discovery information */}
          <div className="bg-[#111827] rounded-xl border border-[#1D2949] p-6">
            <h2 className="text-xl font-semibold text-white mb-5">
              Discovery Information
            </h2>

            <div className="space-y-5">
              <div>
                <p className="text-sm text-purple-300">Discovery</p>
                <p className="text-white mt-1">{discovery.title}</p>
              </div>

              <div>
                <p className="text-sm text-purple-300">Date</p>
                <p className="text-white mt-1">
                  {discovery.date || "Not specified"}
                </p>
              </div>

              <div>
                <p className="text-sm text-purple-300">Location</p>
                <p className="text-white mt-1">
                  {discovery.location || "Not specified"}
                </p>
              </div>

              <div>
                <p className="text-sm text-purple-300">
                  Short Description
                </p>
                <p className="text-gray-300 mt-1 leading-relaxed">
                  {discovery.shortDescription || "No description available."}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Full description */}
        <div className="px-6 md:px-8 pb-8">
          <div className="border-t border-[#1D2949] pt-8">
            <h2 className="text-2xl font-semibold text-white">
              About This Discovery
            </h2>

            <p className="mt-5 text-gray-300 leading-8 text-base md:text-lg max-w-5xl whitespace-pre-line">
              {discovery.description || "More information coming soon."}
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
