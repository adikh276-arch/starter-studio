import { SelfCareHub } from "@/features/emotional/components/hub/SelfCareHub";

export const metadata = {
  title: "Self-Care Resources | TherapyMantra",
  description: "Explore topic-specific exercises, tools, and guided series for your mental wellness journey.",
};

// AUTH TEMPORARILY DISABLED FOR LOCAL UI TESTING
// TODO: Restore auth before deployment
import { useParams } from "react-router";
export default function TopicPage() {
  const { topicId } = useParams();
  return <SelfCareHub topicId={topicId} />;
}
