/**
 * Elemen dekoratif (daun, pesawat kertas, lengkung, bintang).
 * Semuanya SVG inline supaya ringan dan mengikuti warna brand.
 * Bersifat dekoratif: selalu aria-hidden.
 */

type SvgProps = React.SVGProps<SVGSVGElement>;

export function Leaf({ className = "", ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false" {...rest}>
      <path
        d="M56 8C30 8 10 20 8 42c-1 10 4 14 4 14S16 40 32 30c-9 12-14 26-14 26S52 52 56 8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function PaperPlane({ className = "", ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" focusable="false" {...rest}>
      <path d="M60 4 4 28l20 8 4 20 10-16 18 12L60 4Z" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M24 36 60 4" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function Sparkle({ className = "", ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" {...rest}>
      <path d="M12 0c1 7 4 10 12 12-8 2-11 5-12 12-1-7-4-10-12-12C8 10 11 7 12 0Z" fill="currentColor" />
    </svg>
  );
}

/** Gelombang pemisah antar-section. */
export function WaveDivider({
  className = "",
  color = "#FFFFFF",
  flip = false,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={`block h-[60px] w-full sm:h-[90px] ${flip ? "rotate-180" : ""} ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M0 64c180 48 360 56 540 24s360-72 540-56 240 56 360 72v16H0V64Z"
        fill={color}
      />
    </svg>
  );
}

/** Bentuk organik lembut untuk latar belakang. */
export function Blob({ className = "", ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" focusable="false" {...rest}>
      <path
        fill="currentColor"
        d="M46 -58C60 -46 71 -31 74 -14 77 3 72 21 62 37 51 53 35 66 15 71 -5 76 -27 73 -46 62 -65 51 -80 33 -84 12 -88 -9 -80 -33 -65 -49 -50 -66 -27 -75 -6 -73 15 -71 32 -70 46 -58Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}

/** Sapuan kuas kuning sebagai aksen. */
export function BrushStroke({ className = "", ...rest }: SvgProps) {
  return (
    <svg viewBox="0 0 300 40" className={className} aria-hidden="true" focusable="false" {...rest}>
      <path
        d="M4 26c60-14 120-18 180-12 34 4 68 12 112 6-44 14-88 12-132 8C118 24 62 22 4 34Z"
        fill="currentColor"
      />
    </svg>
  );
}
