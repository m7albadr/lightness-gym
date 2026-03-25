"use client";

import { motion } from "framer-motion";
import { GazelleMark } from "@/components/Logo";
import { useLang } from "@/lib/context";
import { t } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLang();
  const tr = t(lang);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-dark">
      {/* Abstract background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark-lighter to-dark" />
        <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[60px] sm:h-96 sm:w-96 sm:blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-52 w-52 rounded-full bg-primary/8 blur-[50px] sm:h-80 sm:w-80 sm:blur-[100px]" />
        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[80px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,213,90,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(201,213,90,0.3) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute right-[10%] top-[15%] hidden rounded-full border border-primary/10 sm:block sm:h-64 sm:w-64"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute left-[5%] bottom-[20%] hidden rounded-full border border-white/5 sm:block sm:h-48 sm:w-48"
        />
        <div className="absolute right-[20%] bottom-[30%] h-2 w-2 rounded-full bg-primary/40" />
        <div className="absolute left-[15%] top-[30%] h-1.5 w-1.5 rounded-full bg-primary/30" />
        <div className="absolute right-[35%] top-[20%] h-1 w-1 rounded-full bg-white/20" />
      </div>

      {/* Faint gazelle watermark */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
        <GazelleMark className="h-[600px] w-auto text-white sm:h-[800px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-24 pt-28 text-center sm:px-6 sm:py-32 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label mb-6 inline-block sm:mb-8">
            {tr.hero.badge}
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto max-w-5xl font-heading text-3xl font-bold leading-tight tracking-wide text-white sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {tr.hero.heading1}{" "}
          <span className="text-primary">{tr.hero.heading2}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mt-5 max-w-2xl px-2 text-base leading-relaxed text-text-muted sm:mt-6 sm:text-xl"
        >
          {tr.hero.sub}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <motion.a
            href="#pricing"
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-full bg-primary px-8 py-4 font-heading text-sm font-semibold tracking-wider text-dark transition-all sm:animate-glow-pulse hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/25 sm:w-auto"
          >
            {tr.hero.cta1}
          </motion.a>
          <motion.a
            href="#classes"
            whileTap={{ scale: 0.95 }}
            className="w-full rounded-full border border-white/20 px-8 py-4 font-heading text-sm font-semibold tracking-wider text-white transition-all mobile-card-breathe hover:border-primary hover:text-primary sm:w-auto"
          >
            {tr.hero.cta2}
          </motion.a>
        </motion.div>

        {/* App store badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 flex items-center justify-center gap-3 sm:mt-10"
        >
          <a
            href="https://play.google.com/store/apps/details?id=com.fitnessmobileapps.lightnessgym&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition-all hover:border-white/20 hover:bg-white/10 sm:px-4 sm:py-2.5"
          >
            <svg className="h-5 w-5 text-white sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 010 1.38l-2.302 2.302L15.396 12l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.635-8.635z" />
            </svg>
            <div className="text-left">
              <div className="text-[8px] leading-tight text-text-muted sm:text-[9px]">{tr.hero.getItOn}</div>
              <div className="text-xs font-semibold leading-tight text-white sm:text-sm">{tr.hero.googlePlay}</div>
            </div>
          </a>
          <a
            href="https://apps.apple.com/kw/app/lightness-gym/id1488798623"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 transition-all hover:border-white/20 hover:bg-white/10 sm:px-4 sm:py-2.5"
          >
            <svg className="h-5 w-5 text-white sm:h-6 sm:w-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            <div className="text-left">
              <div className="text-[8px] leading-tight text-text-muted sm:text-[9px]">{tr.hero.downloadOn}</div>
              <div className="text-xs font-semibold leading-tight text-white sm:text-sm">{tr.hero.appStore}</div>
            </div>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 sm:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-widest text-text-muted">{tr.hero.scroll}</span>
          <div className="h-10 w-5 rounded-full border border-white/20">
            <motion.div
              animate={{ y: [2, 14, 2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="mx-auto mt-1 h-2 w-1 rounded-full bg-primary"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
