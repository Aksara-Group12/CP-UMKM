import { gsap } from 'gsap';
import Lenis from 'lenis';

// ==========================================
// 1. SMOOTH SCROLL (LENIS)
// ==========================================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  autoRaf: true
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ==========================================
// 2. INTERACTIVE DEVICE SHOWCASE SWITCHER
// ==========================================
const checkIconSvg = `
  <span class="bullet-icon">
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
  </span>
`;

const showcaseData = {
  katalog: {
    title: 'Katalog Produk & Checkout WhatsApp',
    desc: 'Ubah akun media sosial atau toko fisik Anda menjadi platform pemesanan instan. Pelanggan memilih varian produk, hitung ongkir otomatis, dan langsung checkout ke WhatsApp kasir tanpa potongan fee marketplace.',
    bullets: [
      'Load instan < 1 detik di koneksi 4G/3G ponsel pelanggan',
      'Integrasi tombol pesan WhatsApp langsung dengan rincian nota siap proses',
      'Manajemen varian produk & stok mudah diupdate lewat HP',
      'Tanpa potongan komisi penjualan 10% - 20% sepeser pun'
    ],
    mockupTitle: 'aksara-katalog-order.app',
    mockupBadge: 'Checkout WhatsApp Aktif',
    mockupHeader: 'Katalog Kuliner & Retail UMKM',
    mockupContent: `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <span style="font-weight:700; color:#091628; font-size:16px;">Kopi Susu Gula Aren (1 Liter)</span>
        <span style="color:#9d7b42; font-weight:800; font-size:16px;">Rp 75.000</span>
      </div>
      <div style="background:#fbf5eb; border:1px solid #ebdcc8; border-radius:12px; padding:14px; margin-bottom:16px; font-size:13px; color:#334155;">
        <strong>Pilihan Varian:</strong> Less Sugar &bull; Normal Ice &bull; Extra Shot (+Rp 5.000)
      </div>
      <div style="background:linear-gradient(135deg, #10b981, #059669); color:#fff; border-radius:12px; padding:14px; text-align:center; font-weight:700; font-size:14px; box-shadow:0 4px 14px rgba(16,185,129,0.25);">
        Kirim Rincian Pesanan ke WhatsApp Penjual
      </div>
    `
  },
  kasir: {
    title: 'Aplikasi Kasir (POS) Cloud & Multi-Gudang',
    desc: 'Tinggalkan buku catatan kas bon manual dan selisih stok yang merepotkan. Aplikasi kasir ringan berbasis cloud yang bisa dibuka dari tablet atau smartphone kasir, lengkap dengan cetak struk thermal bluetooth dan rekap omzet harian.',
    bullets: [
      'Bisa dipakai di HP / Tablet Android / iPad tanpa perlu beli alat mahal',
      'Mendukung printer thermal Bluetooth untuk cetak struk otomatis',
      'Rekap omzet otomatis per shift & per hari tanpa hitung manual',
      'Notifikasi stok menipis secara real-time ke HP pemilik'
    ],
    mockupTitle: 'aksara-pos-cloud.terminal',
    mockupBadge: 'Sinkronisasi Cloud Real-Time',
    mockupHeader: 'Terminal Kasir & Stok Gudang',
    mockupContent: `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:16px;">
        <div style="background:#fbf5eb; padding:14px; border-radius:12px; border:1px solid #ebdcc8;">
          <div style="font-size:11px; font-weight:700; color:#64748b; text-transform:uppercase;">TOTAL PENJUALAN HARI INI</div>
          <div style="font-size:22px; font-weight:800; color:#091628; margin-top:4px;">Rp 3.420.000</div>
        </div>
        <div style="background:#fbf5eb; padding:14px; border-radius:12px; border:1px solid #ebdcc8;">
          <div style="font-size:11px; font-weight:700; color:#64748b; text-transform:uppercase;">TRANSAKSI SELESAI</div>
          <div style="font-size:22px; font-weight:800; color:#3b74a3; margin-top:4px;">48 Nota</div>
        </div>
      </div>
      <div style="background:#ecfdf5; border:1px solid #10b981; border-radius:12px; padding:14px; font-size:13px; color:#065f46; font-weight:600; display:flex; align-items:center; gap:8px;">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span>Struk #1042 Tercetak Otomatis &bull; Kasir: Rian &bull; Pembayaran: QRIS Lunas</span>
      </div>
    `
  },
  compro: {
    title: 'Company Profile Kredibel & Optimasi SEO Lokal',
    desc: 'Buktikan legalitas dan profesionalisme usaha Anda di mata klien B2B, investor, atau dinas terkait. Website berkecepatan tinggi dengan optimasi Google Bisnis & Local SEO agar mudah ditemukan di wilayah kota Anda.',
    bullets: [
      'Struktur resmi dengan legalitas (NIB, PIRT, Sertifikat Halal)',
      'Optimasi Google Search lokal (contoh: "Catering Terbaik di Surabaya")',
      'Galeri portofolio & video showcase produk usaha',
      'Termasuk domain resmi .com/.co.id dan email bisnis terverifikasi'
    ],
    mockupTitle: 'pt-aksara-kreatif.com',
    mockupBadge: 'Google SEO Rank #1',
    mockupHeader: 'Portal Profil Usaha Resmi',
    mockupContent: `
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
        <div style="width:38px; height:38px; background:#091628; border-radius:10px; display:flex; align-items:center; justify-content:center; color:#cfa86e;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        </div>
        <div>
          <div style="font-weight:700; color:#091628; font-size:15px;">PT Berkah Jaya Abadi</div>
          <div style="font-size:12px; color:#10b981; font-weight:600;">Terverifikasi Legalitas NIB &amp; Sertifikasi Resmi</div>
        </div>
      </div>
      <div style="background:#fbf5eb; border:1px solid #ebdcc8; border-radius:12px; padding:14px; font-size:13px; color:#334155; line-height:1.6;">
        "Kemitraan supplier bahan baku terpercaya melayani lebih dari 150 restoran dan coffee shop di Jawa &amp; Bali."
      </div>
    `
  }
};

