"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { HOTEL, whatsappUrl } from "@/lib/constants";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name") as string;
    const email = form.get("email") as string;
    const phone = form.get("phone") as string;
    const message = form.get("message") as string;

    const text = `Hello ${HOTEL.name},\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <SectionHeading
            label="Contact"
            title="We'd Love To Hear From You"
            subtitle="Send us your enquiry — our team responds promptly via WhatsApp for reservations, group bookings, and special requests."
          />

          {submitted ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="glass mt-8 rounded-lg p-6 text-center"
            >
              <p className="text-luxury-gold font-semibold">Thank you!</p>
              <p className="mt-2 text-sm text-white/60">
                Your enquiry has been prepared. Complete sending in WhatsApp, or
                send another message below.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="btn-outline-gold mt-4"
              >
                Send Another Enquiry
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {[
                { name: "name", label: "Full Name", type: "text", required: true },
                { name: "email", label: "Email Address", type: "email", required: true },
                { name: "phone", label: "Phone Number", type: "tel", required: true },
              ].map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="mb-2 block text-xs font-semibold uppercase tracking-widest text-luxury-gold"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.name}
                    name={field.name}
                    type={field.type}
                    required={field.required}
                    className="w-full rounded-sm border border-luxury-gold/20 bg-luxury-black/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-luxury-gold/60 focus:ring-1 focus:ring-luxury-gold/30"
                    placeholder={`Your ${field.label.toLowerCase()}`}
                  />
                </div>
              ))}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-widest text-luxury-gold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full resize-none rounded-sm border border-luxury-gold/20 bg-luxury-black/60 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-luxury-gold/60 focus:ring-1 focus:ring-luxury-gold/30"
                  placeholder="Tell us about your stay, preferred room, dates, or any questions..."
                />
              </div>
              <button type="submit" className="btn-gold w-full sm:w-auto">
                Send Enquiry via WhatsApp
              </button>
            </form>
          )}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[4/3] overflow-hidden rounded-lg lg:aspect-auto lg:min-h-[480px]"
        >
          <Image
            src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=900&q=80"
            alt="Lewis Garden and Suites hotel exterior at night"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 glass rounded-lg p-5">
            <p className="font-serif text-lg text-white">Ready to experience luxury?</p>
            <p className="mt-1 text-sm text-white/60">
              Chat with us on WhatsApp for instant responses.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold mt-4 inline-flex text-xs"
            >
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
