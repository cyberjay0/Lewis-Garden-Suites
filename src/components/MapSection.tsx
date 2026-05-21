"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import { HOTEL } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function MapSection() {
  return (
    <section id="map" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Find Us"
          title="Visit Lewis Garden and Suites"
          subtitle="Mission Village, Auta Balefi — your gateway to luxury in Karu, Nasarawa."
          align="center"
        />

        <Reveal className="mt-12">
          <div className="overflow-hidden rounded-lg border border-luxury-gold/20 shadow-glass">
            <div className="relative aspect-[16/9] w-full md:aspect-[21/9]">
              <iframe
                title="Lewis Garden and Suites on Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.8!2d7.638!3d8.994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b8b8b8b8b8b%3A0x0!2sLewis+Garden+and+Suites!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
                className="absolute inset-0 h-full w-full border-0 grayscale-[30%] invert-[90%] contrast-[90%]"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="pointer-events-none absolute inset-0 bg-luxury-black/20" />
            </div>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 grid gap-6 sm:grid-cols-3"
        >
          {[
            { icon: MapPin, label: "Address", value: HOTEL.address },
            { icon: Phone, label: "Phone", value: HOTEL.phone, href: `tel:${HOTEL.phone.replace(/\s/g, "")}` },
            { icon: Mail, label: "Email", value: HOTEL.email, href: `mailto:${HOTEL.email}` },
          ].map((item) => (
            <div
              key={item.label}
              className="glass flex items-start gap-4 rounded-lg p-5"
            >
              <item.icon className="mt-0.5 h-5 w-5 shrink-0 text-luxury-gold" strokeWidth={1.5} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-luxury-gold">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 block text-sm text-white/70 transition-colors hover:text-luxury-gold"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="mt-1 text-sm text-white/70">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </motion.div>

        <p className="mt-6 text-center">
          <a
            href={HOTEL.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-luxury-gold underline-offset-4 hover:underline"
          >
            Open in Google Maps →
          </a>
        </p>
      </div>
    </section>
  );
}
