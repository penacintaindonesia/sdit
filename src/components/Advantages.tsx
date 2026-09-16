import { BookOpen, Users, Landmark, Star, Home, Building2 } from "lucide-react";
import { advantages } from "@/data/advantages";
import { school } from "@/config/school";
import SectionLabel from "@/components/SectionLabel";
import { toneStyles } from "@/components/tones";

const icons = { BookOpen, Users, Landmark, Star, Home, Building2 };

export default function Advantages() {
  return (
    <section id="keunggulan" className="bg-[#E9F3FF] py-16 sm:py-20">
      <div className="container-x">
        <div className="reveal text-center">
          <SectionLabel align="center">Keunggulan Kami</SectionLabel>
          <h2 className="mx-auto mt-3 max-w-[22ch] font-display text-[27px] font-extrabold leading-tight text-primary sm:text-[36px]">
            Mengapa Memilih {school.name}?
          </h2>
          <span className="mx-auto mt-4 block h-1.5 w-20 rounded-full bg-yellow" aria-hidden="true" />
        </div>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((a) => {
            const Icon = icons[a.icon];
            const tone = toneStyles[a.tone];
            return (
              <li
                key={a.title}
                className="reveal group rounded-[22px] bg-white p-7 text-center shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-card"
              >
                <span className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full ${tone.solid}`}>
                  <Icon className="h-7 w-7 text-white" aria-hidden="true" />
                </span>
                <h3 className="font-display text-[17px] font-bold text-primary">{a.title}</h3>
                <p className="mx-auto mt-2 max-w-[34ch] text-[13.5px] leading-relaxed text-ink/70">
                  {a.description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
