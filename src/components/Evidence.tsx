"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { AnimatedSection, SlideInLeft, SlideInRight } from "./AnimatedSection";
import { SectionLabel } from "./SectionLabel";

const chartTypes = [
  {
    key: "bubble",
    src: "/atas-bubble.png",
  },
  {
    key: "cluster",
    src: "/atas-cluster.png",
  },
];

export function Evidence() {
  const t = useTranslations("Evidence");

  return (
    <section id="evidence" className="relative overflow-hidden py-28 lg:py-36">
      {/* Background */}
      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-surface-border to-transparent" />
      <div className="absolute left-0 top-1/3 h-125 w-125 rounded-full bg-accent/5 blur-[150px]" />

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

        {/* Chart cards */}
        <div className="mt-20 space-y-12">
          {chartTypes.map((chart, i) => {
            const Wrapper = i % 2 === 0 ? SlideInLeft : SlideInRight;
            return (
              <Wrapper key={chart.key}>
                <div className="border-gradient group overflow-hidden rounded-3xl transition-all duration-300 hover:bg-surface-light">
                  <div className="grid items-center gap-0 lg:grid-cols-2">
                    {/* Image */}
                    <div
                      className={`relative aspect-16/10 overflow-hidden ${
                        i % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="absolute inset-0 z-10 bg-linear-to-br from-accent/5 to-transparent" />
                      <Image
                        src={chart.src}
                        alt={t(`charts.${chart.key}.title`)}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Text */}
                    <div
                      className={`p-10 lg:p-14 ${
                        i % 2 === 1 ? "lg:order-1" : ""
                      }`}
                    >
                      <span className="inline-flex rounded-full bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent-light">
                        {t(`charts.${chart.key}.label`)}
                      </span>
                      <h3 className="mt-5 text-3xl font-bold text-foreground lg:text-4xl">
                        {t(`charts.${chart.key}.title`)}
                      </h3>
                      <p className="mt-5 text-lg leading-relaxed text-text-secondary">
                        {t(`charts.${chart.key}.description`)}
                      </p>
                    </div>
                  </div>
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
