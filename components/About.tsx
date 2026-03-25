"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/lib/context";
import { t } from "@/lib/translations";

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.max(1, Math.floor(target / 60));
    const interval = duration / (target / step);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{inView ? count : 0}{suffix}</span>;
}

function FadeInWhenVisible({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
}

function GymVisual({ est }: { est: string }) {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-dark-card to-dark">
      {/* Gradient accents */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/10 blur-[80px]" />
      <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-primary/5 blur-[60px]" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(rgba(201,213,90,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(201,213,90,0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Central animated dumbbell */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.svg
          viewBox="0 0 200 200"
          className="h-[55%] w-auto"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Left weight plate outer */}
          <motion.rect
            x="30" y="60" width="20" height="80" rx="4"
            stroke="currentColor" strokeWidth="2" fill="none"
            className="text-primary/40"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          {/* Left weight plate inner */}
          <rect
            x="50" y="70" width="14" height="60" rx="3"
            stroke="currentColor" strokeWidth="2" fill="none"
            className="text-primary/30"
          />
          {/* Bar */}
          <rect
            x="64" y="95" width="72" height="10" rx="5"
            stroke="currentColor" strokeWidth="2" fill="none"
            className="text-primary/50"
          />
          {/* Right weight plate inner */}
          <rect
            x="136" y="70" width="14" height="60" rx="3"
            stroke="currentColor" strokeWidth="2" fill="none"
            className="text-primary/30"
          />
          {/* Right weight plate outer */}
          <motion.rect
            x="150" y="60" width="20" height="80" rx="4"
            stroke="currentColor" strokeWidth="2" fill="none"
            className="text-primary/40"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </motion.svg>
      </div>

      {/* Animated pulse ring behind the dumbbell */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="h-40 w-40 rounded-full border border-primary/10 sm:h-52 sm:w-52"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-56 w-56 rounded-full border border-primary/5 sm:h-72 sm:w-72"
          animate={{ scale: [1, 1.15, 1], opacity: [0.1, 0.25, 0.1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      {/* Floating fitness icons */}
      {/* Heartbeat icon top-left */}
      <motion.div
        className="absolute left-[12%] top-[15%]"
        animate={{ y: [0, -8, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0 }}
      >
        <svg className="h-6 w-6 text-primary/40 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      </motion.div>

      {/* Lightning bolt top-right */}
      <motion.div
        className="absolute right-[12%] top-[20%]"
        animate={{ y: [0, -10, 0], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 0.7 }}
      >
        <svg className="h-6 w-6 text-primary/40 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      </motion.div>

      {/* Flame bottom-left */}
      <motion.div
        className="absolute bottom-[22%] left-[15%]"
        animate={{ y: [0, -6, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1.2 }}
      >
        <svg className="h-5 w-5 text-primary/40 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        </svg>
      </motion.div>

      {/* Star bottom-right */}
      <motion.div
        className="absolute bottom-[25%] right-[14%]"
        animate={{ y: [0, -8, 0], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 3.2, repeat: Infinity, delay: 0.4 }}
      >
        <svg className="h-5 w-5 text-primary/40 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      </motion.div>

      {/* Small animated dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/50 sm:h-1.5 sm:w-1.5"
          style={{
            left: `${25 + i * 13}%`,
            top: `${30 + (i % 3) * 18}%`,
          }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 2.5 + i * 0.3,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* EST badge */}
      <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-primary/20 bg-primary/10 p-3 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-4">
        <div className="text-center font-heading text-xs font-bold tracking-wider text-primary sm:text-sm">
          {est}
        </div>
      </div>
    </div>
  );
}

export default function About() {
  const { lang } = useLang();
  const tr = t(lang);

  const stats = [
    { target: 24, suffix: "+", label: tr.about.stats.classes },
    { target: 10, suffix: "+", label: tr.about.stats.trainers },
    { target: 4, suffix: "", label: tr.about.stats.programs },
    { target: 1000, suffix: "+", label: tr.about.stats.members },
  ];

  return (
    <section id="about" className="bg-dark-lighter py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <FadeInWhenVisible>
            <GymVisual est={tr.about.est} />
          </FadeInWhenVisible>

          <div>
            <FadeInWhenVisible delay={0.1}>
              <div className="section-label">{tr.about.label1}</div>
              <h2 className="section-title mt-5 text-2xl text-white sm:mt-6 sm:text-4xl lg:text-5xl">
                {tr.about.title}{" "}
                <span className="text-primary">{tr.about.titleHighlight}</span>
              </h2>
              <p className="mt-4 text-base leading-relaxed text-text-muted sm:mt-6 sm:text-lg">
                {tr.about.p1}
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <div className="my-6 h-px bg-white/10 sm:my-8" />
              <div className="section-label">{tr.about.label2}</div>
              <p className="mt-4 text-base leading-relaxed text-text-muted sm:mt-6 sm:text-lg">
                {tr.about.p2}
              </p>
            </FadeInWhenVisible>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-2 gap-3 sm:mt-20 sm:gap-6 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <FadeInWhenVisible key={i} delay={i * 0.1}>
              <div className="glass-card rounded-2xl p-4 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 mobile-card-breathe mobile-shadow-pulse sm:p-6">
                <div className="font-heading text-3xl font-bold text-primary sm:text-5xl">
                  <CountUp target={stat.target} suffix={stat.suffix} />
                </div>
                <div className="mt-1 font-heading text-[10px] font-medium tracking-wider text-text-muted sm:mt-2 sm:text-sm">
                  {stat.label.toUpperCase()}
                </div>
              </div>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
