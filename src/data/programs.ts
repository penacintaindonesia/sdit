export type Program = {
  slug: string;
  title: string;
  description: string;
  category: "Religi" | "Akademik" | "Ekstrakurikuler";
  image: string;
};

// ==========================================
// PROGRAM UNGGULAN - TAMBAH / EDIT DI SINI
// ==========================================
export const programs: Program[] = [
  { slug: "tahfidz", title: "Tahfidz Al-Qur'an", description: "Membentuk generasi Qur'ani yang berakhlak mulia.", category: "Religi", image: "/assets/program-tahfidz.jpg" },
  { slug: "digital", title: "Pembelajaran Digital", description: "Memanfaatkan teknologi untuk pembelajaran yang lebih interaktif.", category: "Akademik", image: "/assets/program-digital.jpg" },
  { slug: "pramuka", title: "Pramuka", description: "Melatih kemandirian, kedisiplinan, dan kepemimpinan.", category: "Ekstrakurikuler", image: "/assets/program-pramuka.jpg" },
  { slug: "olahraga", title: "Olahraga", description: "Menjaga kesehatan dan kebugaran jasmani.", category: "Ekstrakurikuler", image: "/assets/program-olahraga.jpg" },
  { slug: "seni", title: "Seni & Kreativitas", description: "Mengembangkan bakat dan kreativitas anak.", category: "Ekstrakurikuler", image: "/assets/program-seni.jpg" },
];
