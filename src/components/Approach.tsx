"use client";

import { useTranslations } from "next-intl";
import { AnimatedSection } from "./AnimatedSection";
import { SectionLabel } from "./SectionLabel";

const steps = [
  {
    key: "data",
    number: "01",
    color: "from-blue-500 to-indigo-500",
  },
  {
    key: "direction",
    number: "02",
    color: "from-indigo-500 to-purple-500",
  },
  {
    key: "execution",
    number: "03",
    color: "from-purple-500 to-pink-500",
  },
  {
    key: "validation",
    number: "04",
    color: "from-pink-500 to-rose-500",
  },
];

export function Approach() {
  const t = useTranslations("Approach");

  return (
    <section id="approach" className="relative overflow-hidden py-28 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-surface-border to-transparent" />

      <div className="relative w-full max-w-350 mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel label={t("label")} />
          <AnimatedSection>
            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t("titlePrefix")}{" "}
              <span className="text-gradient">{t("titleAccent")}</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-6 text-lg text-text-secondary lg:text-xl">
              {t("subtitle")}
            </p>
          </AnimatedSection>
        </div>

        {/* Steps */}
        <div className="mt-20 relative">
          {/* Connecting line */}
          <div className="absolute left-9.75 top-0 bottom-0 w-px bg-linear-to-b from-accent/50 via-purple-500/50 to-rose-500/50 hidden lg:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.15}>
                <div className="group relative flex items-start gap-10 lg:gap-14">
                  {/* Number circle */}
                  <div className="relative hidden shrink-0 lg:block">
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br ${step.color} text-xl font-bold text-white shadow-lg shadow-accent/10 transition-transform group-hover:scale-110`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="border-gradient flex-1 rounded-2xl p-10 transition-all duration-300 group-hover:bg-surface-light">
                    <div className="mb-4 flex items-center gap-4 lg:hidden">
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br ${step.color} text-sm font-bold text-white`}
                      >
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground">
                        {t(`steps.${step.key}.title`)}
                      </h3>
                    </div>
                    <h3 className="hidden text-3xl font-bold text-foreground lg:block">
                      {t(`steps.${step.key}.title`)}
                    </h3>
                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text-secondary">
                      {t(`steps.${step.key}.desc`)}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
