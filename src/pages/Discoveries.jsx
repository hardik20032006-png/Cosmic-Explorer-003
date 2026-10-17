import discoveries from "../discoveriesData";
import DiscoveryCard from "../components/components/DiscoveryCard";

export default function Discoveries() {
  return (
    <div className="px-8 pt-4 pb-8">
      <h1 className="text-3xl font-bold text-white mb-8">
        Space Discoveries
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {discoveries.map((discovery) => (
          <DiscoveryCard
            key={discovery.id}
            discovery={discovery}
          />
        ))}
      </div>
    </div>
  );
}