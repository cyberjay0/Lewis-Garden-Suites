"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bed, Users, Award } from "lucide-react";
import { ABOUT_STATS } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const statIcons = [Bed, Users, Award];

export function About() {
  return (
    <section id="about" className="relative bg-section-gradient py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            label="About Us"
            title="A Home Away From Home"
            subtitle="Lewis Garden and Suites offers refined accommodation in Karu, Nasarawa — thoughtfully designed spaces, attentive service, and a serene atmosphere for business and leisure travellers alike."
          />
          <Reveal className="mt-8">
            <p className="text-sm leading-relaxed text-white/60 sm:text-base">
              Nestled in Mission Village, Auta Balefi, our hotel combines modern
              luxury with warm Nigerian hospitality. Whether you are visiting
              Bingham University, attending events at Goshen City, or exploring
              Nassarawa, we provide the comfort and convenience you deserve.
            </p>
            <a href="#contact" className="btn-outline-gold mt-8 inline-flex">
              Get In Touch
            </a>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 grid grid-cols-3 gap-6"
          >
            {ABOUT_STATS.map((stat, i) => {
              const Icon = statIcons[i];
              return (
                <motion.div key={stat.label} variants={fadeInUp} className="text-center sm:text-left">
                  <Icon className="mb-2 h-6 w-6 text-luxury-gold" strokeWidth={1.5} />
                  <p className="font-serif text-2xl text-luxury-gold md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-white/50 sm:text-sm">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
            <Image
              src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=600&q=70"
              alt="Luxury hotel suite interior at Lewis Garden and Suites"
              fill
              loading="lazy"
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-luxury-gold/20" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
