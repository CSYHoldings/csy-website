"use client";

import { links } from "@/constants/links";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { AnimatedSection } from "./AnimatedSection";
import { SectionLabel } from "./SectionLabel";

const metaItems = ["duration", "deposit", "volume"] as const;

const metaIcons: Record<(typeof metaItems)[number], React.ReactNode> = {
  duration: (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.6}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
      />
    </svg>
  ),
  deposit: (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.6}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-2.486 0-4.5-2.014-4.5-4.5S9.514 3 12 3c1.657 0 3.156.673 4.243 1.757M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  ),
  volume: (
    <svg
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.6}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
      />
    </svg>
  ),
};

const prizes = [
  {
    key: "first",
    rank: "1",
    medalGradient: "from-yellow-300 via-amber-400 to-amber-600",
    glow: "shadow-amber-500/30",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12L3.269 3.125A59.769 59.769 0 0121.485 12 59.768 59.768 0 013.27 20.875L5.999 12zm0 0h7.5"
        />
      </svg>
    ),
  },
  {
    key: "second",
    rank: "2",
    medalGradient: "from-slate-200 via-slate-300 to-slate-500",
    glow: "shadow-slate-400/20",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
        />
      </svg>
    ),
  },
  {
    key: "third",
    rank: "3",
    medalGradient: "from-orange-400 via-amber-700 to-amber-900",
    glow: "shadow-orange-700/20",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-2.486 0-4.5-2.014-4.5-4.5S9.514 3 12 3c1.657 0 3.156.673 4.243 1.757M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const steps: Array<{
  key: string;
  number: string;
  cta: { label: string; href: string } | null;
}> = [
  {
    key: "step1",
    number: "01",
    cta: {
      label: "registerCta",
      href: links.eventBrokerRegister,
    },
  },
  {
    key: "step2",
    number: "02",
    cta: null,
  },
  {
    key: "step3",
    number: "03",
    cta: {
      label: "formCta",
      href: links.eventEntryForm,
    },
  },
  {
    key: "step4",
    number: "04",
    cta: null,
  },
];

const perks = [
  {
    key: "live",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
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
    key: "offline",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
  {
    key: "lucky",
    icon: (
      <svg
        className="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
        />
      </svg>
    ),
  },
];

const ruleItems = ["item1", "item2", "item3"];

export function EventLaunch() {
  const t = useTranslations("EventLaunch");

  return (
    <main className="overflow-hidden">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="absolute left-1/2 top-1/3 h-150 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/5 blur-[160px]" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background to-transparent" />

        <div className="relative w-full max-w-350 mx-auto px-8 md:px-12 lg:px-16 pt-32 md:pt-40 pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-base text-text-tertiary transition-colors hover:text-foreground"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
              {t("back")}
            </Link>
          </motion.div>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/5 px-5 py-2.5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-xs font-medium uppercase tracking-wider text-accent-light">
                  {t("badge")}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl xl:text-8xl"
              >
                {t("titlePrefix")}
                <span className="ml-3 text-accent">{t("titleAccent")}</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary md:text-xl lg:leading-relaxed"
              >
                {t("subtitle")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                {metaItems.map((meta) => (
                  <div
                    key={meta}
                    className="flex items-center gap-3 rounded-2xl border border-surface-border bg-surface px-5 py-4"
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent-light">
                      {metaIcons[meta]}
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-text-tertiary">
                        {t(`meta.${meta}.label`)}
                      </div>
                      <div className="mt-0.5 text-base font-semibold text-foreground">
                        {t(`meta.${meta}.value`)}
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href={links.eventBrokerRegister}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-accent px-10 py-5 text-lg font-medium text-white transition-all hover:shadow-xl hover:shadow-accent/25 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t("primaryCta")}
                  <svg
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
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
                <a
                  href={links.discord}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-surface-border bg-surface px-10 py-5 text-lg font-medium text-foreground transition-all hover:bg-surface-light hover:border-text-tertiary"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
                  </svg>
                  {t("secondaryCta")}
                </a>
              </motion.div>
            </div>

            {/* Poster placeholder — replace with <Image src="/event-poster.png" .../> once provided */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative mx-auto aspect-3/4 w-full max-w-md"
            >
              <div
                className="absolute inset-0 rounded-3xl bg-accent/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="border-gradient relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-3xl bg-surface p-12 text-center">
                <svg
                  className="mb-6 h-16 w-16 text-text-tertiary"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
                <p className="text-base text-text-tertiary">
                  {t("posterPlaceholder")}
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Prizes */}
      <section
        id="prizes"
        className="relative overflow-hidden py-28 lg:py-36 scroll-mt-24"
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-surface-border to-transparent" />
        <div className="absolute right-0 top-1/2 h-150 w-150 -translate-y-1/2 rounded-full bg-accent/5 blur-[180px]" />

        <div className="relative w-full max-w-350 mx-auto px-8 md:px-12 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel label={t("prizes.label")} />
            <AnimatedSection>
              <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {t("prizes.titlePrefix")}{" "}
                <span className="text-accent">{t("prizes.titleAccent")}</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="mt-6 text-lg text-text-secondary lg:text-xl">
                {t("prizes.subtitle")}
              </p>
            </AnimatedSection>
          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {prizes.map((prize, i) => (
              <AnimatedSection key={prize.key} delay={i * 0.1}>
                <div className="border-gradient group relative h-full rounded-2xl bg-surface/40 p-8 pt-12 transition-all duration-300 hover:bg-surface-light">
                  {/* Medal badge */}
                  <div
                    className={`absolute -top-7 left-8 flex h-14 w-14 items-center justify-center rounded-full bg-linear-to-br ${prize.medalGradient} text-lg font-bold text-white shadow-lg ${prize.glow} ring-4 ring-background`}
                  >
                    {prize.rank}
                  </div>

                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent-light">
                    {prize.icon}
                  </div>
                  <div className="text-xs font-mono uppercase tracking-wider text-text-tertiary">
                    {t(`prizes.items.${prize.key}.rank`)}
                  </div>
                  <h3 className="mt-2 text-2xl font-bold text-foreground">
                    {t(`prizes.items.${prize.key}.title`)}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    {t(`prizes.items.${prize.key}.desc`)}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How to Participate */}
      <section
        id="how-to-join"
        className="relative overflow-hidden py-28 lg:py-36 scroll-mt-24"
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-surface-border to-transparent" />

        <div className="relative w-full max-w-350 mx-auto px-8 md:px-12 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel label={t("participate.label")} />
            <AnimatedSection>
              <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {t("participate.titlePrefix")}{" "}
                <span className="text-accent">
                  {t("participate.titleAccent")}
                </span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="mt-6 text-lg text-text-secondary lg:text-xl">
                {t("participate.subtitle")}
              </p>
            </AnimatedSection>
          </div>

          <div className="mt-20 relative">
            <div className="absolute left-9.75 top-0 bottom-0 w-px bg-linear-to-b from-accent/35 via-accent/25 to-accent/10 hidden lg:block" />

            <div className="space-y-6">
              {steps.map((step, i) => (
                <AnimatedSection key={step.key} delay={i * 0.1}>
                  <div className="group relative flex items-start gap-10 lg:gap-14">
                    <div className="relative hidden shrink-0 lg:block">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-linear-to-br from-accent/80 to-accent-light/70 text-xl font-bold text-white shadow-lg shadow-accent/5 ring-1 ring-white/10 transition-transform group-hover:scale-110">
                        {step.number}
                      </div>
                    </div>

                    <div className="border-gradient flex-1 rounded-2xl p-8 lg:p-10 transition-all duration-300 group-hover:bg-surface-light">
                      <div className="mb-3 flex items-center gap-4 lg:hidden">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-accent/80 to-accent-light/70 text-sm font-bold text-white ring-1 ring-white/10">
                          {step.number}
                        </span>
                        <h3 className="text-xl font-bold text-foreground">
                          {t(`participate.steps.${step.key}.title`)}
                        </h3>
                      </div>
                      <h3 className="hidden text-2xl font-bold text-foreground lg:block">
                        {t(`participate.steps.${step.key}.title`)}
                      </h3>
                      <p className="mt-3 max-w-3xl text-base leading-relaxed text-text-secondary lg:mt-4 lg:text-lg lg:leading-relaxed">
                        {t(`participate.steps.${step.key}.desc`)}
                      </p>
                      {step.cta && (
                        <a
                          href={step.cta.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-accent/25"
                        >
                          {t(`participate.steps.${step.key}.cta`)}
                          <svg
                            className="h-4 w-4"
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
                      )}
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Member Perks */}
      <section className="relative overflow-hidden py-28 lg:py-36">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-surface-border to-transparent" />

        <div className="relative w-full max-w-350 mx-auto px-8 md:px-12 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel label={t("perks.label")} />
            <AnimatedSection>
              <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {t("perks.titlePrefix")}{" "}
                <span className="text-accent">{t("perks.titleAccent")}</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="mt-6 text-lg text-text-secondary lg:text-xl">
                {t("perks.subtitle")}
              </p>
            </AnimatedSection>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {perks.map((perk, i) => (
              <AnimatedSection key={perk.key} delay={i * 0.1}>
                <div className="border-gradient group h-full rounded-2xl p-8 transition-all duration-300 hover:bg-surface-light">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 text-accent-light transition-colors group-hover:bg-accent/20">
                    {perk.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {t(`perks.items.${perk.key}.title`)}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-text-secondary">
                    {t(`perks.items.${perk.key}.desc`)}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Competition Rules */}
      <section
        id="terms"
        className="relative overflow-hidden py-28 lg:py-36 scroll-mt-24"
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-surface-border to-transparent" />

        <div className="relative w-full max-w-250 mx-auto px-8 md:px-12 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <SectionLabel label={t("terms.label")} />
            <AnimatedSection>
              <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                {t("terms.titlePrefix")}{" "}
                <span className="text-accent">{t("terms.titleAccent")}</span>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="mt-6 text-lg text-text-secondary lg:text-xl">
                {t("terms.subtitle")}
              </p>
            </AnimatedSection>
          </div>

          <AnimatedSection delay={0.15}>
            <div className="border-gradient mt-14 rounded-2xl bg-surface/40 p-8 lg:p-12">
              <ol className="space-y-6">
                {ruleItems.map((item, i) => (
                  <li key={item} className="flex gap-5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/10 font-mono text-sm font-semibold text-accent-light">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="pt-1.5 text-base leading-relaxed text-text-secondary lg:text-lg lg:leading-relaxed">
                      {t(`terms.items.${item}`)}
                    </p>
                  </li>
                ))}
              </ol>

              <div className="mt-10 border-t border-surface-border pt-8">
                <p className="text-sm leading-relaxed text-text-tertiary">
                  {t("terms.disclaimer")}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden py-28 lg:py-36">
        <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-surface-border to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="h-150 w-150 rounded-full bg-accent/10 blur-[180px]" />
        </div>

        <div className="relative mx-auto w-full max-w-250 px-8 text-center md:px-12 lg:px-16">
          <AnimatedSection>
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              {t("cta.titlePrefix")}{" "}
              <span className="text-accent">{t("cta.titleAccent")}</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-text-secondary lg:text-xl">
              {t("cta.subtitle")}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={links.eventBrokerRegister}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-accent px-12 py-5 text-lg font-semibold text-white shadow-xl shadow-accent/25 transition-all hover:shadow-2xl hover:shadow-accent/30"
              >
                {t("cta.primaryButton")}
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
              </motion.a>
              <a
                href={links.eventEntryForm}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-10 py-5 text-base font-medium text-foreground transition-all hover:bg-surface-light hover:border-text-tertiary"
              >
                {t("cta.secondaryButton")}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </main>
  );
}
