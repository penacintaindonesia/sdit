import type { Tone } from "@/data/advantages";

/** Warna aksen ikon agar konsisten di seluruh section. */
export const toneStyles: Record<Tone, { solid: string; soft: string; text: string }> = {
  green: { solid: "bg-green", soft: "bg-green/12", text: "text-green-dark" },
  yellow: { solid: "bg-yellow", soft: "bg-yellow/20", text: "text-[#A97A00]" },
  blue: { solid: "bg-secondary", soft: "bg-secondary/12", text: "text-primary" },
  violet: { solid: "bg-[#7C5CE0]", soft: "bg-[#7C5CE0]/12", text: "text-[#5B3FC4]" },
  pink: { solid: "bg-[#F2496B]", soft: "bg-[#F2496B]/12", text: "text-[#C81E43]" },
  teal: { solid: "bg-[#0FA3A3]", soft: "bg-[#0FA3A3]/12", text: "text-[#0A7E7E]" },
};
