/**
 * File ini digunakan untuk mengelola semua aset gambar di landing page Tokata.
 * Silakan ganti URL di bawah ini dengan URL gambar Anda sendiri.
 */

export const ASSETS = {
  // Logo Utama Tokata (Muncul di Navbar dan Footer)
  LOGO_MAIN: "https://raw.githubusercontent.com/koperasitokata/image/refs/heads/main/tokata%20hd%20hd.png",
  LOGO_SIZE: "h-20", // Contoh: h-8, h-10, h-12, h-16
  
  // Logo Koperasi Digital Tokata (Muncul besar di section Koperasi)
  LOGO_KOPERASI: "https://raw.githubusercontent.com/koperasitokata/image/refs/heads/main/icon%201.png",
  
  // Gambar Produk/Baju untuk section Tokata Clothing
  CLOTHING_IMAGE: "https://raw.githubusercontent.com/koperasitokata/image/refs/heads/main/SOLD%20OUT%20-%20HABISKaos%20kain%20cotton%2024s%2C%20desain%20kaos%20ini%20tercetak%20sempurna%20dengan%20tinta%20sablon%20pla.webp",

  // Gambar Background Hero (Dashboard)
  HERO_BG_IMAGE: "https://raw.githubusercontent.com/koperasitokata/image/refs/heads/main/tokata%20hd%20hd.png",
  HERO_BG_OPACITY: "opacity-10", // Contoh: opacity-10, opacity-20, opacity-50

  // Metadata untuk Berbagi (Social Sharing / Open Graph)
  SHARING: {
    APP_NAME: "Tokata Website",
    DESCRIPTION: "Tokata: Membangun Ekosistem Masa Depan melalui Fashion dan Koperasi Digital.",
    THUMBNAIL_URL: "https://raw.githubusercontent.com/koperasitokata/image/refs/heads/main/thumbnail%20web%20tokata.jpg", // Gambar yang muncul saat link dibagikan
  },

  // Semua teks narasi di aplikasi
  TEXT: {
    NAV: {
      CLOTHING: "Clothing",
      KOPERASI: "Koperasi Digital",
      CONTACT: "Hubungi Kami"
    },
    HERO: {
      TITLE_MAIN: "Membangun",
      TITLE_ACCENT: "Ekosistem",
      TITLE_END: "Masa Depan.",
      DESCRIPTION: "Tokata hadir sebagai wadah kreativitas dan pemberdayaan ekonomi melalui fashion eksklusif dan solusi keuangan digital yang inklusif."
    },
    CLOTHING: {
      LABEL: "Fashion Division",
      TITLE: "Tokata Clothing",
      SUBTITLE: "Lahir dari tanah Sumarorong, Mamasa, Sulawesi Barat — Tokata bukan sekadar brand, tapi sebuah cerita.",
      DESCRIPTION: "Dalam bahasa daerah Mamasa, Tokata berarti anoa — hewan endemik yang kuat, tangguh, dan penuh karakter. Filosofi inilah yang menjadi jiwa dari setiap karya yang kami hadirkan. Anoa bukan hanya simbol, tetapi representasi dari identitas: sederhana namun berdaya, tenang namun memiliki kekuatan. Tokata Clothing hadir sebagai jembatan antara kultur dan modernitas. Kami mengangkat nilai-nilai lokal, cerita-cerita dari tanah Mamasa, dan mengemasnya dalam desain yang relevan dengan gaya hidup masa kini. Setiap potongan bukan hanya tentang fashion, tetapi tentang membawa warisan ke dalam kehidupan sehari-hari. Kami percaya bahwa budaya tidak harus tinggal di masa lalu. Budaya bisa dikenakan, dirasakan, dan dibawa melangkah ke masa depan.",
      FEATURES: [
        "Tokata adalah identitas.",
        "Tokata adalah kebanggaan.",
      ]
    },
    KOPERASI: {
      TITLE: "Koperasi Digital Tokata",
      SUBTITLE: "Pemberdayaan Ekonomi Komunitas Tokata.",
      DESCRIPTION: "Koperasi Digital Tokata mendefinisikan ulang cara kita berkolaborasi secara finansial. Kami membangun kekuatan ekonomi bersama untuk masa depan yang lebih adil dan sejahtera bagi seluruh anggota.",
      FEATURE_1: {
        TITLE: "Aman & Terpercaya",
        DESC: "Sistem pengelolaan yang transparan untuk melindungi aset anggota."
      },
      FEATURE_2: {
        TITLE: "Jam Operasional",
        DESC: "Layanan tersedia setiap hari kerja sesuai jam kantor yang berlaku."
      }
    },
    FOOTER: {
      DESCRIPTION: "Tokata adalah ekosistem modern yang menggabungkan gaya hidup dan kemandirian ekonomi. Kami percaya pada kekuatan komunitas dan inovasi.",
      NAV_TITLE: "Navigasi",
      FOLLOW_TITLE: "Ikuti Kami",
      COPYRIGHT: "© 2026 Tokata Ecosystem. All rights reserved."
    }
  }
};
