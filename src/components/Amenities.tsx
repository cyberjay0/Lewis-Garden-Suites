"use client";

import { motion } from "framer-motion";
import {
  Wifi,
  UtensilsCrossed,
  ConciergeBell,
  Wind,
  Shield,
  Car,
  Tv,
  Sparkles,
} from "lucide-react";
import { AMENITIES } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, scaleIn } from "@/lib/motion";

const icons = {
  wifi: Wifi,
  utensils: UtensilsCrossed,
  concierge: ConciergeBell,
  wind: Wind,
  shield: Shield,
  car: Car,
  tv: Tv,
  sparkles: Sparkles,
} as const;

export function Amenities() {
  return (
    <section id="amenities" className="relative bg-luxury-charcoal/50 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Amenities"
          title="Designed For Your Comfort"
          subtitle="Every detail at Lewis Garden and Suites is curated to elevate your stay — from seamless connectivity to round-the-clock security."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-8"
        >
          {AMENITIES.map((item) => {
            const Icon = icons[item.icon];
            return (
              <motion.div
                key={item.label}
                variants={scaleIn}
                whileHover={{ scale: 1.05 }}
                className="group flex flex-col items-center rounded-lg border border-luxury-gold/10 bg-luxury-black/40 p-6 text-center transition-colors hover:border-luxury-gold/30 hover:bg-luxury-gold/5"
              >
                <div className="mb-4 rounded-full border border-luxury-gold/20 p-4 transition-shadow group-hover:shadow-gold">
                  <Icon className="h-6 w-6 text-luxury-gold" strokeWidth={1.5} />
                </div>
                <p className="text-sm font-medium text-white/90">{item.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
