export type Testimonial = { id: string; quote: string; name: string; role: string; avatar: string };

// ==========================================
// TESTIMONI - TAMBAH / EDIT DI SINI
// ==========================================
export const testimonials: Testimonial[] = [
  { id: "t1", quote: "Alhamdulillah, anak saya semakin semangat belajar di SDIT Pena Cinta Indonesia. Lingkungannya islami, gurunya sabar, dan program tahfidznya sangat membantu.", name: "Ibu Rani", role: "Orang Tua Siswa", avatar: "/assets/testimonial-1.jpg" },
  { id: "t2", quote: "Komunikasi sekolah dengan orang tua berjalan baik. Perkembangan hafalan dan akhlak anak saya terpantau setiap pekan.", name: "Bapak Hendra", role: "Orang Tua Siswa", avatar: "/assets/testimonial-1.jpg" },
  { id: "t3", quote: "Saya senang sekolah di sini. Banyak kegiatan seru, ada pramuka, olahraga, dan teman-teman yang baik.", name: "Aisyah", role: "Siswa Kelas 5", avatar: "/assets/testimonial-1.jpg" },
];
