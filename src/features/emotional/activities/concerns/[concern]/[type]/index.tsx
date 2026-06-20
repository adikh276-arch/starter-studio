import { useParams, Navigate } from "react-router";

export default function StaticContentPage() {
  const { concern, type } = useParams();
  return <Navigate to={`/emotional/resources/${concern}/${type}`} replace />;
}
