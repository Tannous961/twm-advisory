import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ProgressBar } from "@/components/ProgressBar";
import { SkipLink } from "@/components/SkipLink";
import { buildJsonLd } from "@/lib/seo";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="page-shell relative overflow-x-hidden">
      <JsonLd data={buildJsonLd()} />
      <SkipLink />
      <ProgressBar />
      <div className="relative z-1 flex min-h-dvh flex-col">
        <Header />
        <main id="main-content" className="w-full flex-1" tabIndex={-1}>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
