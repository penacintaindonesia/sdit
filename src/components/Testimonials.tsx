"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import SectionLabel from "@/components/SectionLabel";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const active = testimonials[index];

  const go = (dir: -1 | 1) => setIndex((i) => (i + dir + total) % total);

  return (
    <section aria-labelledby="judul-testimoni" className="bg-[#EAF4FF] py-16 sm:py-20">
      <div className="container-x">
        <div className="reveal text-center">
          <SectionLabel align="center">Testimoni</SectionLabel>
          <h2 id="judul-testimoni" className="mt-3 font-display text-[26px] font-extrabold text-primary sm:text-[32px]">
            Apa Kata Orang Tua dan Siswa Kami?
          </h2>
        </div>

        <div className="reveal mt-10 flex items-center gap-3 sm:gap-6">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Testimoni sebelumnya"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-soft transition-colors hover:bg-primary hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <figure
            className="flex-1 rounded-[24px] bg-white px-6 py-8 text-center shadow-card sm:px-12"
            aria-live="polite"
          >
            <Quote className="mx-auto mb-4 h-7 w-7 text-yellow" aria-hidden="true" />
            <blockquote className="mx-auto max-w-[62ch] text-[15px] leading-relaxed text-ink/80">
              {active.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-center gap-3">
              <Image
                src={active.avatar}
                alt=""
                width={44}
                height={44}
                className="h-11 w-11 rounded-full object-cover"
              />
              <span className="text-left">
                <span className="block font-display text-[15px] font-bold text-primary">{active.name}</span>
                <span className="block text-[12.5px] text-ink/60">{active.role}</span>
              </span>
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Testimoni berikutnya"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-soft transition-colors hover:bg-primary hover:text-white"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Tampilkan testimoni ${i + 1}`}
              aria-current={i === index}
              className={`h-2.5 rounded-full transition-all ${
                i === index ? "w-6 bg-yellow" : "w-2.5 bg-primary/25 hover:bg-primary/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
