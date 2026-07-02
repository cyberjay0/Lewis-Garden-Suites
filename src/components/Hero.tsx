"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Wifi, UtensilsCrossed, Shield, Bed, Car } from "lucide-react";
import { HERO_FEATURES, HOTEL, whatsappUrl } from "@/lib/constants";
import { fadeInUp } from "@/lib/motion";

const featureIcons = {
  wifi: Wifi,
  utensils: UtensilsCrossed,
  shield: Shield,
  bed: Bed,
  car: Car,
} as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen overflow-hidden"
    >
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 -z-10"
      >
        <Image
          src="/images/hotel-hero.png"
          alt="Lewis Garden and Suites — hotel exterior in Karu, Nasarawa"
          fill
          priority
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
          className="hero-photo object-cover object-[center_38%] sm:object-[center_42%]"
          sizes="100vw"
        />

        {/* Cinematic color grade & depth */}
        <div className="hero-grade absolute inset-0" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/70 via-luxury-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent" />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(ellipse 80% 70% at 55% 45%, transparent 0%, rgba(10,10,10,0.2) 55%, rgba(10,10,10,0.7) 100%)",
          }}
        />
        <div className="absolute inset-0 bg-luxury-gold/[0.04] mix-blend-soft-light" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-luxury-black to-transparent" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-4 pb-32 pt-24 sm:px-6 sm:pb-36 sm:pt-28 lg:px-8"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="section-label mb-4"
        >
          Welcome to Lewis Garden
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8 }}
          className="max-w-3xl font-serif text-3xl leading-[1.1] text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Experience
          <br />
          Luxury{" "}
          <span className="font-script text-4xl text-luxury-gold sm:text-6xl md:text-7xl lg:text-8xl">
            &
          </span>{" "}
          Comfort
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base"
        >
          A premium hotel in the heart of{" "}
          <span className="text-luxury-gold">{HOTEL.location}</span>, where
          elegance meets exceptional hospitality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-8 flex flex-wrap gap-4"
        >
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Send Enquiry
          </a>
          <a href="#rooms" className="btn-outline-gold group">
            View Room Prices
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
          className="mt-10 flex items-center gap-3"
        >
          <div className="flex text-luxury-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={
                  i < Math.floor(HOTEL.rating) ? "opacity-100" : "opacity-30"
                }
              >
                ★
              </span>
            ))}
          </div>
          <span className="text-sm text-white/60">
            {HOTEL.rating} · {HOTEL.reviewCount} Google reviews
          </span>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.7 }}
        className="absolute bottom-0 left-0 right-0 z-10"
      >
        <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
          <div className="glass grid grid-cols-2 gap-3 rounded-lg p-3 sm:grid-cols-3 sm:gap-4 sm:p-4 md:grid-cols-5 md:gap-6 md:p-6">
            {HERO_FEATURES.map((feature) => {
              const Icon = featureIcons[feature.icon];
              return (
                <div
                  key={feature.title}
                  className="flex items-center gap-3 border-luxury-gold/10 md:border-r md:last:border-r-0 md:pr-4"
                >
                  <Icon
                    className="h-5 w-5 shrink-0 text-luxury-gold"
                    strokeWidth={1.5}
                  />
                  <div>
                    <p className="text-xs font-semibold text-white sm:text-sm">
                      {feature.title}
                    </p>
                    <p className="hidden text-[10px] text-white/50 sm:block">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
