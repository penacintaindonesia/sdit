import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "yellow" | "outline" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-transform transition-colors duration-200 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary: "bg-primary text-white hover:bg-secondary shadow-soft",
  yellow: "bg-yellow text-ink hover:bg-[#F5B800] shadow-soft",
  outline: "border-2 border-primary/25 text-primary bg-white hover:border-primary hover:bg-light",
  ghost: "text-primary hover:text-secondary",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px]",
};

export default function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  className = "",
  ariaLabel,
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  external?: boolean;
  className?: string;
  ariaLabel?: string;
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  // Apa pun yang bukan path internal (diawali "/") dianggap link biasa <a>.
  // Ini juga mencegah error Next.js saat href masih berupa placeholder
  // seperti "[ISI LINK VIDEO PROFIL]" yang belum diisi di school.ts.
  const isExternal = external ?? !(href.startsWith("/") || href.startsWith("#"));

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}
