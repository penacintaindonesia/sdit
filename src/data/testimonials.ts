export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  { id: "t1", quote: “Saya mengucapkan selamat atas berdirinya SDIT Pena Cinta Indonesia. Saya yakin sekolah ini akan bertumbuh dan semakin besar, dengan pimpinan yang latar belakangnya mampu menjadikan SDIT PECI lebih unggul dan lebih memadai untuk masyarakat.”, name: "Imam Khambali, S.Pd., MM.", role: "Pimpinan Ponpes Modern Darussalam Al-Hunafaa", avatar: "/assets/testimonial-imam.jpg" }
];
