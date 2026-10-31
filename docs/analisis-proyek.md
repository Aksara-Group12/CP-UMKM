# Laporan Analisis Proyek: CP-UMKM (Aksara Developer)

> **Dokumen Analisis Arsitektur, Implementasi, dan Rencana Pengembangan**  
> Dibuat pada: 30 Oktober 2026  
> Pengembang: Aksara Developer

---

## 1. Ringkasan Eksekutif (Executive Summary)

**CP-UMKM** (*Company Profile UMKM*) adalah template landing page dan profil bisnis interaktif berkecepatan tinggi yang dikembangkan oleh **Aksara Developer**. Proyek ini ditujukan khusus untuk Usaha Mikro, Kecil, dan Menengah (UMKM) di Indonesia guna membangun kehadiran digital profesional tanpa harus membayar komisi pihak ketiga (*zero platform fee*).

Website ini memadukan estetika desain agensi kreatif kelas dunia (terinspirasi gaya *Cuberto* dengan tema *Dark Spartan & Antique Gold*) dengan fungsi bisnis riil UMKM, seperti:
1. **Showroom Produk/Layanan Interaktif**
2. **Kalkulator Anggaran & Biaya Investasi Digital**
3. **Konversi Langsung ke WhatsApp Chat** dengan pesan otomatis terstruktur.

---

## 2. Analisis Arsitektur & Tech Stack

### 2.1 Stack Teknologi Aktual (Installed & Configured)

