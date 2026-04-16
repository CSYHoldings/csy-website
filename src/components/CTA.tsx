"use client";

import { links } from "@/constants/links";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { AnimatedSection } from "./AnimatedSection";

export function CTA() {
  const t = useTranslations("CTA");
  const checks = ["markets", "sessions", "depth"];

  return (
    <section className="relative overflow-hidden py-28 lg:py-36">
      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-surface-border to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-150 w-150 rounded-full bg-accent/10 blur-[180px]" />
      </div>

      <div className="relative w-full max-w-250 mx-auto px-8 md:px-12 lg:px-16 text-center">
        <AnimatedSection>
          <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl xl:text-7xl">
            {t("titlePrefix")}{" "}
            <span className="text-gradient">{t("titleAccent")}</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-text-secondary lg:text-xl">
            {t("subtitle")}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={links.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-gradient-accent px-12 py-5 text-lg font-semibold text-white shadow-xl shadow-accent/25 transition-shadow hover:shadow-2xl hover:shadow-accent/30"
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
              {t("button")}
            </motion.a>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-base text-text-tertiary">
            {checks.map((check) => (
              <div key={check} className="flex items-center gap-2">
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {t(`checks.${check}`)}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
