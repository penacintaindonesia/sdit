import { BookOpen, Star, Users, Heart, Lightbulb } from "lucide-react";
import { features } from "@/data/features";
import { toneStyles } from "@/components/tones";

const icons = { BookOpen, Star, Users, Heart, Lightbulb };

export default function FeatureBar() {
  return (
    <section aria-label="Keunggulan singkat" className="relative bg-light pb-16">
      <div className="container-x -mt-16 lg:-mt-20">
        <div className="reveal rounded-[28px] bg-white p-5 shadow-card sm:p-7">
          <ul className="no-scrollbar -mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible">
            {features.map((f) => {
              const Icon = icons[f.icon];
              const tone = toneStyles[f.tone];
              return (
                <li
                  key={f.title}
                  className="min-w-[68%] snap-center rounded-2xl px-3 py-4 text-center transition-colors hover:bg-light sm:min-w-[45%] md:min-w-0"
                >
                  <span
                    className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full ${tone.solid}`}
                  >
                    <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-[15px] font-bold text-primary">{f.title}</h3>
                  <p className="mt-1 text-[13px] leading-snug text-ink/65">{f.description}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
