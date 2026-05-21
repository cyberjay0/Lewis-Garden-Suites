"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS, HOTEL } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const current = TESTIMONIALS[index];

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative bg-luxury-charcoal/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Testimonials"
          title="What Our Guests Say"
          subtitle={`Trusted by travellers across Nassarawa — rated ${HOTEL.rating} stars on Google.`}
          align="center"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <Quote
            className="absolute -left-2 -top-4 h-16 w-16 text-luxury-gold/20 sm:-left-8"
            strokeWidth={1}
          />

          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <p className="font-serif text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl">
                &ldquo;{current.quote}&rdquo;
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-luxury-gold/40">
                  <Image
                    src={current.avatar}
                    alt={current.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-white">{current.name}</p>
                  <p className="text-sm text-white/50">{current.title}</p>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>

          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="rounded-full border border-luxury-gold/30 p-2 text-luxury-gold transition-colors hover:bg-luxury-gold/10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-8 bg-luxury-gold"
                      : "w-1.5 bg-luxury-gold/30 hover:bg-luxury-gold/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="rounded-full border border-luxury-gold/30 p-2 text-luxury-gold transition-colors hover:bg-luxury-gold/10"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
