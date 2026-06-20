/** Stable slug used for exercise URLs across the coaching vertical. */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/[^\w-]+/g, "");
}