| Lapisan | Teknologi | Versi | Peran & Implementasi |
| :--- | :--- | :--- | :--- |
| **Core Framework** | [Astro](https://astro.build/) | `^7.4.4` | Static Site Generation (SSG), arsitektur modular, fast build time, output HTML efisien. |
| **Bundler & Tooling** | [Vite](https://vitejs.dev/) | `^8.3.5` | Bundler modul modern bawaan ekosistem Astro. |
| **Smooth Scrolling** | [Lenis](https://lenis.darkroom.engineering/) | `^1.3.27` | Pengalaman scroll halus (*inertial smooth scrolling*). |
| **Animation Engine** | [GSAP](https://greensock.com/) | `^3.15.0` | Transisi tab showroom, efek tombol magnetik, dan micro-interaction. |
| **Custom Cursor** | [mouse-follower](https://github.com/cuberto/mouse-follower) | `^1.2.1` | Kursor dinamis adaptif dengan label teks kontekstual (*AKSARA, LIHAT, DEMO, HITUNG, CHAT WA*). |
| **Pre-processor** | [Sass / SCSS](https://sass-lang.com/) | `^1.107.0` | Terpasang pada dependensi paket (`package.json`). |
| **Styling** | Vanilla CSS Terstruktur | Custom | Berkas `src/style.css` (850 baris) dengan sistem CSS Custom Properties komprehensif. |
| **Typography** | Plus Jakarta Sans | Google Fonts | Webfont modern dan bersih (weights: 300–900). |

---

## 3. Struktur Proyek & Analisis Komponen

### 3.1 Peta Direktori Aktual

```text
CP-UMKM/
├── .astro/                 # Cache & metadata build Astro
├── docs/                   # Dokumentasi teknis proyek
│   ├── stack-recomendation.md
│   └── analisis-proyek.md  # (Dokumen ini)
├── src/
│   ├── components/         # Komponen UI modular
│   │   ├── Navbar.astro         # Navigasi melayang dengan efek glassmorphism & rolling text
│   │   ├── Hero.astro           # Value proposition utama, CTA, dan statistik metriks
│   │   ├── Showroom.astro       # Tab interaktif peragaan fitur (Katalog, POS, Compro)
│   │   ├── BentoServices.astro  # Layout bento grid 4 pilar layanan
│   │   ├── Calculator.astro     # Kalkulator estimasi biaya UMKM
│   │   └── Footer.astro         # Penutup, call-to-action raksasa, dan copyright
│   ├── layouts/
│   │   └── Layout.astro         # Shell HTML dasar, font, import style & main.js
│   ├── pages/
│   │   └── index.astro          # Entry point utama halaman
│   ├── main.js                  # Logika interaktivitas client-side (GSAP, Lenis, Kalkulator)
│   └── style.css                # Style terpusat & variabel desain tema Spartan/Gold
├── astro.config.mjs        # Konfigurasi runtime Astro
├── package.json            # Daftar dependensi & skrip run/build
└── README.md               # Ringkasan informasi proyek
```

### 3.2 Analisis Rinci Komponen `src/`

1. **`src/layouts/Layout.astro`**:
   - Menyediakan kerangka dasar HTML5, preconnect ke Google Fonts, dan penyisipan meta title serta description standar.
   - Menyertakan `src/style.css` dan skrip `src/main.js` di bagian akhir `<body>`.

2. **`src/components/Navbar.astro`**:
   - Desain melayang (*floating*) dengan efek latar buram (*glassmorphism*).
   - Dilengkapi logo Spartan SVG kustom, menu tautan dengan efek *rolling text*, dan tombol CTA konsultasi cepat.

3. **`src/components/Hero.astro`**:
   - Memuat penawaran nilai (*value proposition*) yang kuat dengan kontras aksen emas (`#cfa86e`) dan biru baja (`#569bd1`).
   - Terdapat 4 indikator kredibilitas UMKM: Kepemilikan 100%, Kecepatan < 1 detik, Siap dalam 3-7 hari, dan Garansi 24/7.

4. **`src/components/Showroom.astro`**:
   - Menggunakan mockup perangkat digital interaktif.
   - Mendukung peralihan data tab (Katalog WA, POS Kasir, dan Company Profile) secara mulus via event listener di `main.js`.

5. **`src/components/BentoServices.astro`**:
   - Mengadopsi tren *Bento Grid UI* modern (kolom 8 + 4) untuk mengelompokkan layanan: Toko Online WA, POS Kasir, Company Profile Lokal, dan Sistem Operasional Kustom.

6. **`src/components/Calculator.astro`**:
   - Fitur unggulan interaktif: calon klien UMKM dapat memilih jenis produk dan menambah fasilitas tambahan (Domain, SEO Lokal, Bimbingan Staf).
   - Secara dinamis mengkalkulasi estimasi biaya, estimasi durasi pengerjaan, dan membuat tautan pemesanan WhatsApp yang sudah ter-encode rinciannya.

7. **`src/components/Footer.astro`**:
   - CTA berukuran besar untuk memandu calon klien langsung membuka kontak WhatsApp, lengkap dengan hak cipta dan navigasi balik.

8. **`src/main.js`**:
   - Inisialisasi Lenis smooth scrolling dan perputaran `requestAnimationFrame`.
   - Konfigurasi `MouseFollower` (mengaitkan plugin dengan GSAP).
   - Efek magnetik pada kelas `.magnetic-btn` saat kursor mendekat.
   - Manajemen *state* kalkulator harga dan generator tautan WhatsApp otomatis.
   - Dynamic navbar background opacity saat halaman digulir melampaui 60px.

---

## 4. Evaluasi Kelebihan (Strengths)

1. **User Experience (UX) Sangat Halus & Mewah**:
   Kombinasi *Lenis Smooth Scroll*, *MouseFollower*, dan *Magnetic Elements* memberikan sensasi web modern kelas penghargaan Awwwards / FWA, yang jarang ditemukan pada website UMKM pada umumnya.
2. **Conversion-Oriented (Fokus Konversi Penjualan)**:
   Setiap interaksi diarahkan secara elegan ke WhatsApp (`wa.me`) dengan pesan otomatis yang rapi dan terstruktur, mengurangi friksi calon pelanggan dalam bertanya.
3. **Desain Sistem & Identitas Visual Terpadu**:
   Penggunaan palet warna Spartan Navy (`#071524`, `#0f2a48`) dipadukan aksen Antique Gold (`#cfa86e`) dan Steel Blue (`#569bd1`) memberikan kesan kokoh, dapat dipercaya, dan eksklusif.
4. **Ringan & Cepat Tanpa Bloatware Framework Berat**:
   Meskipun memiliki interaksi visual yang kaya, website ini tidak menggunakan runtime JavaScript yang membebani (seperti full React/Angular runtime), melainkan Vanilla JS + GSAP di atas fondasi Astro SSG.

---

## 5. Temuan Kesenjangan (Gap Analysis & Discrepancies)

Berdasarkan perbandingan antara dokumentasi `README.md` dan implementasi kode aktual di `src/`, ditemukan beberapa perbedaan:

| Aspek | Disebutkan di `README.md` | Implementasi Riil di Kode | Status & Catatan |
| :--- | :--- | :--- | :--- |
| **CSS Framework** | Tailwind CSS v4 | Berkas `src/style.css` (Vanilla CSS murni 850 baris) | Tidak ada dependensi Tailwind di `package.json` maupun impor utilitas Tailwind. Menggunakan custom CSS variables. |
| **Ikon** | Lucide Icons | Inline SVG manual di tiap komponen `.astro` | Lucide Icons belum diinstal sebagai package. |
| **Separasi Data** | Folder `src/data/` (`site.ts`, `services.ts`, `content.ts`) | Data masih tercampur (*hardcoded*) di komponen dan `src/main.js` | Belum ada pemisahan data konten. |
| **Aset Statis** | Folder `public/` (favicon, logo, robots.txt) | Direktori `public/` belum dibuat | Belum ada favicon, manifest, robots.txt, dan OpenGraph image. |
| **Konfigurasi TS** | `tsconfig.json` | Belum ada `tsconfig.json` | Proyek berjalan dalam mode JavaScript standar tanpa type-checking TypeScript. |
| **SEO & Schema** | JSON-LD `LocalBusiness` | Belum ada script JSON-LD di `Layout.astro` | Meta tag baru sebatas title dan description dasar. |
| **Nomor Kontak WA** | Nomor bisnis resmi | Placeholder `6281234567890` | Perlu dipusatkan ke konfigurasi agar mudah diubah. |

---

## 6. Rekomendasi & Rencana Tindak Lanjut (Action Plan)

Untuk menyempurnakan proyek CP-UMKM menuju status *production-ready*, disarankan melakukan perbaikan bertahap berikut:

### Fase 1: Sentralisasi Data Konten (Refactoring Data)
- Buat direktori `src/data/` dan pindahkan data berikut:
  - `site.js` / `site.ts`: Nomor WhatsApp, nama entitas bisnis, akun sosial media, alamat.
  - `showcase.js`: Data tab showcase (judul, deskripsi, poin keunggulan, markup preview).
  - `pricing.js`: Data paket dasar kalkulator dan harga fitur tambahan.
- Manfaat: Pemilik UMKM atau developer dapat mengubah harga, nomor WA, dan layanan hanya dalam satu file tanpa menyentuh kode UI.

### Fase 2: Penguatan SEO & Metadata
- Tambahkan Schema Markup JSON-LD tipe `LocalBusiness` / `ProfessionalService` di `src/layouts/Layout.astro`.
- Tambahkan meta tag Open Graph (`og:title`, `og:description`, `og:image`, `og:url`) dan Twitter Card.
- Buat direktori `public/` dan sediakan:
  - `favicon.ico` dan `favicon.svg`
  - `robots.txt`
  - `sitemap.xml` (dapat menggunakan integrasi `@astrojs/sitemap`).

### Fase 3: Sinkronisasi Dokumentasi
- Sesuaikan `README.md` dengan stack aktual (menjelaskan bahwa proyek saat ini menggunakan Custom SCSS/CSS Tokens + GSAP + Lenis + MouseFollower, bukan Tailwind).
- Atau, jika ingin menerapkan Tailwind CSS v4, jadwalkan instalasi `@tailwindcss/vite` atau integrasi Astro terkait.

### Fase 4: Optimasi Aksesibilitas & Responsivitas Mobile
- Pastikan kursor kustom (`MouseFollower`) otomatis dinonaktifkan pada perangkat sentuh (*touch screen/mobile*) untuk mencegah anomali interaksi di smartphone.
- Pastikan kontras warna teks dan tag navigasi memenuhi standar WCAG AA.

---

## 7. Kesimpulan

Proyek **CP-UMKM** memiliki fondasi estetika visual dan konsep interaksi yang sangat kuat di atas rata-rata website UMKM Indonesia. Fitur **Kalkulator Biaya Investasi** dan **Showroom Interaktif** memberikan daya tarik konversi tinggi. 

Dengan melakukan sentralisasi data konten ke folder `src/data/`, melengkapi aset statis SEO di `public/`, dan menyelaraskan dokumentasi dengan kode aktual, proyek ini akan menjadi template standar industri yang sangat berdaya saing bagi Aksara Developer dalam melayani pasar UMKM.

