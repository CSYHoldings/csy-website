"use client";

import Image from "next/image";
import { AnimatedSection, SlideInLeft, SlideInRight } from "./AnimatedSection";
import { SectionLabel } from "./SectionLabel";

const chartTypes = [
  {
    title: "Bubble Pressure + Reaction Zone",
    label: "Bubble",
    src: "/atas-bubble.png",
    description:
      "Bubble-style pressure areas reveal where institutional orders are clustering. Watch how price reacts at these high-volume zones for confirmation before entry.",
  },
  {
    title: "Cluster Flow + Diamond Logic",
    label: "Cluster",
    src: "/atas-cluster.png",
    description:
      "Cluster and diamond-style confirmation logic shows the exact points where aggressive buying or selling meets passive orders, giving clear execution signals.",
  },
];

export function Evidence() {
  return (
    <section id="evidence" className="relative overflow-hidden py-28 lg:py-36">
      {/* Background */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-surface-border to-transparent" />
      <div className="absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[150px]" />

      <div className="relative w-full max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <SectionLabel label="ATAS-Style Chart Evidence" />
          <AnimatedSection>
            <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              See the <span className="text-gradient">Execution Evidence</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <p className="mt-6 text-lg text-text-secondary lg:text-xl">
              Inside our sessions, we combine chart structure with depth-style
              execution evidence. You will see bubble-style pressure areas and
              cluster/diamond-style confirmation logic before execution.
            </p>
          </AnimatedSection>
        </div>

        {/* Chart cards */}
        <div className="mt-20 space-y-12">
          {chartTypes.map((chart, i) => {
            const Wrapper = i % 2 === 0 ? SlideInLeft : SlideInRight;
            return (
              <Wrapper key={chart.label}>
                <div className="border-gradient group overflow-hidden rounded-3xl transition-all duration-300 hover:bg-surface-light">
                  <div className="grid items-center gap-0 lg:grid-cols-2">
                    {/* Image */}
                    <div
                      className={`relative aspect-[16/10] overflow-hidden ${
                        i % 2 === 1 ? "lg:order-2" : ""
                      }`}
                    >
                      <div className="absolute inset-0 z-10 bg-gradient-to-br from-accent/5 to-transparent" />
                      <Image
                        src={chart.src}
                        alt={chart.title}
                        fill
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
                        {chart.label}
                      </span>
                      <h3 className="mt-5 text-3xl font-bold text-foreground lg:text-4xl">
                        {chart.title}
                      </h3>
                      <p className="mt-5 text-lg leading-relaxed text-text-secondary">
                        {chart.description}
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
