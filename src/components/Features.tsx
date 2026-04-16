"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "./AnimatedSection";
import { SectionLabel } from "./SectionLabel";

const features = [
  {
    key: "daily",
    number: "01",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
        />
      </svg>
    ),
  },
  {
    key: "live",
    number: "02",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
        />
      </svg>
    ),
  },
  {
    key: "coaching",
    number: "03",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342"
        />
      </svg>
    ),
  },
  {
    key: "flow",
    number: "04",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
];

export function Features() {
  const t = useTranslations("Features");

  return (
    <section id="features" className="relative overflow-hidden py-28 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-surface-border to-transparent" />
      <div className="absolute right-0 top-1/2 h-150 w-150 -translate-y-1/2 rounded-full bg-accent/3 blur-[180px]" />

      <div className="relative w-full max-w-350 mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel label={t("label")} />
          <AnimatedSection>
            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t("titlePrefix")}{" "}
              <span className="text-accent">{t("titleAccent")}</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-6 text-lg text-text-secondary lg:text-xl">
              {t("subtitle")}
            </p>
          </AnimatedSection>
        </div>

        {/* Feature cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2">
          {features.map((feature, i) => (
            <AnimatedSection key={feature.number} delay={i * 0.1}>
              <div className="border-gradient group relative overflow-hidden rounded-2xl p-10 transition-all duration-300 hover:bg-surface-light h-full">
                {/* Number watermark */}
                <span className="absolute -right-4 -top-6 text-[140px] font-black leading-none text-foreground/2 select-none pointer-events-none">
                  {feature.number}
                </span>

                <div className="relative z-10">
                  <div className="flex items-center gap-5">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent-light transition-colors group-hover:bg-accent/20">
                      {feature.icon}
                    </div>
                    <div>
                      <span className="text-sm font-mono text-accent-light">
                        {feature.number}
                      </span>
                      <h3 className="text-2xl font-semibold text-foreground">
                        {t(`items.${feature.key}.title`)}
                      </h3>
                    </div>
                  </div>
                  <p className="mt-6 text-lg leading-relaxed text-text-secondary">
                    {t(`items.${feature.key}.desc`)}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
