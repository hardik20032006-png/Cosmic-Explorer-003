import scientists from "../data/scientistsData.js";
import InformationList from "../components/components/common-tamplate/InformationList";

export default function Scientists() {
  return (
    <InformationList
      title="Scientists"
      items={scientists}
      basePath="/scientists"
      titleKey="name"
      dateKey="born"
    />
  );
}