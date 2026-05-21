import { Logo } from "./Logo";
import { HOTEL, NAV_LINKS } from "@/lib/constants";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-luxury-gold/10 bg-luxury-black py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Logo size="md" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Premium hospitality in Karu, Nasarawa. Where comfort meets elegance.
            </p>
          </div>

          <div>
            <h3 className="section-label mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-luxury-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="section-label mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>{HOTEL.address}</li>
              <li>
                <a href={`tel:${HOTEL.phone.replace(/\s/g, "")}`} className="hover:text-luxury-gold">
                  {HOTEL.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${HOTEL.email}`} className="hover:text-luxury-gold">
                  {HOTEL.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="section-label mb-4">Follow Us</h3>
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social media"
                  className="rounded-full border border-luxury-gold/30 p-2 text-luxury-gold transition-colors hover:bg-luxury-gold/10"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-luxury-gold/10 pt-8 text-center text-xs text-white/40">
          © {year} {HOTEL.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
