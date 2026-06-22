import { useParams } from "react-router";
import { GuidedActivityClient } from "./GuidedActivityClient";

export default function GuidedActivityPage() {
  const { concern = "", activityName = "" } = useParams();
  const decoded = decodeURIComponent(activityName);

  return <GuidedActivityClient concern={concern} activityName={decoded} />;
}
