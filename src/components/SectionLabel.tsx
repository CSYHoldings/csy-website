"use client";

import { motion } from "framer-motion";

interface SectionLabelProps {
  label: string;
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-1.5"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      <span className="text-xs font-medium uppercase tracking-wider text-accent-light">
        {label}
      </span>
    </motion.div>
  );
}
