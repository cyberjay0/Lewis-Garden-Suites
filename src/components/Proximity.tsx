"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { PROXIMITY_DESTINATIONS, HOTEL } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { fadeInUp } from "@/lib/motion";

function polarToCartesian(
  cx: number,
  cy: number,
  radius: number,
  angleDeg: number
): { x: number; y: number } {
  const angleRad = ((angleDeg - 90) * Math.PI) / 180;
  return {
    x: cx + radius * Math.cos(angleRad),
    y: cy + radius * Math.sin(angleRad),
  };
}

export function Proximity() {
  const [linesDrawn, setLinesDrawn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLinesDrawn(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const cx = 50;
  const cy = 50;

  return (
    <section id="location" className="relative overflow-hidden bg-section-gradient py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            label="Location"
            title="Close To Everything"
            subtitle="Strategically located in Karu, Nassarawa — minutes from universities, places of worship, and key destinations."
          />

          <Reveal className="mt-10">
            <p className="section-label mb-4">Destinations</p>
            <ul className="space-y-4">
              {PROXIMITY_DESTINATIONS.map((dest, i) => (
                <motion.li
                  key={dest.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center justify-between border-b border-luxury-gold/10 py-3"
                >
                  <span className="flex items-center gap-2 text-sm text-white/80">
                    <MapPin className="h-4 w-4 text-luxury-gold" strokeWidth={1.5} />
                    {dest.name}
                  </span>
                  <span className="font-serif text-luxury-gold">{dest.distance}</span>
                </motion.li>
              ))}
            </ul>
            <a
              href={HOTEL.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-8 inline-flex"
            >
              Explore Location
            </a>
          </Reveal>
        </div>

        <Reveal>
          <div className="relative aspect-square w-full max-w-lg mx-auto">
            <div className="glass-strong absolute inset-0 rounded-full" />
            <svg
              viewBox="0 0 100 100"
              className="relative h-full w-full"
              aria-label="Proximity map showing distances from Lewis Garden and Suites"
            >
              <circle
                cx={cx}
                cy={cy}
                r="8"
                fill="none"
                stroke="rgba(193,154,59,0.15)"
                strokeWidth="0.5"
              />
              <circle
                cx={cx}
                cy={cy}
                r="20"
                fill="none"
                stroke="rgba(193,154,59,0.1)"
                strokeWidth="0.3"
                strokeDasharray="2 2"
              />
              <circle
                cx={cx}
                cy={cy}
                r="35"
                fill="none"
                stroke="rgba(193,154,59,0.08)"
                strokeWidth="0.3"
                strokeDasharray="2 2"
              />

              {PROXIMITY_DESTINATIONS.map((dest) => {
                const end = polarToCartesian(cx, cy, dest.radius, dest.angle);
                return (
                  <motion.line
                    key={dest.name}
                    x1={cx}
                    y1={cy}
                    x2={end.x}
                    y2={end.y}
                    stroke="#C19A3B"
                    strokeWidth="0.4"
                    strokeDasharray="1 1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={
                      linesDrawn
                        ? { pathLength: 1, opacity: 0.6 }
                        : { pathLength: 0, opacity: 0 }
                    }
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                );
              })}

              <circle cx={cx} cy={cy} r="6" fill="#C19A3B" opacity="0.3" />
              <circle cx={cx} cy={cy} r="3.5" fill="#C19A3B" />

              {PROXIMITY_DESTINATIONS.map((dest, i) => {
                const pos = polarToCartesian(cx, cy, dest.radius, dest.angle);
                return (
                  <motion.circle
                    key={dest.name}
                    cx={pos.x}
                    cy={pos.y}
                    r="1.5"
                    fill="#C19A3B"
                    initial={{ scale: 0 }}
                    animate={linesDrawn ? { scale: 1 } : { scale: 0 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                  />
                );
              })}
            </svg>

            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            >
              <p className="font-serif text-xs text-white sm:text-sm">Lewis Garden</p>
              <p className="text-[10px] text-luxury-gold">Karu, Nasarawa</p>
            </motion.div>

            <div className="pointer-events-none absolute inset-0">
              {PROXIMITY_DESTINATIONS.map((dest, i) => {
                const pos = polarToCartesian(
                  50,
                  50,
                  dest.radius + 8,
                  dest.angle
                );
                return (
                  <motion.div
                    key={dest.name}
                    initial={{ opacity: 0 }}
                    animate={linesDrawn ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: 0.8 + i * 0.12 }}
                    className="absolute max-w-[120px] -translate-x-1/2 -translate-y-1/2 text-center"
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                    }}
                  >
                    <p className="text-[9px] font-medium leading-tight text-white/90 sm:text-[10px]">
                      {dest.name.split(",")[0]}
                    </p>
                    <p className="text-[8px] text-luxury-gold">{dest.distance}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
