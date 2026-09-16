import Image from "next/image";
import { programs } from "@/data/programs";
import SectionLabel from "@/components/SectionLabel";

const categoryStyle: Record<string, string> = {
  Religi: "bg-green text-white",
  Akademik: "bg-secondary text-white",
  Ekstrakurikuler: "bg-yellow text-ink",
};

export default function Programs() {
  return (
    <section id="program" className="bg-white py-16 sm:py-20">
      <div className="container-x">
        <div className="reveal text-center">
          <SectionLabel align="center">Program Unggulan</SectionLabel>
          <h2 className="mx-auto mt-3 max-w-[24ch] font-display text-[27px] font-extrabold leading-tight text-primary sm:text-[36px]">
            Kegiatan Terbaik untuk Masa Depan Anak
          </h2>
        </div>

        {/* Desktop: 5 kolom. Mobile: geser ke samping. */}
        <ul className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-5 lg:overflow-visible">
          {programs.map((p) => (
            <li
              key={p.slug}
              className="reveal min-w-[74%] snap-center rounded-[20px] bg-white p-3 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card sm:min-w-[46%] lg:min-w-0"
            >
              <div className="overflow-hidden rounded-[14px]">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={400}
                  height={300}
                  sizes="(max-width: 1024px) 70vw, 210px"
                  className="h-[130px] w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="px-1 pb-1 pt-3 text-center">
                <h3 className="font-display text-[14px] font-bold text-ink">{p.title}</h3>
                <p className="mt-1 text-[12px] leading-snug text-ink/60">{p.description}</p>
                <span
                  className={`mt-3 inline-block rounded-full px-3 py-1 text-[11px] font-semibold ${categoryStyle[p.category]}`}
                >
                  {p.category}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
