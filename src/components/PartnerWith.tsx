"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { AnimatedSection } from "./AnimatedSection";
import { SectionLabel } from "./SectionLabel";

const partners = [
  {
    key: "bitget",
    src: "/bitget.png",
    width: 310,
    height: 96,
  },
  {
    key: "tpTrader",
    src: "/tp_trader.png",
    width: 724,
    height: 107,
  },
  {
    key: "rsFinance",
    src: "/rs-finance.png",
    width: 2400,
    height: 2400,
  },
];

export function PartnerWith() {
  const t = useTranslations("PartnerWith");

  return (
    <section id="partners" className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-surface-border to-transparent" />
      <div className="absolute right-0 top-1/4 h-110 w-110 rounded-full bg-accent/4 blur-[150px]" />

      <div className="relative w-full max-w-350 mx-auto px-8 md:px-12 lg:px-16">
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

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {partners.map((partner, i) => (
            <AnimatedSection key={partner.key} delay={i * 0.1}>
              <div className="group flex h-full min-h-44 items-center justify-center rounded-lg border border-surface-border bg-surface px-8 py-10 transition-colors duration-300 hover:bg-surface-light">
                <Image
                  src={partner.src}
                  alt={t(`items.${partner.key}.alt`)}
                  width={partner.width}
                  height={partner.height}
                  sizes="(min-width: 768px) 25vw, 70vw"
                  className="max-h-20 w-auto max-w-full object-contain opacity-80 transition duration-300 group-hover:opacity-100"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
