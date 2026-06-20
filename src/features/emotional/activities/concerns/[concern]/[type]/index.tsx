import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { StaticContentViewerClient } from "@/features/emotional/components/hub/StaticContentViewerClient";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ concern: string; type: string }>;
}) {
  const { concern, type } = useParams();
  return {
    title: `${concern.replace(/-/g, ' ')} ${type} | TherapyMantra`,
    description: `Read ${type} about ${concern.replace(/-/g, ' ')}.`,
  };
}

import { useParams } from "react-router";
export default function StaticContentPage() {
  const cookieStore = await cookies();
  if (!cookieStore.get("user_id")?.value) {
    redirect("/token");
  }

  const { concern, type } = await params;
  redirect(`/emotional/resources/${concern}/${type}`);
}
