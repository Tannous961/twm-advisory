import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { ProgressBar } from "@/components/ProgressBar";
import { buildJsonLd } from "@/lib/seo";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="page-shell relative overflow-x-hidden">
      <JsonLd data={buildJsonLd()} />
      <ProgressBar />
      <div
        className="pointer-events-none absolute inset-0 z-0 hidden lg:block"
        aria-hidden
      >
        <div className="content-wrap grid h-full grid-cols-4">
          <div className="border-l border-[color:var(--line)] opacity-25" />
          <div className="border-l border-[color:var(--line)] opacity-25" />
          <div className="border-l border-[color:var(--line)] opacity-25" />
          <div className="border-x border-[color:var(--line)] opacity-25" />
        </div>
      </div>
      <div className="relative z-1 flex min-h-dvh flex-col">
        <Header />
        <main className="w-full flex-1">{children}</main>
        <Footer />
      </div>
    </div>
  );
}
