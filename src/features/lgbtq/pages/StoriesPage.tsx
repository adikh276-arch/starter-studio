import { ScrollText } from "lucide-react";
import { Sidebar } from "@/components/Sidebar";
import { MobileNav } from "@/components/MobileNav";
import { PageHeader } from "@/shared/components";

interface Story {
  id: string;
  title: string;
  excerpt: string;
  body: string;
}

/**
 * Curated, in-app community stories. Kept short and editorially safe; no
 * external links or scrapers. Replace / expand from CMS later if needed.
 */
const STORIES: Story[] = [
  {
    id: "first-pride",
    title: "My first Pride felt like coming home",
    excerpt: "I went alone. I didn't stay alone.",
    body:
      "I'd hidden for years. The first Pride I attended, I stood at the edge of the crowd, sure I'd be spotted as a fraud. " +
      "Within an hour someone handed me a flag, asked my name, and meant it. I cried twice that day. The second time was because I realised I'd been holding my breath since I was twelve.",
  },
  {
    id: "telling-mom",
    title: "Telling my mom — twice",
    excerpt: "The first conversation didn't land. The second one did.",
    body:
      "The first time I told her, she said 'okay' and changed the subject. I thought that was it. " +
      "Months later I tried again, this time with a letter she could re-read. She kept it. She called me a week later and asked questions. We're still figuring it out, but we're figuring it out together.",
  },
  {
    id: "small-pride",
    title: "Pride on an ordinary Tuesday",
    excerpt: "Pride isn't only the parade.",
    body:
      "Pride for me is wearing my pin to work. Correcting a colleague gently and moving on. " +
      "Texting another queer friend just to say I'm thinking of them. The small daily yeses to myself are the parade I march in most.",
  },
  {
    id: "chosen-family",
    title: "Chosen family is real family",
    excerpt: "Some of us build the family we needed.",
    body:
      "I haven't spoken to my parents in three years. I have four people who'd answer my call at 3am. " +
      "We cook on Sundays. We argue about whose turn it is to host. We show up for each other's hard weeks. That's family, by every measure that matters.",
  },
];

export function StoriesPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <MobileNav />
      <main className="flex-1 max-w-[820px] mx-auto px-4 md:px-6 py-4 md:py-8 pt-[72px] md:pt-8">
        <PageHeader
          title="Community Stories"
          subtitle="Real-feeling stories from the LGBTQ+ community."
          icon={ScrollText}
          backTo="/lgbtq"
        />
        <div className="flex flex-col gap-4 pb-12">
          {STORIES.map((s) => (
            <article key={s.id} className="rounded-2xl border border-border bg-card p-5">
              <h2 className="text-base font-semibold text-foreground">{s.title}</h2>
              <p className="mt-1 text-sm italic text-muted-foreground">{s.excerpt}</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground">{s.body}</p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}