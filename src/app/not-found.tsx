import Link from "next/link";

export default function NotFound() {
  return (
    <main className="content-wrap flex min-h-[70dvh] flex-col justify-center py-20">
      <p className="type-label tracking-[0.16em] text-accent">404</p>
      <h1 className="type-h1 mt-4 max-w-2xl">
        Cette page n&apos;existe pas.
      </h1>
      <p className="type-body mt-5 max-w-xl text-muted">
        Le lien est peut-être ancien, ou la page a été déplacée. Voici les
        chemins utiles pour continuer.
      </p>
      <nav
        aria-label="Liens utiles"
        className="mt-10 flex flex-wrap gap-3"
      >
        {[
          { href: "/", label: "Accueil" },
          { href: "/performance", label: "Performance" },
          { href: "/faq", label: "FAQ" },
          { href: "/contact", label: "Contact" },
          { href: "/demarrer", label: "Démarrer" },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="btn-secondary rounded-full px-5 py-2.5"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </main>
  );
}
