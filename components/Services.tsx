"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/context";
import { t } from "@/lib/translations";

const serviceIcons = [
  <svg key="pt" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  </svg>,
  <svg key="pp" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  </svg>,
  <svg key="wl" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
  </svg>,
  <svg key="bb" className="h-7 w-7 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
];

export default function Services() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section id="services" className="bg-dark py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="section-label">{tr.services.label}</div>
          <h2 className="section-title mt-5 text-2xl text-white sm:mt-6 sm:text-4xl lg:text-5xl">
            {tr.services.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-text-muted sm:mt-4 sm:text-lg">
            {tr.services.sub}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-2 sm:gap-6">
          {tr.services.items.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              style={{ animationDelay: `${i * 0.5}s` }}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-dark-card p-6 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 mobile-card-breathe mobile-shadow-pulse sm:p-8"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className="mobile-icon-float flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20 sm:h-14 sm:w-14">
                  {serviceIcons[i]}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold tracking-wide text-white sm:mt-6 sm:text-xl">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted sm:mt-3 sm:text-base">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
