import discoveries from "../data/discoveriesData.js";
import InformationList from "../components/components/common-tamplate/InformationList";

export default function Discoveries() {
  return (
    <InformationList
      title="Space Discoveries"
      items={discoveries}
      basePath="/discoveries"
    />
  );
}