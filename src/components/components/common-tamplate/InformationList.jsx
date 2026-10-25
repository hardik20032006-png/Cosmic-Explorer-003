import InformationCard from "./InformationCard";

export default function InformationList({
  title,
  items,
  basePath,
  titleKey = "title",
  dateKey = "date",
}) {
  return (
    <div className="px-6 md:px-8 pt-4 pb-8">
      <h1 className="text-3xl font-bold text-white mb-8">
        {title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((item) => (
          <InformationCard
            key={item.id}
            item={item}
            basePath={basePath}
            titleKey={titleKey}
            dateKey={dateKey}
          />
        ))}
      </div>
    </div>
  );
}