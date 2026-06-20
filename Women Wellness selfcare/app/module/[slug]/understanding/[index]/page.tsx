import UnderstandingPage from "@/views/Understanding"
export function generateStaticParams() {
  const slugs = ["pcos", "reproductive-health", "medical-conditions", "nutrition-weight", "pregnancy-postpartum", "mental-health", "fertility", "menopause"];
  const params: {slug: string, index: string}[] = [];
  slugs.forEach(s => {
    for (let i = 0; i < 10; i++) params.push({ slug: s, index: i.toString() })
  });
  return params;
}
export default function Understanding() { return <UnderstandingPage /> }
