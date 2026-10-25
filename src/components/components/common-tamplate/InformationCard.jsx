import { Link } from "react-router-dom";

export default function InformationCard({
  item,
  basePath,
  titleKey = "title",
  dateKey = "date",
}) {
  const title = item[titleKey];
  const date = item[dateKey];
  const slug = item.slug || item.name || item.title;

  return (
    <article className="bg-[#0E1A2B] border border-[#6142BF] rounded-2xl overflow-hidden shadow-lg hover:border-purple-400 transition flex flex-col h-full">
      <div className="h-48 bg-[#111827] mx-2 mt-2 rounded-xl overflow-hidden">
        {item.image ? (
          <img
            src={item.image}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            No image available
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h2 className="text-xl font-semibold text-white">
          {title}
        </h2>

        {date && (
          <p className="text-purple-300 text-sm mt-2">
            {date}
          </p>
        )}

        <p className="text-gray-300 mt-3 leading-relaxed flex-1">
          {item.shortDescription}
        </p>

        <Link
          to={`${basePath}/${encodeURIComponent(slug)}`}
          className="inline-block self-start mt-auto pt-5"
        >
          <span className="inline-block rounded-lg bg-[#6142BF] px-4 py-2 text-white hover:bg-purple-500 transition">
            Know More
          </span>
        </Link>
      </div>
    </article>
  );
}