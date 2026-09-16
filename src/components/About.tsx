import Image from "next/image";
import { school } from "@/config/school";
import SectionLabel from "@/components/SectionLabel";
import { Leaf } from "@/components/Decor";

export default function About() {
  return (
    <section id="tentang-kami" className="relative overflow-hidden bg-light py-16 sm:py-20">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <div className="reveal">
          <SectionLabel>Tentang Kami</SectionLabel>
          <h2 className="mt-3 font-display text-[30px] font-extrabold leading-tight text-primary sm:text-[38px]">
            {school.name}
          </h2>
          <p className="mt-4 max-w-[54ch] text-[15px] leading-relaxed text-ink/75">
            {school.aboutDescription}
          </p>
        </div>

        <div className="reveal relative">
          {/* Bingkai kuning organik di belakang foto */}
          <div
            className="absolute -inset-4 rounded-[46%_54%_42%_58%/48%_42%_58%_52%] bg-yellow/85"
            aria-hidden="true"
          />
          <div className="relative overflow-hidden rounded-[26px] shadow-card">
            <Image
              src={school.aboutImage}
              alt={`Gedung ${school.name}`}
              width={900}
              height={600}
              sizes="(max-width: 1024px) 100vw, 520px"
              className="h-[280px] w-full object-cover sm:h-[340px]"
            />
          </div>
          <Leaf className="absolute -bottom-6 -left-6 h-16 w-16 rotate-[25deg] text-green/70" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}