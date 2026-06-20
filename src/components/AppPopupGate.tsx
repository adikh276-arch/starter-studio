import { useEffect, useState } from "react";
import { AppBetterPopup } from "@/components/modals/AppBetterPopup";

export function AppPopupGate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const userString = localStorage.getItem("mantraUser");
    if (!userString) return;
    try {
      const user = JSON.parse(userString);
      if (user.showAppPopup !== false) setOpen(true);
    } catch {}
  }, []);

  if (!open) return null;
  return <AppBetterPopup onClose={() => setOpen(false)} />;
}
