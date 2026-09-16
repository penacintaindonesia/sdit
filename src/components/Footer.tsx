import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, Instagram, Facebook, Youtube, Music2 } from "lucide-react";
import { school, fullAddress } from "@/config/school";

const menuLinks = [
  { label: "Tentang Kami", href: school.links.profile },
  { label: "Program", href: school.links.programs },
  { label: "PPDB", href: "#ppdb" },
  { label: "Berita", href: school.links.news },
  { label: "Kontak", href: "#kontak" },
];

const socials = [
  { label: "Instagram", href: school.socialMedia.instagram, Icon: Instagram },
  { label: "Facebook", href: school.socialMedia.facebook, Icon: Facebook },
  { label: "YouTube", href: school.socialMedia.youtube, Icon: Youtube },
  { label: "TikTok", href: school.socialMedia.tiktok, Icon: Music2 },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-x grid gap-10 py-14 md:grid-cols-[1.2fr,0.8fr,1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={school.logo}
              alt={`Logo ${school.name}`}
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <span className="leading-tight">
              <span className="block font-display text-[19px] font-bold">SDIT</span>
              <span className="block font-display text-[19px] font-bold leading-none">
                Pena Cinta Indonesia
              </span>
              <span className="block text-[11px] text-white/70">{school.tagline}</span>
            </span>
          </div>
          <p className="mt-5 max-w-[42ch] text-[13.5px] leading-relaxed text-white/70">
            {school.seo.description}
          </p>
        </div>

        <nav aria-label="Navigasi footer">
          <h2 className="font-display text-[16px] font-bold">Menu</h2>
          <ul className="mt-4 space-y-2.5">
            {menuLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-[13.5px] text-white/75 hover:text-yellow">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="font-display text-[16px] font-bold">Kontak</h2>
          <ul className="mt-4 space-y-3 text-[13.5px] text-white/75">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow" aria-hidden="true" />
              <span>{fullAddress()}</span>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-yellow" aria-hidden="true" />
              <span>{school.contact.phone}</span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-yellow" aria-hidden="true" />
              <span className="break-all">{school.contact.email}</span>
            </li>
          </ul>

          <h2 className="mt-6 font-display text-[16px] font-bold">Ikuti Kami</h2>
          <ul className="mt-3 flex gap-2.5">
            {socials.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} ${school.name}`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-yellow hover:text-ink"
                >
                  <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="container-x flex flex-wrap items-center justify-between gap-3 py-5 text-[12.5px] text-white/70">
          <p>© {new Date().getFullYear()} {school.name}. Semua hak dilindungi.</p>
          <p className="flex gap-4">
            <Link href={school.links.privacy} className="hover:text-yellow">Kebijakan Privasi</Link>
            <Link href={school.links.terms} className="hover:text-yellow">Syarat &amp; Ketentuan</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
