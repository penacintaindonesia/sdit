// ==========================================
// DATA SEKOLAH - SILAKAN GANTI BAGIAN INI
// Semua teks di dalam tanda [ ] wajib diganti.
// Hanya file ini yang perlu diedit untuk data umum sekolah.
// ==========================================

export const school = {
  name: "SDIT Pena Cinta Indonesia",
  shortName: "SDIT Pena Cinta Indonesia",
  tagline: "Sekolah Islami, Berprestasi, Berakhlak Mulia",

  // Ganti isi file gambarnya saja di public/assets/ , nama file jangan diubah.
  logo: "/assets/logo-sdit.png",
  favicon: "/assets/favicon.png",
  heroImage: "/assets/hero-school.jpg",
  heroImageMobile: "/assets/hero-school-mobile.jpg",
  aboutImage: "/assets/about-school.jpg",

  welcomeText: "Selamat Datang di",

  heroTitle: "Mendidik dengan Hati, Menyiapkan Generasi Rabbani",

  heroDescription:
    "SDIT Pena Cinta Indonesia hadir untuk membentuk generasi yang cerdas, berkarakter, beriman, dan siap menghadapi masa depan dengan ilmu, iman, dan akhlak mulia.",

  aboutDescription:
    "SDIT Pena Cinta Indonesia adalah sekolah dasar Islam terpadu yang hadir untuk mencetak generasi unggul, berakhlak mulia, dan berprestasi. Dengan pendekatan pendidikan yang seimbang antara ilmu pengetahuan, iman, dan akhlak, kami berkomitmen memberikan pendidikan terbaik bagi setiap peserta didik.",

  address: {
    street: "Perum Bumi Cengkong Lestari C13 No. 10 & 11",
    village: "Cengkong",
    district: "Purwasari",
    city: "Karawang",
    province: "Jawa Barat",
    postalCode: "41373",
  },

  contact: {
    whatsapp: "0813-1315-2505",
    phone: "+62 813-1315-2505",
    email: "pena.cintaindonesia@gmail.com",
  },

  socialMedia: {
    instagram: "https://www.instagram.com/sdit.penacintaindonesia?stkn=ejN4dmExOXJsbWJp",
    facebook: "https://www.facebook.com/share/1BxHGK5Bsa/",
    youtube: "-",
    tiktok: "https://www.tiktok.com/@sdit.pena.cinta.i?_r=1&_t=ZS-99mQqMa2CpD",
  },

  links: {
    ppdb: "https://forms.gle/XSt1i296ZLfzrGTA8",
    maps: "https://maps.app.goo.gl/o6ykxEGWaZCBudsY7",
    whatsapp: "https://wa.me/6281313152505",
    videoProfile: "https://www.facebook.com/share/r/1EGtB4qD8F/",
    profile: "#tentang-kami",
    programs: "/program",
    facilities: "/fasilitas",
    news: "/berita",
    contact: "/kontak",
    privacy: "/kebijakan-privasi",
    terms: "/syarat-ketentuan",
  },

  seo: {
    title: "SDIT Pena Cinta Indonesia | Sekolah Islami, Berprestasi, Berakhlak Mulia",
    description:
      "SDIT Pena Cinta Indonesia adalah sekolah dasar Islam terpadu yang membentuk generasi cerdas, berkarakter, beriman, dan berprestasi.",
    siteUrl: "[ISI DOMAIN WEBSITE]",
    ogImage: "/assets/hero-school.jpg",
  },
};

export type School = typeof school;

/** Alamat lengkap satu baris, dipakai di Kontak & Footer. */
export function fullAddress(): string {
  const a = school.address;
  return [a.street, a.village, a.district, a.city, a.province, a.postalCode]
    .filter(Boolean)
    .join(", ");
}
