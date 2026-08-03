"use client";

import { Marquee } from "@/components/Marquee";
import { useI18n } from "@/lib/i18n";

export function HomeMarquee() {
  const { lang, c } = useI18n();
  return <Marquee items={[...c.home.marquee[lang]]} />;
}
