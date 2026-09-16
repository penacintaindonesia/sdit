export type NewsItem = {
  slug: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  image: string;
  href: string;
};

// ==========================================
// BERITA & KEGIATAN - TAMBAH / EDIT DI SINI
// Item paling atas tampil paling kiri.
// ==========================================
export const news: NewsItem[] = [
  { slug: "tahfidz-kelas-1-3", title: "Kegiatan Tahfidz Bersama Kelas 1-3", date: "12 Mei 2025", category: "Kegiatan", excerpt: "Setoran hafalan pekanan siswa kelas 1 sampai 3 bersama guru pendamping tahfidz.", image: "/assets/news-1.jpg", href: "/berita/tahfidz-kelas-1-3" },
  { slug: "isra-miraj-1446", title: "Peringatan Isra Mi'raj 1446 H", date: "5 Mei 2025", category: "Kegiatan", excerpt: "Kajian dan lomba islami memperingati Isra Mi'raj bersama seluruh warga sekolah.", image: "/assets/news-2.jpg", href: "/berita/isra-miraj-1446" },
  { slug: "lomba-mewarnai", title: "Lomba Mewarnai Tingkat SD", date: "26 April 2025", category: "Prestasi", excerpt: "Siswa SDIT Pena Cinta Indonesia mengikuti lomba mewarnai tingkat sekolah dasar.", image: "/assets/news-3.jpg", href: "/berita/lomba-mewarnai" },
  { slug: "kunjungan-museum", title: "Kunjungan Edukasi ke Museum Pendidikan", date: "20 April 2025", category: "Kegiatan", excerpt: "Belajar di luar kelas melalui kunjungan edukatif ke museum pendidikan.", image: "/assets/news-4.jpg", href: "/berita/kunjungan-museum" },
];
