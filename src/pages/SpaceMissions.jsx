import spaceMissions from "../data/spaceMissionsData.js";
import InformationList from "../components/components/common-tamplate/InformationList";

export default function SpaceMissions() {
  return (
    <InformationList
      title="Space Missions"
      items={spaceMissions}
      basePath="/space-missions"
    />
  );
}