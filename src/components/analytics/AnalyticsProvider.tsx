"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { getConsent, pageview } from "@/lib/analytics";
import { GoogleTagManager } from "./GoogleTagManager";

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (getConsent() !== "granted") return;
    const qs = searchParams?.toString();
    const path = qs ? `${pathname}?${qs}` : pathname;
    pageview(path);
  }, [pathname, searchParams]);

  return null;
}

export function AnalyticsProvider() {
  return (
    <>
      <GoogleTagManager />
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
    </>
  );
}
