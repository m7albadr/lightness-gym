"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/context";
import { t } from "@/lib/translations";

type Tab = "gym" | "nutrition";

const badgeMap: Record<number, "popular" | "bestValue"> = {
  2: "popular",
  4: "bestValue",
};

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<Tab>("gym");
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section id="pricing" className="bg-dark py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="section-label">{tr.pricing.label}</div>
          <h2 className="section-title mt-5 text-2xl text-white sm:mt-6 sm:text-4xl lg:text-5xl">
            {tr.pricing.title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base text-text-muted sm:mt-4 sm:text-lg">
            {tr.pricing.sub}
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="mt-10 flex justify-center sm:mt-12">
          <div className="inline-flex w-full max-w-md rounded-full border border-white/10 bg-dark-card p-1 sm:w-auto">
            <button
              onClick={() => setActiveTab("gym")}
              className={`flex-1 rounded-full px-4 py-2.5 font-heading text-xs font-semibold tracking-wider transition-all sm:flex-none sm:px-6 sm:text-sm ${
                activeTab === "gym"
                  ? "bg-primary text-dark"
                  : "text-text-muted hover:text-white"
              }`}
            >
              {tr.pricing.tabGym}
            </button>
            <button
              onClick={() => setActiveTab("nutrition")}
              className={`flex-1 rounded-full px-4 py-2.5 font-heading text-xs font-semibold tracking-wider transition-all sm:flex-none sm:px-6 sm:text-sm ${
                activeTab === "nutrition"
                  ? "bg-primary text-dark"
                  : "text-text-muted hover:text-white"
              }`}
            >
              {tr.pricing.tabNutrition}
            </button>
          </div>
        </div>

        {/* Gym tab */}
        {activeTab === "gym" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="-mx-5 mt-10 flex gap-4 overflow-x-auto px-5 pb-4 sm:mx-0 sm:mt-12 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-5">
              {tr.pricing.gym.map((plan, i) => {
                const badge = badgeMap[i] ? tr.pricing[badgeMap[i]] : null;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`group relative min-w-[200px] shrink-0 overflow-hidden rounded-2xl border p-5 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 mobile-card-breathe mobile-shadow-pulse sm:min-w-0 sm:p-6 ${
                      badge
                        ? "border-primary/40 bg-gradient-to-b from-primary/10 to-dark-card"
                        : "border-white/5 bg-dark-card hover:border-primary/30"
                    }`}
                  >
                    {badge && (
                      <div className="absolute -right-8 top-4 rotate-45 bg-primary px-10 py-1 text-[10px] font-bold tracking-wider text-dark">
                        {badge}
                      </div>
                    )}
                    <h3 className="font-heading text-xs font-semibold tracking-wider text-text-muted sm:text-sm">
                      {plan.name.toUpperCase()}
                    </h3>
                    <div className="mt-3 flex items-baseline gap-1 sm:mt-4">
                      <span className="font-heading text-3xl font-bold text-white sm:text-4xl">
                        {plan.price}
                      </span>
                      <span className="text-sm text-text-muted">KD</span>
                    </div>
                    <p className="mt-2 text-sm text-primary">{plan.detail}</p>
                    <a
                      href="#contact"
                      className="mt-5 block rounded-full border border-primary/30 py-2.5 text-center font-heading text-xs font-semibold tracking-wider text-primary transition-all active:bg-primary active:text-dark sm:mt-6 sm:hover:bg-primary sm:hover:text-dark"
                    >
                      {tr.pricing.getStarted}
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* PT Packages */}
            <div className="mt-12 sm:mt-16">
              <h3 className="text-center font-heading text-lg font-semibold tracking-wider text-white sm:text-xl">
                {tr.pricing.ptTitle}
              </h3>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4">
                {tr.pricing.pt.map((pkg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    className="rounded-xl border border-white/5 bg-dark-card p-4 text-center transition-all hover:border-primary/30 hover:shadow-md hover:shadow-primary/10 mobile-card-breathe sm:p-5"
                  >
                    <div className="font-heading text-[10px] font-medium tracking-wider text-text-muted sm:text-sm">
                      {pkg.sessions.toUpperCase()}
                    </div>
                    <div className="mt-2 flex items-baseline justify-center gap-1 sm:mt-3">
                      <span className="font-heading text-2xl font-bold text-white sm:text-3xl">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-text-muted sm:text-sm">KD</span>
                    </div>
                    <a
                      href="#contact"
                      className="mt-3 block rounded-full border border-primary/30 py-2 text-center font-heading text-[10px] font-semibold tracking-wider text-primary transition-all active:bg-primary active:text-dark sm:mt-4 sm:text-xs sm:hover:bg-primary sm:hover:text-dark"
                    >
                      {tr.pricing.joinNow}
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Nutrition tab */}
        {activeTab === "nutrition" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-10 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
          >
            {tr.pricing.nutrition.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="rounded-2xl border border-white/5 bg-dark-card p-6 transition-all hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 mobile-card-breathe mobile-shadow-pulse sm:p-8"
              >
                <h3 className="font-heading text-base font-semibold tracking-wider text-white sm:text-lg">
                  {plan.name.toUpperCase()}
                </h3>
                <div className="mt-3 flex items-baseline gap-1 sm:mt-4">
                  <span className="font-heading text-3xl font-bold text-white sm:text-4xl">
                    {plan.price}
                  </span>
                  <span className="text-sm text-text-muted">KD</span>
                </div>
                {plan.subPrice && (
                  <div className="mt-1 text-sm text-primary">
                    {plan.subPrice}
                  </div>
                )}
                <p className="mt-3 text-sm leading-relaxed text-text-muted sm:mt-4">
                  {plan.detail}
                </p>
                <a
                  href="#contact"
                  className="mt-5 block rounded-full border border-primary/30 py-2.5 text-center font-heading text-xs font-semibold tracking-wider text-primary transition-all active:bg-primary active:text-dark sm:mt-6 sm:hover:bg-primary sm:hover:text-dark"
                >
                  {tr.pricing.getStarted}
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
