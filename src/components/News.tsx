import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { news } from "@/data/news";
import { school } from "@/config/school";

export default function News() {
  return (
    <section id="berita" className="bg-white py-16 sm:py-20">
      <div className="container-x">
        <div className="reveal flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-[27px] font-extrabold text-primary sm:text-[32px]">
              Berita &amp; Kegiatan
            </h2>
            <p className="mt-1 text-[14px] text-ink/65">
              Informasi terbaru dari {school.name}
            </p>
          </div>
          <Link
            href={school.links.news}
            className="inline-flex items-center gap-2 text-sm font-semibold text-secondary hover:text-primary"
          >
            Lihat Semua
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {news.map((item) => (
            <li
              key={item.slug}
              className="reveal overflow-hidden rounded-[18px] bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card"
            >
              <article>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={480}
                  height={320}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 270px"
                  className="h-[150px] w-full object-cover"
                />
                <div className="p-4">
                  <p className="flex items-center gap-1.5 text-[11.5px] text-ink/55">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                    {item.date}
                    <span className="ml-auto rounded-full bg-light px-2 py-0.5 font-semibold text-secondary">
                      {item.category}
                    </span>
                  </p>
                  <h3 className="mt-2 font-display text-[15px] font-bold leading-snug text-ink">
                    <Link href={item.href} className="hover:text-primary">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-ink/65">{item.excerpt}</p>
                  <Link
                    href={item.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-secondary hover:text-primary"
                  >
                    Selengkapnya
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
