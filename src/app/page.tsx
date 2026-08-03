import { About } from "@/components/About";
import { Approach } from "@/components/Approach";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { Fit } from "@/components/Fit";
import { Footer } from "@/components/Footer";
import { Fractional } from "@/components/Fractional";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Infrastructure } from "@/components/Infrastructure";
import { JsonLd } from "@/components/JsonLd";
import { Offers } from "@/components/Offers";
import { Partners } from "@/components/Partners";
import { Problem } from "@/components/Problem";
import { ProgressBar } from "@/components/ProgressBar";
import { Stats } from "@/components/Stats";
import { Watch } from "@/components/Watch";
import { buildJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <div className="page-shell relative overflow-x-hidden">
      <JsonLd data={buildJsonLd()} />
      <ProgressBar />
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        aria-hidden
      >
        <div className="content-wrap grid h-full grid-cols-4">
          <div className="border-l border-[color:var(--line)] opacity-40" />
          <div className="border-l border-[color:var(--line)] opacity-40" />
          <div className="border-l border-[color:var(--line)] opacity-40" />
          <div className="border-x border-[color:var(--line)] opacity-40" />
        </div>
      </div>
      <div className="relative z-1">
        <Header />
        <main className="w-full">
          <Hero />
          <Stats />
          <Problem />
          <Approach />
          <Offers />
          <Fractional />
          <Fit />
          <Infrastructure />
          <About />
          <Partners />
          <Watch />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
