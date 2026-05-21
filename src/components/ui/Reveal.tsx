"use client";

import { motion, type Variants } from "framer-motion";
import { fadeInUp } from "@/lib/motion";
import { type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variants?: Variants;
};

export function Reveal({
  children,
  className,
  delay = 0,
  variants = fadeInUp,
}: RevealProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
