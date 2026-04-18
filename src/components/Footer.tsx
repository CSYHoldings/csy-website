"use client";

import { links } from "@/constants/links";
import { useTranslations } from "next-intl";
import Image from "next/image";

const navLinks = [
  { labelKey: "home", href: "#home" },
  { labelKey: "about", href: "#about" },
  { labelKey: "features", href: "#features" },
  { labelKey: "approach", href: "#approach" },
  { labelKey: "evidence", href: "#evidence" },
  { labelKey: "partners", href: "#partners" },
];

export function Footer() {
  const t = useTranslations("Footer");
  const navT = useTranslations("Nav");

  return (
    <footer className="relative border-t border-surface-border bg-surface/50">
      <div className="w-full max-w-350 mx-auto px-8 md:px-12 lg:px-16 py-20">
        <div className="grid gap-16 md:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="relative h-16 w-44 overflow-hidden">
              <Image
                fill
                sizes="176px"
                src="/logo.png"
                alt={t("brand")}
                className="object-contain object-left"
              />
            </div>
            <p className="mt-5 max-w-sm text-base leading-relaxed text-text-secondary">
              {t("description")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-tertiary">
              {t("navigation")}
            </h4>
            <ul className="mt-5 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-base text-text-secondary transition-colors hover:text-foreground"
                  >
                    {navT(link.labelKey)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-tertiary">
              {t("followUs")}
            </h4>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={links.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base text-text-secondary transition-colors hover:text-foreground"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                  </svg>
                  {t("discord")}
                </a>
              </li>
              <li>
                <a
                  href={links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-base text-text-secondary transition-colors hover:text-foreground"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    aria-hidden="true"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                  {t("instagram")}
                </a>
              </li>
            </ul>
            <div className="mt-8">
              <a
                href={links.discord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-7 py-3 text-base font-medium text-white transition-all hover:shadow-lg hover:shadow-accent/25"
              >
                {t("joinCommunity")}
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 border-t border-surface-border pt-10">
          <p className="text-sm text-text-tertiary">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-text-tertiary">
            {t("disclaimer")}
          </p>
        </div>
      </div>
    </footer>
  );
}
