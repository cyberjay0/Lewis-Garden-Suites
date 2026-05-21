"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_ITEMS } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";

const FILTERS = ["all", "rooms", "amenities", "events"] as const;
type Filter = (typeof FILTERS)[number];

export function Gallery() {
  const [active, setActive] = useState<Filter>("all");

  const filtered =
    active === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === active);

  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Gallery"
          title="Moments of Comfort"
          subtitle="Step inside Lewis Garden and Suites — serene rooms, refined dining, and spaces designed for memorable stays."
          align="center"
        />

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              className={`rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-all duration-300 ${
                active === filter
                  ? "bg-luxury-gold text-luxury-black"
                  : "border border-luxury-gold/40 text-luxury-gold hover:bg-luxury-gold/10"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div layout className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                whileHover={{ scale: 1.02 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-luxury-black/0 transition-colors duration-300 group-hover:bg-luxury-black/30" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-full p-4 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-medium capitalize text-white">
                    {item.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 text-center">
          <a href="#contact" className="btn-outline-gold">
            Request More Photos
          </a>
        </div>
      </div>
    </section>
  );
}
