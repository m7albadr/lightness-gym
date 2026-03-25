"use client";

export function GazelleMark({ className = "h-10" }: { className?: string }) {
  return (
    <img
      src="/images/logo-mark.png"
      alt=""
      className={`logo-mark ${className}`}
    />
  );
}

export function LogoFull({ className = "", inverted = false }: { className?: string; inverted?: boolean }) {
  const textColor = inverted ? "text-dark" : "text-text-light";
  return (
    <a href="#" className={`flex shrink-0 items-center gap-2 ${className}`}>
      <GazelleMark className="h-10 w-auto sm:h-12" />
      <div className="flex flex-col">
        <span className={`font-heading text-[15px] font-extrabold tracking-[0.14em] sm:text-lg ${textColor}`}>
          LIGHTNESS
        </span>
        <span className="text-[7px] font-semibold tracking-[0.16em] text-primary sm:text-[8.5px] sm:tracking-[0.18em]">
          FITNESS GYM FOR HER
        </span>
      </div>
    </a>
  );
}
