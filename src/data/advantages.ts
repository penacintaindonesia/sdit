export type Tone = "green" | "yellow" | "blue" | "violet" | "pink" | "teal";
export type Advantage = { icon: "BookOpen" | "Users" | "Landmark" | "Star" | "Home" | "Building2"; title: string; description: string; tone: Tone };

export const advantages: Advantage[] = [
  { icon: "BookOpen", title: "Kurikulum Terpadu", description: "Mengintegrasikan kurikulum nasional dan pendidikan Islam.", tone: "green" },
  { icon: "Users", title: "Tenaga Pendidik Profesional", description: "Guru berkompeten, berpengalaman, dan penuh dedikasi.", tone: "yellow" },
  { icon: "Landmark", title: "Program Tahfidz", description: "Membentuk generasi Qur'ani yang cinta Al-Qur'an.", tone: "blue" },
  { icon: "Star", title: "Ekstrakurikuler Beragam", description: "Mengembangkan bakat dan minat siswa.", tone: "violet" },
  { icon: "Home", title: "Lingkungan Islami", description: "Suasana belajar yang aman, nyaman, dan kondusif.", tone: "pink" },
  { icon: "Building2", title: "Fasilitas Lengkap", description: "Ruang kelas representatif, laboratorium, perpustakaan, dan sarana olahraga.", tone: "teal" },
];
