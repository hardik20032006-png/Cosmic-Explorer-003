
import spaceMissions from "../spaceMissionsData";
import SpaceMissionCard from "../components/components/SpaceMissionCard";

export default function SpaceMissions() {
  return (
    <div className="px-6 md:px-8 pt-4 pb-8">
      <h1 className="text-3xl font-bold text-white mb-8">
        Space Missions
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {spaceMissions.map((mission) => (
          <SpaceMissionCard
            key={mission.id}
            mission={mission}
          />
        ))}
      </div>
    </div>
  );
}
