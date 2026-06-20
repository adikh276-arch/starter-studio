import TipPage from "@/views/Tip"
export function generateStaticParams() {
  return ["hair-skin", "food", "weight-loss", "pms"].map(slug => ({ slug }))
}
export default function Tip() { return <TipPage /> }
