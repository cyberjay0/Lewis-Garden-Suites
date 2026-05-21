"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/motion";

type SectionHeadingProps = {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  label,
  title,
  subtitle,
  align = "left",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeInUp}
      className={align === "center" ? "text-center" : "text-left"}
    >
      <p className="section-label mb-3">{label}</p>
      <h2 className="section-heading text-balance">{title}</h2>
      {subtitle && (
        <p
          className={`mt-4 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