const tabBtns = document.querySelectorAll('.tab-btn');
const infoTitle = document.getElementById('showcase-title');
const infoDesc = document.getElementById('showcase-desc');
const infoBullets = document.getElementById('showcase-bullets');
const mockupBar = document.getElementById('mockup-url');
const mockupBadge = document.getElementById('mockup-badge');
const mockupCardTitle = document.getElementById('mockup-card-title');
const mockupDynamic = document.getElementById('mockup-dynamic-content');

tabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    tabBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const key = btn.getAttribute('data-tab');
    const data = showcaseData[key];

    if (data && infoTitle && infoDesc && mockupDynamic) {
      gsap.to([infoTitle, infoDesc, mockupDynamic], {
        opacity: 0,
        duration: 0.15,
        onComplete: () => {
          infoTitle.textContent = data.title;
          infoDesc.textContent = data.desc;
          if (infoBullets) {
            infoBullets.innerHTML = data.bullets.map((b) => `
              <li>
                ${checkIconSvg}
                <span>${b}</span>
              </li>
            `).join('');
          }
          if (mockupBar) mockupBar.textContent = data.mockupTitle;
          if (mockupBadge) mockupBadge.textContent = data.mockupBadge;
          if (mockupCardTitle) mockupCardTitle.textContent = data.mockupHeader;
          mockupDynamic.innerHTML = data.mockupContent;

          gsap.to([infoTitle, infoDesc, mockupDynamic], {
            opacity: 1,
            duration: 0.2,
            ease: 'power2.out'
          });
        }
      });
    }
  });
});

// ==========================================
// 3. FAQ ACCORDION INTERACTIVITY
// ==========================================
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach((item) => {
  const trigger = item.querySelector('.faq-trigger');
  if (trigger) {
    trigger.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach((f) => f.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  }
});

// ==========================================
// 4. NAVBAR SCROLL SHADOW
// ==========================================
const siteHeader = document.querySelector('.site-header');
if (siteHeader) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  });
}
