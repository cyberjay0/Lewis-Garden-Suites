"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Wifi, Tv, Wind, Coffee, Bath, MessageCircle } from "lucide-react";
import { ROOMS, formatPrice, whatsappUrl } from "@/lib/constants";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, fadeInUp } from "@/lib/motion";

const amenityIcons = {
  wifi: Wifi,
  tv: Tv,
  ac: Wind,
  coffee: Coffee,
  bath: Bath,
} as const;

function RoomImage({
  src,
  fallback,
  alt,
}: {
  src: string;
  fallback: string;
  alt: string;
}) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      loading="lazy"
      className="object-cover transition-transform duration-700 group-hover:scale-105"
      sizes="(max-width: 768px) 100vw, 33vw"
      onError={() => setImgSrc(fallback)}
    />
  );
}

export function Rooms() {
  return (
    <section id="rooms" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            label="Our Rooms"
            title="Stay in Style & Comfort"
            subtitle="Explore our curated accommodations — each room crafted for rest, productivity, and indulgence. Prices shown per night; send an enquiry for availability."
          />
          <a
            href={whatsappUrl(
              "Hello, I would like to enquire about room rates and availability."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold shrink-0 text-xs"
          >
            Enquire About Rooms
          </a>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {ROOMS.map((room) => (
            <motion.article
              key={room.id}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="group overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <RoomImage
                  src={room.image}
                  fallback={room.imageFallback}
                  alt={room.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/20 to-transparent" />
                <div className="glass-strong absolute bottom-0 left-0 right-0 m-3 rounded-md p-4">
                  <h3 className="font-serif text-xl text-white">{room.name}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-white/60">
                    {room.description}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <p className="text-lg font-semibold text-luxury-gold">
                      {formatPrice(room.price)}
                      <span className="text-xs font-normal text-white/50">
                        {" "}
                        / night
                      </span>
                    </p>
                    <div className="flex gap-2">
                      {room.amenities.map((a) => {
                        const Icon = amenityIcons[a];
                        return (
                          <Icon
                            key={a}
                            className="h-4 w-4 text-luxury-gold/80"
                            strokeWidth={1.5}
                          />
                        );
                      })}
                    </div>
                  </div>
                  <a
                    href={whatsappUrl(
                      `Hello, I am interested in the ${room.name} at ${formatPrice(room.price)} per night.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-sm border border-luxury-gold/50 py-2 text-xs font-semibold uppercase tracking-wider text-luxury-gold transition-colors hover:bg-luxury-gold/10"
                  >
                    <MessageCircle size={14} />
                    Enquire
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
