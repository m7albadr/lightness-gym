"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/context";
import { t } from "@/lib/translations";

export default function Hours() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section id="hours" className="bg-dark py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="section-label">{tr.hours.label}</div>
          <h2 className="section-title mt-5 text-2xl text-white sm:mt-6 sm:text-4xl lg:text-5xl">
            {tr.hours.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-text-muted sm:mt-4 sm:text-lg">
            {tr.hours.sub}
          </p>
        </motion.div>

        <div className="mx-auto mt-10 max-w-xl sm:mt-14">
          {tr.hours.days.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center justify-between border-b border-white/5 py-5 sm:py-6"
            >
              <div className="flex items-center gap-3">
                <div className="mobile-dot-pulse h-2 w-2 rounded-full bg-primary" />
                <span className="font-heading text-sm font-semibold tracking-wider text-white sm:text-base">
                  {item.day}
                </span>
              </div>
              <span className="font-heading text-sm font-medium text-primary sm:text-base">
                {item.time}
              </span>
            </motion.div>
          ))}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-6 text-center text-sm text-text-muted"
          >
            {tr.hours.note}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
