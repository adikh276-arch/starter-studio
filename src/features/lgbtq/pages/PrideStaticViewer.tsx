import { useMemo } from "react";
import { useNavigate, useParams } from "react-router";
import { PrideActivityHeader } from "../components/pride/PrideActivityHeader";
import { PrideFloatingOrbs } from "../components/pride/PrideFloatingOrbs";
import "../styles/pride.css";

const slugMetadata: Record<string, { title: string; subtitle: string }> = {
  "celebrate-wlw": { title: "Celebrate WLW", subtitle: "Honoring women loving women" },
  "coming-out-practice": { title: "Coming Out Practice", subtitle: "Prepare for your journey" },
  "confidence-mirror": { title: "Confidence Mirror", subtitle: "Building self-assurance" },
  "when-they-react": { title: "Handle Reactions", subtitle: "Navigating others' responses" },
  "gay-and-proud": { title: "Gay And Proud", subtitle: "Embracing your identity" },
  "gay-coming-out": { title: "Gay Coming Out", subtitle: "Resources for your path" },
  "dealing-with-homophobia": { title: "Dealing with Homophobia", subtitle: "Support and strategies" },
  "lesbian-power-booster": { title: "Lesbian Power Booster", subtitle: "Empowering your voice" },
  "real-stories-of-lesbian-women": { title: "Lesbian Stories", subtitle: "Voices from the community" },
  "masculinity-on-your-own-terms": { title: "Authentic Masculinity", subtitle: "Defining your own path" },
  "lgbtq-stories": { title: "LGBTQ+ Stories", subtitle: "Real journeys of finding yourself" },
};

export default function PrideStaticViewer() {
  const navigate = useNavigate();
  const { slug = "" } = useParams();
  const metadata = slugMetadata[slug] ?? { title: "Pride Resources", subtitle: "Explore and grow" };
  const src = useMemo(() => `/static/pride/${encodeURIComponent(slug)}/index.html`, [slug]);
  const handleBack = () => {
    if (window.history.length > 1) navigate(-1);
    else navigate("/lgbtq");
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#FDFCFE] relative overflow-hidden">
      <PrideFloatingOrbs />

      <div className="relative z-50 bg-white/40 backdrop-blur-md border-b border-white/20">
        <div className="activity-container-lg py-4 px-4 md:px-6">
          <PrideActivityHeader
            title={metadata.title}
            subtitle={metadata.subtitle}
            onBack={handleBack}
            className="mb-0"
          />
        </div>
      </div>

      <div className="flex-1 w-full relative z-10 min-h-[calc(100vh-96px)]">
        <iframe
          src={src}
          title={`Pride activity: ${metadata.title}`}
          className="w-full h-full absolute inset-0"
          style={{ border: "none" }}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    </div>
  );
}