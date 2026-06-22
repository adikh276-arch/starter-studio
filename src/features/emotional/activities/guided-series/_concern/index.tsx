import { useParams } from "react-router";
import guidedData from "@/features/emotional/data/guidedSeries.json";
import { GuidedSeriesClient } from "./GuidedSeriesClient";

export default function GuidedSeriesPage() {
  const { concern = "" } = useParams();

  // Case-insensitive lookup
  const lookupKey = Object.keys(guidedData).find(
    (k) => k.toLowerCase() === concern.toLowerCase()
  );
  const data = lookupKey ? (guidedData as any)[lookupKey] : null;

  return <GuidedSeriesClient concern={concern} data={data} />;
}
