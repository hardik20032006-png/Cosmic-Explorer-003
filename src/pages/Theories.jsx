import theories from "../data/theoriesData.js";
import InformationList from "../components/components/common-tamplate/InformationList";

export default function Theories() {
  return (
    <InformationList
      title="Space Theories"
      items={theories}
      basePath="/theories"
    />
  );
}