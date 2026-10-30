import { gsap } from 'gsap';
import MouseFollower from 'mouse-follower';
import Lenis from 'lenis';

// ==========================================
// 1. CUBERTO OFFICIAL SMOOTH SCROLL (LENIS)
// ==========================================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  smoothWheel: true,
  autoRaf: true
});

// Sync Lenis with GSAP ScrollTrigger if needed
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// ==========================================
// 2. CUBERTO OFFICIAL MOUSE FOLLOWER
// ==========================================
MouseFollower.registerGSAP(gsap);

const cursor = new MouseFollower({
  speed: 0.6,
  skewing: 3,
  stickDelta: 0.15
});

// Magnetic Buttons
const magneticElements = document.querySelectorAll('.magnetic-btn');
magneticElements.forEach((btn) => {
  btn.addEventListener('mousemove', (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, {
      x: x * 0.35,
      y: y * 0.35,
      duration: 0.3,
      ease: 'power2.out'
    });
  });

  btn.addEventListener('mouseleave', () => {
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.4)'
    });
  });
});

// ==========================================
// 3. INTERACTIVE DEVICE SHOWCASE SWITCHER
// ==========================================
const showcaseData = {
  katalog: {
    title: 'Katalog Produk & Checkout WhatsApp',
    desc: 'Ubah akun media sosial atau toko fisik Anda menjadi platform pemesanan instan. Pelanggan memilih varian produk, hitung ongkir otomatis, dan langsung checkout ke WhatsApp kasir tanpa potongan fee marketplace.',
    bullets: [
      'Load instan < 1 detik di koneksi 4G/3G ponsel',
      'Integrasi tombol pesan WhatsApp langsung dengan rincian order',
      'Manajemen varian produk & stok mudah lewat HP',
      'Tanpa biaya komisi penjualan sepeser pun'
    ],
    mockupTitle: 'aksara-katalog-order.app',
    mockupBadge: 'Checkout WhatsApp Aktif',
    mockupHeader: 'Katalog Kuliner & Retail UMKM',
    mockupContent: `
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <span style="font-weight:700; color:#faebd2;">Kopi Susu Gula Aren (1 Liter)</span>
        <span style="color:#cfa86e; font-weight:800;">Rp 75.000</span>
      </div>
      <div style="background:#0e2742; border:1px solid #3b74a3; border-radius:12px; padding:12px; margin-bottom:14px; font-size:13px; color:#95acc0;">
        ⚡ Pilihan Varian: Less Sugar • Normal Ice
      </div>
      <div style="background:linear-gradient(135deg, #10b981, #059669); color:#fff; border-radius:10px; padding:12px; text-align:center; font-weight:700; font-size:13px;">
        💬 Kirim Rincian Pesanan ke WhatsApp Penjual
      </div>
    `
  },
  kasir: {
    title: 'Aplikasi Kasir (POS) & Multi-Gudang',
    desc: 'Lupakan catatan buku kas bon dan selisih stok manual. Aplikasi kasir ringan berbasis cloud yang bisa dibuka dari tablet atau smartphone kasir, lengkap dengan cetak struk bluetooth dan rekap omzet harian.',
    bullets: [
      'Bisa dipakai di HP / Tablet Android / iPad',
      'Mendukung printer thermal Bluetooth untuk cetak struk',
      'Rekap omzet otomatis per shift & per hari',
      'Notifikasi stok menipis secara real-time'
    ],
    mockupTitle: 'aksara-pos-cloud.terminal',
    mockupBadge: 'Sinkronisasi Cloud Real-Time',
    mockupHeader: 'Terminal Kasir & Stok Gudang',
    mockupContent: `
      <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:16px;">
        <div style="background:#0e2742; padding:12px; border-radius:10px; border:1px solid rgba(86,155,209,0.2);">
          <div style="font-size:11px; color:#95acc0;">TOTAL PENJUALAN HARI INI</div>
          <div style="font-size:20px; font-weight:800; color:#cfa86e;">Rp 3.420.000</div>
        </div>
        <div style="background:#0e2742; padding:12px; border-radius:10px; border:1px solid rgba(86,155,209,0.2);">
          <div style="font-size:11px; color:#95acc0;">TRANSAKSI SELESAI</div>
          <div style="font-size:20px; font-weight:800; color:#569bd1;">48 Nota</div>
        </div>
      </div>
      <div style="background:#081829; border:1px dashed #cfa86e; border-radius:10px; padding:12px; font-size:12px; color:#faebd2;">
        ✓ Struk #1042 Tercetak Otomatis • Kasir: Andi • Status: Lunas (QRIS)
      </div>
    `
  },
  compro: {
    title: 'Company Profile Kredibel & SEO Lokal',
    desc: 'Buktikan legalitas dan profesionalisme usaha Anda di mata klien B2B, investor, atau dinas terkait. Website berkecepatan tinggi dengan optimasi Google Bisnis & Local SEO agar mudah dicari di wilayah kota Anda.',
    bullets: [
      'Struktur resmi dengan legalitas (NIB, PIRT, Sertifikat Halal)',
      'Optimasi Google Search lokal (contoh: "Catering Terbaik di Surabaya")',
      'Galeri portofolio & video showcase usaha',
      'Termasuk domain resmi .com/.co.id dan email bisnis'
    ],
    mockupTitle: 'pt-aksara-kreatif.com',
    mockupBadge: 'Google SEO Rank #1',
    mockupHeader: 'Portal Profil Usaha Resmi',
    mockupContent: `
      <div style="display:flex; align-items:center; gap:12px; margin-bottom:16px;">
        <div style="width:36px; height:36px; background:#cfa86e; border-radius:50%; display:flex; align-items:center; justify-content:center; color:#071524; font-weight:900;">✓</div>
        <div>
          <div style="font-weight:700; color:#fff; font-size:14px;">PT Berkah Jaya Abadi</div>
          <div style="font-size:11px; color:#10b981;">● Terverifikasi Legalitas NIB & Sertifikasi Resmi</div>
        </div>
      </div>
      <div style="background:#0e2742; border-radius:10px; padding:14px; font-size:13px; color:#faebd2;">
        "Kemitraan supplier bahan baku terpercaya melayani lebih dari 150 restoran di Jawa & Bali."
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

    if (data) {
      gsap.to([infoTitle, infoDesc, mockupDynamic], {
        opacity: 0,
        y: -6,
        duration: 0.18,
        onComplete: () => {
          infoTitle.textContent = data.title;
          infoDesc.textContent = data.desc;
          infoBullets.innerHTML = data.bullets.map((b) => `
            <li>
              <span class="bullet-icon">✓</span>
              <span>${b}</span>
            </li>
          `).join('');
          mockupBar.textContent = data.mockupTitle;
          mockupBadge.textContent = data.mockupBadge;
          mockupCardTitle.textContent = data.mockupHeader;
          mockupDynamic.innerHTML = data.mockupContent;

          gsap.to([infoTitle, infoDesc, mockupDynamic], {
            opacity: 1,
            y: 0,
            duration: 0.25,
            ease: 'power2.out'
          });
        }
      });
    }
  });
});

// ==========================================
// 4. INTERACTIVE UMKM BUDGET CALCULATOR
// ==========================================
let currentType = 'katalog';
let selectedAddons = new Set(['wa', 'domain']);

const basePrices = {
  katalog: { name: 'Katalog Digital & WA Order', base: 1450000, days: '3-5 Hari Kerja' },
  kasir: { name: 'Aplikasi POS Kasir & Stok', base: 2450000, days: '5-7 Hari Kerja' },
  compro: { name: 'Company Profile Profesional', base: 1750000, days: '3-4 Hari Kerja' },
  custom: { name: 'Sistem Kustom UMKM', base: 4500000, days: '10-14 Hari Kerja' }
};

const addonPrices = {
  wa: { name: 'Integrasi WhatsApp Checkout', price: 0 },
  domain: { name: 'Domain .COM / .ID + Hosting 1 Thn', price: 350000 },
  seo: { name: 'Optimasi Google Search & Maps', price: 400000 },
  training: { name: 'Bimbingan & Video Tutorial Staf', price: 250000 }
};

const typeChips = document.querySelectorAll('.chip-type');
const addonChips = document.querySelectorAll('.chip-addon');
const calcTotal = document.getElementById('calc-total');
const calcTimeline = document.getElementById('calc-timeline');
const calcFeaturesList = document.getElementById('calc-features-list');
const calcWaBtn = document.getElementById('calc-wa-btn');

function updateCalculator() {
  const base = basePrices[currentType];
  let total = base.base;
  const features = [base.name];

  selectedAddons.forEach((key) => {
    const addon = addonPrices[key];
    total += addon.price;
    features.push(addon.name);
  });

  const formattedTotal = 'Rp ' + total.toLocaleString('id-ID');
  if (calcTotal) calcTotal.textContent = formattedTotal;
  if (calcTimeline) calcTimeline.textContent = base.days;

  if (calcFeaturesList) {
    calcFeaturesList.innerHTML = features.map(f => `<li>✓ ${f}</li>`).join('');
  }

  if (calcWaBtn) {
    const textMsg = encodeURIComponent(
      `Halo Aksara Inovatif! Saya ingin konsultasi pembuatan solusi digital:\n\n` +
      `• Paket: ${base.name}\n` +
      `• Fitur Tambahan: ${Array.from(selectedAddons).map(k => addonPrices[k].name).join(', ')}\n` +
      `• Estimasi Biaya: ${formattedTotal}\n\n` +
      `Bisa diskusi lebih lanjut mengenai alur pengerjaannya? Terima kasih!`
    );
    calcWaBtn.href = `https://wa.me/6281234567890?text=${textMsg}`;
  }
}

typeChips.forEach(chip => {
  chip.addEventListener('click', () => {
    typeChips.forEach(c => c.classList.remove('active'));
    chip.classList.add('active');
    currentType = chip.getAttribute('data-value');
    updateCalculator();
  });
});

addonChips.forEach(chip => {
  chip.addEventListener('click', () => {
    const val = chip.getAttribute('data-value');
    if (selectedAddons.has(val)) {
      selectedAddons.delete(val);
      chip.classList.remove('active');
    } else {
      selectedAddons.add(val);
      chip.classList.add('active');
    }
    updateCalculator();
  });
});

updateCalculator();

// Navbar scroll styling
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.style.background = 'rgba(7, 21, 36, 0.94)';
    navbar.style.borderColor = 'rgba(207, 168, 110, 0.4)';
  } else {
    navbar.style.background = 'rgba(7, 21, 36, 0.85)';
    navbar.style.borderColor = 'rgba(207, 168, 110, 0.25)';
  }
});
