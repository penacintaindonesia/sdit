# SDIT Pena Cinta Indonesia — Landing Page

Next.js 14 (App Router) + TypeScript + Tailwind CSS + lucide-react.
Seluruh data sekolah bersifat **config-driven**: tidak ada link, alamat, atau nomor WhatsApp yang di-hardcode di komponen.

## Menjalankan

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck  # cek TypeScript
npm run build      # build produksi
```

---

## A. Struktur folder

```
public/
  assets/                 <- semua gambar & logo (ganti isinya, jangan ubah namanya)
src/
  app/
    layout.tsx            <- metadata SEO, Open Graph, Twitter, font
    page.tsx              <- susunan section homepage
    globals.css
  components/
    Navbar.tsx  Hero.tsx  FeatureBar.tsx  About.tsx  Advantages.tsx
    Programs.tsx  PPDB.tsx  News.tsx  Testimonials.tsx  Contact.tsx
    Footer.tsx  Button.tsx  SectionLabel.tsx  Decor.tsx  Reveal.tsx  tones.ts
  config/
    school.ts             <- DATA UTAMA SEKOLAH
    ppdb.ts               <- DATA PPDB
  data/
    programs.ts  news.ts  testimonials.ts  advantages.ts  features.ts  navigation.ts
tailwind.config.ts  next.config.mjs  tsconfig.json
```

## B. File yang perlu Anda edit

| File | Isinya |
|---|---|
| `src/config/school.ts` | nama, tagline, alamat, kontak, sosial media, semua link |
| `src/config/ppdb.ts` | tahun ajaran, link pendaftaran, jadwal PPDB |
| `src/data/news.ts` | berita & kegiatan |
| `src/data/programs.ts` | program unggulan |
| `src/data/testimonials.ts` | testimoni |
| `public/assets/` | logo dan seluruh foto |

## C. Daftar placeholder yang harus diisi

Cari semua teks berformat `[ISI ...]` (VS Code: cari `[ISI`).

`src/config/school.ts`
- `[ISI ALAMAT SEKOLAH]`, `[ISI KELURAHAN/DESA]`, `[ISI KECAMATAN]`, `[ISI KABUPATEN/KOTA]`, `[ISI PROVINSI]`, `[ISI KODE POS]`
- `[ISI NOMOR WHATSAPP]`, `[ISI NOMOR TELEPON]`, `[ISI EMAIL SEKOLAH]`
- `[ISI LINK INSTAGRAM]`, `[ISI LINK FACEBOOK]`, `[ISI LINK YOUTUBE]`, `[ISI LINK TIKTOK]`
- `[ISI LINK GOOGLE FORM PPDB]`, `[ISI LINK GOOGLE MAPS]`, `[ISI LINK WHATSAPP]`, `[ISI LINK VIDEO PROFIL]`
- `[ISI DOMAIN WEBSITE]`

`src/config/ppdb.ts`
- `[ISI LINK PPDB]`, `[ISI NOMOR WHATSAPP]`, `[ISI TANGGAL]` (4 buah)

`public/assets/` — semua gambar saat ini masih placeholder bertuliskan "GANTI GAMBAR INI".

## D. Cara mengganti logo

Timpa file `public/assets/logo-sdit.png` dengan logo resmi.
- Format PNG latar transparan, ukuran disarankan 512×512 px.
- Nama file jangan diubah; komponen membaca dari `school.logo`.
- Logo dirender dengan `object-contain`, jadi rasio aslinya tidak akan gepeng atau terpotong.
- Favicon: timpa `public/assets/favicon.png` (64×64 px).

## E. Cara mengganti link PPDB

`src/config/school.ts` → `links.ppdb` (dipakai tombol "Daftar Sekarang" di navbar, menu mobile, dan section PPDB).
Untuk teks/jadwal PPDB, edit `src/config/ppdb.ts`.

## F. Cara mengganti alamat

`src/config/school.ts` → objek `address`. Fungsi `fullAddress()` otomatis menggabungkannya untuk section Kontak dan Footer.
Link peta: `links.maps` (salin dari Google Maps → Bagikan → Sematkan/Salin tautan).

## G. Cara mengganti nomor WhatsApp

Dua tempat di `src/config/school.ts`:
- `contact.whatsapp` → nomor yang **ditampilkan**, contoh `0812-3456-7890`
- `links.whatsapp` → link yang **diklik**, format `https://wa.me/628123456789` (pakai 62, tanpa 0 dan tanpa tanda baca)

## H. Cara mengganti Instagram / TikTok / YouTube / Facebook

`src/config/school.ts` → objek `socialMedia`. Isi dengan URL lengkap (`https://instagram.com/namaakun`).
Muncul otomatis di section Kontak dan Footer.

## I. Cara menambah berita

Buka `src/data/news.ts`, tambahkan satu objek di **paling atas** array `news`:

```ts
{
  slug: "judul-berita-baru",
  title: "Judul Berita Baru",
  date: "1 Juni 2026",
  category: "Kegiatan",
  excerpt: "Ringkasan singkat satu sampai dua kalimat.",
  image: "/assets/news-5.jpg",   // taruh fotonya di public/assets/
  href: "/berita/judul-berita-baru",
},
```

Homepage menampilkan 4 kartu pertama. Untuk membatasi jumlahnya, ubah `news.map` menjadi `news.slice(0, 4).map` di `src/components/News.tsx`.

## J. Cara mengganti foto hero

Timpa `public/assets/hero-school.jpg` (disarankan 1600×900 px, foto gedung/halaman sekolah, landscape).
Path-nya ada di `school.heroImage`. Foto "Tentang Kami": `public/assets/about-school.jpg` (`school.aboutImage`).

---

## Catatan hasil pengecekan

- `npm run typecheck` dan `npm run build` perlu dijalankan di komputer Anda (mesin tempat kode ini dibuat tidak punya akses internet untuk `npm install`).
- Tidak ada lorem ipsum; seluruh copy memakai teks final dari brief.
- Tidak ada teks hardcode untuk link/alamat/WhatsApp di komponen mana pun.
- Semua gambar sudah ada file placeholder-nya, jadi tidak ada broken image saat pertama dijalankan.
- Ilustrasi karakter siswa pada referensi tidak disertakan (aset berhak cipta). Bila Anda punya file PNG transparan karakter tersebut, taruh di `public/assets/hero-students.png` lalu tambahkan `<Image>` di kolom kanan `Hero.tsx` — tempatnya sudah disiapkan.
