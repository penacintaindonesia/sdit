"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, UserPlus } from "lucide-react";
import { school } from "@/config/school";
import { navItems } from "@/data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("#beranda");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Tandai menu aktif sesuai section yang sedang terlihat.
  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => Boolean(el));

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? "shadow-nav" : "shadow-none"
      }`}
    >
      <a
        href="#konten"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Lewati ke konten
      </a>

      <nav aria-label="Navigasi utama" className="container-x flex h-[72px] items-center justify-between gap-4">
        <Link href="#beranda" className="flex shrink-0 items-center gap-3" aria-label={`Beranda ${school.name}`}>
          <Image
            src={school.logo}
            alt={`Logo ${school.name}`}
            width={48}
            height={48}
            priority
            className="h-11 w-11 object-contain"
          />
          <span className="hidden leading-tight sm:block">
            <span className="block font-display text-[19px] font-bold text-primary">SDIT</span>
            <span className="block font-display text-[19px] font-bold leading-none text-primary">
              Pena Cinta Indonesia
            </span>
            <span className="block text-[10px] font-medium text-green-dark">{school.tagline}</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative rounded-full px-3 py-2 text-[14px] font-medium transition-colors ${
                    isActive ? "text-primary" : "text-ink/75 hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-3 -bottom-0.5 h-[3px] rounded-full bg-yellow transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={school.links.ppdb}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-yellow px-5 py-2.5 text-sm font-semibold text-ink shadow-soft transition-colors hover:bg-[#F5B800] sm:inline-flex"
          >
            <UserPlus className="h-4 w-4" aria-hidden="true" />
            Daftar Sekarang
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 text-primary lg:hidden"
          >
            {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* Navigasi mobile */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="border-t border-primary/10 bg-white lg:hidden"
      >
        <ul className="container-x flex flex-col py-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block border-b border-primary/5 py-3.5 text-[15px] font-medium text-ink/85"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li className="py-4">
            <a
              href={school.links.ppdb}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-yellow px-5 py-3.5 font-semibold text-ink"
            >
              <UserPlus className="h-4 w-4" aria-hidden="true" />
              Daftar Sekarang
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
