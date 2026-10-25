import achievements from "../data/achievementsData.js";
import InformationList from "../components/components/common-tamplate/InformationList";

export default function Achievements() {
  return (
    <InformationList
      title="Achievements"
      items={achievements}
      basePath="/achievements"
    />
  );
}