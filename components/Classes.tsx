"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/lib/context";
import { t } from "@/lib/translations";

const colorAccents = [
  "bg-primary", "bg-emerald-400", "bg-sky-400", "bg-amber-400",
  "bg-rose-400", "bg-violet-400", "bg-teal-400", "bg-orange-400",
];

export default function Classes() {
  const [showAll, setShowAll] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const { lang } = useLang();
  const tr = t(lang);

  const allClasses = tr.classes.items;
  const displayed = showAll ? allClasses : allClasses.slice(0, 8);

  return (
    <section id="classes" className="bg-dark-lighter py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="section-label">{tr.classes.label}</div>
          <h2 className="section-title mt-5 text-2xl text-white sm:mt-6 sm:text-4xl lg:text-5xl">
            {tr.classes.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-text-muted sm:mt-4 sm:text-lg">
            {tr.classes.sub}
          </p>
        </motion.div>

        <div className="mt-10 grid gap-3 sm:mt-16 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {displayed.map((cls, i) => (
            <motion.div
              key={cls.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
            >
              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === i ? null : i)
                }
                className="group w-full rounded-xl border border-white/5 bg-dark-card p-4 text-left transition-all duration-300 active:border-primary/30 active:scale-[0.98] hover:shadow-md hover:shadow-primary/5 mobile-card-breathe sm:p-5 sm:hover:border-primary/30 sm:hover:-translate-y-1"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`h-2 w-2 shrink-0 rounded-full mobile-dot-pulse sm:h-2.5 sm:w-2.5 ${
                        colorAccents[i % colorAccents.length]
                      }`}
                      style={{ animationDelay: `${(i % 4) * 0.3}s` }}
                    />
                    <h3 className="font-heading text-xs font-semibold tracking-wider text-white sm:text-sm">
                      {cls.name}
                    </h3>
                  </div>
                  <svg
                    className={`h-4 w-4 shrink-0 text-text-muted transition-transform duration-300 ${
                      expandedIndex === i ? "rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <AnimatePresence>
                  {expandedIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm leading-relaxed text-text-muted">
                        {cls.desc}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 text-center sm:mt-10"
          >
            <button
              onClick={() => setShowAll(true)}
              className="w-full rounded-full border border-primary/30 px-8 py-3.5 font-heading text-sm font-semibold tracking-wider text-primary transition-all active:bg-primary active:text-dark sm:w-auto sm:py-3 sm:hover:bg-primary sm:hover:text-dark"
            >
              {tr.classes.viewAll}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
