import { AudienceCarousel } from "@/components/AudienceCarousel";
import { CtaBand } from "@/components/CtaBand";
import { Hero } from "@/components/Hero";
import { HomeArchitecture } from "@/components/HomeArchitecture";
import { HomeFaq } from "@/components/HomeFaq";
import { HomeFeatures } from "@/components/HomeFeatures";
import { HomeMarquee } from "@/components/HomeMarquee";
import { HomeOffers } from "@/components/HomeOffers";
import { HomeProblem } from "@/components/HomeProblem";
import { Stats } from "@/components/Stats";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeMarquee />
      <Stats />
      <AudienceCarousel />
      <HomeProblem />
      <HomeFeatures />
      <HomeOffers />
      <HomeArchitecture />
      <HomeFaq />
      <CtaBand />
    </>
  );
}
