import ModulePage from "@/views/Module"
export function generateStaticParams() {
  return ["pcos", "reproductive-health", "medical-conditions", "nutrition-weight", "pregnancy-postpartum", "mental-health", "fertility", "menopause"].map(slug => ({ slug }))
}
export default function Module() { return <ModulePage /> }
