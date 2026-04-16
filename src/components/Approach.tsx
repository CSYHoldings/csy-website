"use client";

import { AnimatedSection } from "./AnimatedSection";
import { SectionLabel } from "./SectionLabel";

const steps = [
  {
    number: "01",
    title: "Data Read",
    desc: "Track how liquidity and aggressive flow behave at key levels. Understand what the depth data is showing before any decision.",
    color: "from-blue-500 to-indigo-500",
  },
  {
    number: "02",
    title: "Direction",
    desc: "Identify where larger capital is building pressure. Use institutional flow to determine the most probable market direction.",
    color: "from-indigo-500 to-purple-500",
  },
  {
    number: "03",
    title: "Execution",
    desc: "Turn data into entries, risk controls, and management. Precise entry points with defined stop-loss and take-profit levels.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "04",
    title: "Validation",
    desc: "Practice the same logic in live sessions and daily review. Refine your process through repetition and community feedback.",
    color: "from-pink-500 to-rose-500",
  },
];

export function Approach() {
  return (
    <section id="approach" className="relative overflow-hidden py-28 lg:py-36">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />

      <div className="relative w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel label="Our Trading Approach" />
          <AnimatedSection>
            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              From Data to <span className="text-gradient">Execution</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-6 text-lg text-text-secondary lg:text-xl">
              We do not rely on random indicators. CSY focuses on depth data,
              order-flow context, and institutional positioning to build
              high-conviction trade plans.
            </p>
          </AnimatedSection>
        </div>

        {/* Steps */}
        <div className="mt-20 relative">
          {/* Connecting line */}
          <div className="absolute left-[39px] top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-purple-500/50 to-rose-500/50 hidden lg:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.15}>
                <div className="group relative flex items-start gap-10 lg:gap-14">
                  {/* Number circle */}
                  <div className="relative hidden shrink-0 lg:block">
                    <div
                      className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-xl font-bold text-white shadow-lg shadow-accent/10 transition-transform group-hover:scale-110`}
                    >
                      {step.number}
                    </div>
                  </div>

                  {/* Content card */}
                  <div className="border-gradient flex-1 rounded-2xl p-10 transition-all duration-300 group-hover:bg-surface-light">
                    <div className="mb-4 flex items-center gap-4 lg:hidden">
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${step.color} text-sm font-bold text-white`}
                      >
                        {step.number}
                      </span>
                      <h3 className="text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                    </div>
                    <h3 className="hidden text-3xl font-bold text-foreground lg:block">
                      {step.title}
                    </h3>
                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-text-secondary">
                      {step.desc}
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
