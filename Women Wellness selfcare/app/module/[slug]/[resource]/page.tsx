import ResourcePage from "@/views/Resource"
export function generateStaticParams() {
  const slugs = ["pcos", "reproductive-health", "medical-conditions", "nutrition-weight", "pregnancy-postpartum", "mental-health", "fertility", "menopause"];
  const resources = ["articles", "stories", "understanding", "myths"];
  const params: {slug: string, resource: string}[] = [];
  slugs.forEach(s => resources.forEach(r => params.push({ slug: s, resource: r })));
  return params;
}
export default function Resource() { return <ResourcePage /> }
