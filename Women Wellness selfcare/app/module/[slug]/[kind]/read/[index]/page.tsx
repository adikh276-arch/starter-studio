import ArticleStoryPage from "@/views/ArticleStory"
export function generateStaticParams() {
  const slugs = ["pcos", "reproductive-health", "medical-conditions", "nutrition-weight", "pregnancy-postpartum", "mental-health", "fertility", "menopause"];
  const kinds = ["articles", "stories"];
  const params: {slug: string, kind: string, index: string}[] = [];
  slugs.forEach(s => kinds.forEach(k => {
    for (let i = 0; i < 20; i++) params.push({ slug: s, kind: k, index: i.toString() })
  }));
  return params;
}
export default function ArticleStory() { return <ArticleStoryPage /> }
