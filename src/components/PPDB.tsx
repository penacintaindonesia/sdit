import { ClipboardCheck, FileText, Headphones, UserPlus } from "lucide-react";
import { ppdb } from "@/config/ppdb";
import { school } from "@/config/school";
import SectionLabel from "@/components/SectionLabel";
import Button from "@/components/Button";
import { PaperPlane, Sparkle } from "@/components/Decor";

const icons = { ClipboardCheck, FileText, Headphones };

export default function PPDB() {
  return (
    <section id="ppdb" className="relative overflow-hidden bg-[#FFF7E3] py-16 sm:py-20">
      <span className="absolute -left-16 top-6 h-48 w-48 rounded-full bg-yellow/25" aria-hidden="true" />
      <span className="absolute -bottom-20 right-[-60px] h-64 w-64 rounded-full bg-green/10" aria-hidden="true" />

      <div className="container-x grid items-center gap-10 lg:grid-cols-[1fr,1.05fr]">
        <div className="reveal">
          <SectionLabel>{ppdb.label}</SectionLabel>

          <h2 className="mt-3 font-display text-[52px] font-extrabold leading-none text-primary sm:text-[64px]">
            {ppdb.title}
          </h2>
          <p className="mt-2 font-display text-xl italic text-green-dark">{ppdb.subtitle}</p>

          <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-ink/75">
            {ppdb.description}
          </p>

          <div className="mt-7">
            <Button href={school.links.ppdb} variant="yellow" size="lg">
              <UserPlus className="h-4 w-4" aria-hidden="true" />
              {ppdb.ctaLabel}
            </Button>
          </div>
        </div>

        <div className="reveal relative">
          <Sparkle className="absolute -top-4 right-10 h-6 w-6 text-yellow" aria-hidden="true" />
          <PaperPlane className="absolute -right-2 -top-6 hidden h-10 w-10 text-secondary/70 sm:block" aria-hidden="true" />

          <ul className="rounded-[22px] bg-white p-6 shadow-card sm:p-8">
            {ppdb.highlights.map((h) => {
              const Icon = icons[h.icon];
              return (
                <li key={h.title} className="flex gap-4 border-b border-ink/5 py-4 last:border-0 last:pb-0 first:pt-0">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10">
                    <Icon className="h-5 w-5 text-secondary" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-[15px] font-bold text-ink">{h.title}</h3>
                    <p className="text-[13px] text-ink/65">{h.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="mt-5 inline-flex rotate-[-3deg] items-center rounded-full bg-white px-5 py-2.5 font-display text-[15px] font-bold text-primary shadow-soft">
            Ayo bergabung bersama kami
          </p>
        </div>
      </div>
    </section>
  );
}
