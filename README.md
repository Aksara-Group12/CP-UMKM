<div align="center">

# 🏪 CP-UMKM (Company Profile Template)

**website company profile modern, super cepat, dan SEO-friendly khusus untuk UMKM Indonesia**

[![Astro](https://img.shields.io/badge/Astro-7.x-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/id/docs/Web/JavaScript)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-4CAF50?style=for-the-badge)](LICENSE)

</div>

---

## 🎯 Tentang Proyek Ini

**CP-UMKM** adalah website *company profile* yang dirancang khusus oleh **Aksara Developer** untuk membantu Usaha Mikro, Kecil, dan Menengah (UMKM) di Indonesia memiliki kehadiran digital yang profesional.

Dibangun dengan arsitektur **Static Site Generation (SSG)** menggunakan **Astro**, website ini menghasilkan output HTML murni yang sangat ringan, cepat dimuat (bahkan di koneksi internet lambat), dan ramah SEO. Konten dikelola secara terpusat, memudahkan pemilik usaha atau developer untuk mengupdate informasi tanpa menyentuh kode yang rumit.

---

## ✨ Fitur Utama

| Fitur | Manfaat untuk UMKM |
|---------|-------------|
| ⚡ **Performa Maksimal** | Skor Lighthouse 95-100. Website dimuat dalam hitungan milidetik, mengurangi kemungkinan calon pelanggan pergi. |
| 🔍 **SEO & JSON-LD Siap** | Struktur data `LocalBusiness` otomatis terpasang, membantu UMKM muncul di pencarian Google dan Google Maps. |
| 📱 **Mobile-First Design** | Tampilan responsif yang sempurna di HP, karena sebagian besar pelanggan UMKM mengakses internet via smartphone. |
| 📦 **Konten Terpusat** | Semua teks, harga, dan kontak dipisahkan di file data, memudahkan update tanpa risiko merusak tampilan. |
| 🎨 **Desain Profesional** | UI/UX modern dengan palet warna yang bersih, membangun kepercayaan (*trust*) pelanggan terhadap brand UMKM. |

---

## 🛠️ Tech Stack

| Komponen | Teknologi | Deskripsi |
| :--- | :--- | :--- |
| **Framework** | [Astro](https://astro.build/) | Static Site Generator tercepat dengan *zero JS by default* |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework untuk styling yang cepat dan konsisten |
| **Bahasa** | JavaScript / TypeScript | Logika frontend yang ringan dan type-safe |
| **Ikon** | [Lucide Icons](https://lucide.dev/) | Ikon SVG yang ringan dan modern |

---

## 📂 Struktur Proyek

```text
CP-UMKM/
├── public/                 # Aset statis (favicon, logo, robots.txt, gambar produk)
├── src/
│   ├── components/         # Komponen UI modular (Navbar, Hero, Footer, ProductCard)
│   ├── data/               # 📍 PUSAT KONTEN (Edit file di sini untuk ubah teks website)
│   │   ├── site.ts         # Nama usaha, kontak, WhatsApp, sosial media
│   │   ├── services.ts     # Daftar layanan atau produk unggulan
│   │   └── content.ts      # Tentang kami, testimoni, FAQ
│   ├── layouts/
│   │   └── Base.astro      # Shell HTML utama, meta tags SEO, dan JSON-LD
│   ├── pages/              # Routing halaman (index.astro, tentang.astro, kontak.astro)
│   └── styles/
│       └── global.css      # Design tokens dan konfigurasi Tailwind
├── astro.config.mjs        # Konfigurasi Astro
├── package.json            # Dependensi dan skrip npm
└── tsconfig.json           # Konfigurasi TypeScript
