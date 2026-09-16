import type { Tone } from "./advantages";

export type Feature = { icon: "BookOpen" | "Star" | "Users" | "Heart" | "Lightbulb"; title: string; description: string; tone: Tone };

export const features: Feature[] = [
  { icon: "BookOpen", title: "Pendidikan Islami", description: "Berlandaskan Al-Qur'an dan Sunnah", tone: "green" },
  { icon: "Star", title: "Prestasi Akademik", description: "Didukung oleh tenaga pendidik profesional", tone: "yellow" },
  { icon: "Users", title: "Lingkungan Nyaman", description: "Aman, Bersih, dan Kondusif", tone: "blue" },
  { icon: "Heart", title: "Pembentukan Karakter", description: "Disiplin, Mandiri, dan Peduli Sesama", tone: "pink" },
  { icon: "Lightbulb", title: "Fasilitas Lengkap", description: "Mendukung proses belajar yang optimal", tone: "violet" },
];
