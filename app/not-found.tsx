import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-dark px-6 text-center">
      <div className="font-heading text-8xl font-bold text-primary">404</div>
      <h1 className="mt-4 font-heading text-2xl font-semibold tracking-wider text-white">
        PAGE NOT FOUND
      </h1>
      <p className="mt-3 max-w-md text-text-muted">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on track.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-primary px-8 py-3 font-heading text-sm font-semibold tracking-wider text-dark transition-all hover:bg-primary-dark"
      >
        BACK TO HOME
      </Link>
    </div>
  );
}
