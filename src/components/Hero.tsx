import Image from "next/image";
import { ArrowRight, PlayCircle } from "lucide-react";
import { school } from "@/config/school";
import { Leaf, PaperPlane, Sparkle, BrushStroke } from "@/components/Decor";
import Button from "@/components/Button";

export default function Hero() {
  return (
    <section id="beranda" className="relative isolate overflow-hidden">
      {/* Foto gedung sekolah sebagai latar hero */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={school.heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#EAF6FF] via-[#EAF6FF]/85 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent" />
      </div>

      {/* Dekorasi organik */}
      <Leaf className="pointer-events-none absolute -left-6 top-10 h-28 w-28 rotate-12 text-green/30" />
      <Leaf className="pointer-events-none absolute right-[42%] top-6 hidden h-16 w-16 -rotate-45 text-green/40 lg:block" />
      <PaperPlane className="pointer-events-none absolute right-[46%] top-24 hidden h-12 w-12 text-secondary/70 lg:block animate-float" />
      <Sparkle className="pointer-events-none absolute left-[8%] top-[18%] h-6 w-6 text-yellow" />

      <div className="container-x grid items-center gap-10 pb-24 pt-12 sm:pt-16 lg:grid-cols-[1.05fr,1fr] lg:pb-32">
        <div className="reveal max-w-xl">
          <p className="font-display text-2xl italic text-green-dark sm:text-[26px]">
            {school.welcomeText}
          </p>

          <h1 className="mt-1 font-display text-[46px] font-extrabold leading-[1.02] text-primary sm:text-[64px] lg:text-[72px]">
            SDIT
            <br />
            <span className="text-green">Pena Cinta</span>
            <br />
            <span className="text-green">Indonesia</span>
          </h1>

          <p className="relative mt-4 inline-block">
            <BrushStroke className="absolute -inset-x-3 -bottom-1 -z-10 h-9 w-[calc(100%+24px)] text-yellow" />
            <span className="relative font-display text-lg font-semibold text-ink sm:text-xl">
              {school.tagline}
            </span>
          </p>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/75">
            {school.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={school.links.profile} variant="primary" size="lg">
              Kenali Lebih Lanjut
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href={school.links.videoProfile} variant="outline" size="lg">
              <PlayCircle className="h-5 w-5" aria-hidden="true" />
              Video Profil
            </Button>
          </div>
        </div>

        {/* Ruang untuk ilustrasi siswa; foto latar sudah tampil di belakang */}
        <div className="reveal relative hidden min-h-[380px] lg:block" aria-hidden="true">
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-[48%_52%_46%_54%/52%_44%_56%_48%] bg-white/25 backdrop-blur-[2px]" />
        </div>
      </div>

      {/* Lengkung kuning di kaki hero */}
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className="absolute inset-x-0 bottom-0 h-[90px] w-full"
        aria-hidden="true"
      >
        <path d="M0 70c220 40 460 44 720 10s500-26 720 6v34H0V70Z" fill="#FFC928" opacity=".95" />
        <path d="M0 92c240 30 480 32 720 4s500-18 720 8v16H0V92Z" fill="#F7FBFF" />
      </svg>
    </section>
  );
}
