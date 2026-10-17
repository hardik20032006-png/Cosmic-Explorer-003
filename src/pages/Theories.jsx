import theories from "../theoriesData";
import TheoryCard from "../components/components/TheoryCard";

export default function Theories() {
  return (
    <div className="px-8 pt-4 pb-8">
      <h1 className="text-3xl font-bold text-white mb-8">
        Space Theories
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {theories.map((theory) => (
          <TheoryCard
            key={theory.id}
            theory={theory}
          />
        ))}
      </div>
    </div>
  );
}