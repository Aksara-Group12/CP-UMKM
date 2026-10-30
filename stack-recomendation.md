# Rekomendasi Tech Stack: Modern Interactive Company Profile (Inspirasi: Cuberto)

Dokumen ini merangkum arsitektur teknologi yang direkomendasikan untuk membangun website *company profile* interaktif modern berkelas dunia, cepat, dan ramah SEO untuk segmen UMKM.

---

## 1. Ringkasan Arsitektur Stack

| Lapisan | Teknologi | Keterangan & Keunggulan |
| :--- | :--- | :--- |
| **Core Framework** | **Astro** | Sangat cepat, *zero-JS by default*, arsitektur komponen modular (*Islands Architecture*). |
| **Animation Engine** | **GSAP + CustomEase** | Standar industri animasi dunia, kurva *easing* sangat halus (*smooth easing*). |
| **Custom Cursor** | **@cuberto/mouse-follower** | Kursor magnetik interaktif dengan teks dinamis (*play*, *explore*, *view*). |
| **Styling & CSS** | **SCSS + Metodologi BEM** | Terstruktur, modular, tanpa ketergantungan library utilitas raksasa, performa CSS murni. |
| **Media & Efek** | **HTML5 Video + WebGL Shaders** | Visual interaktif berkualitas tinggi tanpa membebani GPU atau memori pengguna. |
| **Deployment / CDN** | **Vercel Edge** | Distribusi CDN global, waktu muat instan (*instant load*), dan integrasi git otomatis. |

---

## 2. Penjelasan Rinci Per Lapisan

### A. Core Framework: Astro
* **Mengapa Astro?**
  * Tidak membebani browser dengan JavaScript berlebih pada halaman statis (kecepatan buka instan di koneksi seluler/HP).
  * Skor Google Lighthouse & Core Web Vitals tinggi secara alami (sangat ramah SEO lokal bagi UMKM).
  * Fleksibel: dapat memadukan komponen UI dari React, Vue, atau Vanilla JS di satu tempat.

### B. Animasi: GSAP (GreenSock) & CustomEase
* **Implementasi:**
  * Digunakan untuk *reveal animations* saat elemen masuk layar (*scroll trigger*).
  * Transisi halaman tanpa kedip (*seamless page transitions*).
  * Karakter kurva gerakan yang natural dan profesional (`cubic-bezier(.76, 0, .2, 1)`).

### C. Interaktivitas Kursor: `@cuberto/mouse-follower`
* **Implementasi:**
  * Memberi efek magnetik pada tombol CTA seperti *"Konsultasi WhatsApp"* atau *"Lihat Portofolio"*.
  * Meningkatkan rasa keterlibatan pengunjung (*engagement*) saat menjelajahi website.

### D. Styling: SCSS + BEM System
* **Implementasi:**
  * Arsitektur class rapi dan terprediksi (contoh: `.card-project__title`, `.button--primary`).
  * Mudah dikustomisasi dan dirawat dalam jangka panjang tanpa bentrok class.

### E. Media: Video Terkompresi & WebGL Ringan
* **Implementasi:**
  * Gunakan format video modern (`WebM` / `MP4` terkompresi) untuk kartu portofolio animasi.
  * Efek cairan atau distorsi gelombang menggunakan WebGL shader ringan hanya pada canvas tertentu.

### F. Hosting & Infrastruktur: Vercel Edge
* **Implementasi:**
  * Otomasi *deployment* dari GitHub.
  * Sertifikat SSL gratis, caching aset otomatis, dan uptime 99.9%.

---

## 3. Langkah Inisialisasi Proyek (Referensi Perintah)

Jika ingin memulai proyek dengan stack ini:

```bash
# Inisialisasi proyek Astro baru
npm create astro@latest ./

# Instalasi library animasi & kursor
npm install gsap @cuberto/mouse-follower sass
```