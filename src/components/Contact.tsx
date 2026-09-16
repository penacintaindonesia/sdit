import { MapPin, Phone, Mail, MessageCircle, Instagram, Facebook, Youtube, ExternalLink } from "lucide-react";
import { school, fullAddress } from "@/config/school";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";

export default function Contact() {
  return (
    <section id="kontak" className="bg-white py-16 sm:py-20">
      <div className="container-x grid gap-10 lg:grid-cols-2">
        <div className="reveal">
          <SectionLabel>Kontak</SectionLabel>
          <h2 className="mt-3 font-display text-[27px] font-extrabold text-primary sm:text-[34px]">
            Hubungi {school.name}
          </h2>
          <p className="mt-3 max-w-[52ch] text-[15px] leading-relaxed text-ink/70">
            Ada pertanyaan seputar pendaftaran, program, atau kunjungan sekolah? Tim kami siap membantu.
          </p>

          <div className="mt-7">
            <Button href={school.links.whatsapp} variant="primary" size="lg">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Hubungi Kami
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-3">
            {[
              { href: school.socialMedia.instagram, label: "Instagram", Icon: Instagram },
              { href: school.socialMedia.facebook, label: "Facebook", Icon: Facebook },
              { href: school.socialMedia.youtube, label: "YouTube", Icon: Youtube },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${label} ${school.name}`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-light text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="reveal space-y-4">
          <li className="flex gap-4 rounded-[18px] bg-light p-5">
            <MapPin className="h-5 w-5 shrink-0 text-green" aria-hidden="true" />
            <div>
              <h3 className="font-display text-[15px] font-bold text-primary">Alamat</h3>
              <p className="mt-1 text-[13.5px] leading-relaxed text-ink/70">{fullAddress()}</p>
              <a
                href={school.links.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-semibold text-secondary hover:text-primary"
              >
                Lihat di Google Maps
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </li>

          <li className="flex gap-4 rounded-[18px] bg-light p-5">
            <MessageCircle className="h-5 w-5 shrink-0 text-green" aria-hidden="true" />
            <div>
              <h3 className="font-display text-[15px] font-bold text-primary">WhatsApp</h3>
              <p className="mt-1 text-[13.5px] text-ink/70">{school.contact.whatsapp}</p>
            </div>
          </li>

          <li className="flex gap-4 rounded-[18px] bg-light p-5">
            <Phone className="h-5 w-5 shrink-0 text-green" aria-hidden="true" />
            <div>
              <h3 className="font-display text-[15px] font-bold text-primary">Telepon</h3>
              <p className="mt-1 text-[13.5px] text-ink/70">{school.contact.phone}</p>
            </div>
          </li>

          <li className="flex gap-4 rounded-[18px] bg-light p-5">
            <Mail className="h-5 w-5 shrink-0 text-green" aria-hidden="true" />
            <div>
              <h3 className="font-display text-[15px] font-bold text-primary">Email</h3>
              <p className="mt-1 break-all text-[13.5px] text-ink/70">{school.contact.email}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
