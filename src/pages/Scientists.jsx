import scientists from "../scientistsData";
import ScientistCard from "../components/components/ScientistCard";

export default function Scientists() {
  return (
    <div className="px-8 pt-4 pb-8">

      <h1 className="text-3xl font-bold text-white mb-8">
        Scientists
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {scientists.map((scientist) => (
          <ScientistCard
            key={scientist.id}
            scientist={scientist}
          />
        ))}

      </div>

    </div>
  );
}