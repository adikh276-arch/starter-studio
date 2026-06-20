import { Sparkles, Activity, Heart } from "lucide-react";
import { SymptomLogPage } from "./SymptomLogPage";

/**
 * Concrete sub-app pages built on top of the reusable SymptomLogPage. Each
 * provides its own symptom vocabulary and storage namespace.
 */

export function MenopausePage() {
  return (
    <SymptomLogPage
      title="Menopause"
      subtitle="Symptom tracking and guidance through menopause."
      icon={Sparkles}
      storageKey="menopause-log"
      symptomOptions={[
        "Hot flashes", "Night sweats", "Sleep issues", "Mood swings", "Anxiety",
        "Brain fog", "Joint pain", "Vaginal dryness", "Low libido", "Fatigue",
      ]}
    />
  );
}

export function PcosPage() {
  return (
    <SymptomLogPage
      title="PCOS"
      subtitle="PCOS-aware tools, tracking and education."
      icon={Activity}
      storageKey="pcos-log"
      symptomOptions={[
        "Irregular cycle", "Acne", "Hair loss", "Excess hair", "Weight changes",
        "Mood swings", "Bloating", "Fatigue", "Pelvic pain", "Sugar cravings",
      ]}
    />
  );
}

export function ReproductiveHealthPage() {
  return (
    <SymptomLogPage
      title="Reproductive Health"
      subtitle="Whole-cycle reproductive wellbeing."
      icon={Heart}
      storageKey="repro-log"
      symptomOptions={[
        "Cramps", "Heavy flow", "Spotting", "Headache", "Breast tenderness",
        "Discharge changes", "Pelvic pain", "Low mood", "Bloating", "Fatigue",
      ]}
    />
  );
}