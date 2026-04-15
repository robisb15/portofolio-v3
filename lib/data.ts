import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiGit,
} from "react-icons/si";

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const TECH_STACK = [
  { name: "Next.js", icon: SiNextdotjs, color: "#000000", darkColor: "#ffffff" },
  { name: "React", icon: SiReact, color: "#61DAFB", darkColor: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", darkColor: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", darkColor: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#000000", darkColor: "#ffffff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", darkColor: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", darkColor: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032", darkColor: "#F05032" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Sido Mulyo",
    description: "Website resmi Pemerintahan Desa Sido Mulyo, Kecamatan Rimbo Ulu, Kabupaten Tebo. Platform digital ini memfasilitasi publikasi kegiatan rutin desa, keterbukaan informasi mengenai realisasi anggaran desa, transparansi penyelenggaraan pemerintahan, serta mewadahi produk unggulan dari UMKM binaan guna mendukung ekonomi masyarakat agar senantiasa mandiri.",
    image: "/projects/sidomulyo.png",
    tags: ["Sistem Desa", "Portal Berita", "Next.js"],
    live: "https://sidomulyo-tebo.desa.id/",
    github: "#",
  },
  {
    id: 8,
    title: "PPID Tebo",
    description: "Layanan pintu terkuat (gerbang depan) representasi dari Pejabat Pengelola Informasi dan Dokumentasi Pemerintah Kabupaten Tebo dalam memastikan realisasi UU Nomor 14 Tahun 2008 Mengenai Keterbukaan Informasi Publik. Secara transparan dan konsisten menyediakan bank regulasi terbuka, rekapitulasi pelaporan periodik, kanal perselisihan informasi untuk para kritikus masyarakat, plus form digital online di mana siapa pun bebas tanpa tekanan mengkritisi atau meraup rincian detail dokumen publik demi mendobrak sekat pelayanan kaku konvensional ke ranah tata usaha masa depan yang lebih prima secara profesional.",
    image: "/projects/ppid.png",
    tags: ["Sistem Pengaduan", "Manajemen Konten", "Birokrasi"],
    live: "https://ppidv2.tebokab.go.id/",
    github: "#",
  },
  {
    id: 2,
    title: "Nakertrans Tebo",
    description: "Portal resmi Dinas Tenaga Kerja dan Transmigrasi (Disnakertrans) Kabupaten Tebo yang dirancang khusus untuk mempermudah masyarakat dalam mengakses layanan ketenagakerjaan. Website interaktif ini mewadahi berbagai informasi pelatihan kerja terpadu, update regulasi ketransmigrasian yang solid, serta mengintegrasikan operasional aplikasi SiBUKERJA yang memudahkan para pencari kerja menemukan lowongan terbaik incaran mereka secara real-time.",
    image: "/projects/nakertrans.png",
    tags: ["Layanan Publik", "Ketenagakerjaan", "Portal Web"],
    live: "https://nakertrans.tebokab.go.id/",
    github: "#",
  },
  {
    id: 3,
    title: "Ayunda Tebo",
    description: "Platform E-Government mutakhir andalan institusi Dinas Kependudukan dan Pencatatan Sipil (Dukcapil) Kabupaten Tebo untuk memangkas jarak digitalisasi birokrasi dan administrasi kependudukan. Melalui portal satu atap Ayunda ini, masyarakat luas sudah tidak harus lagi mengantre panjang di institusi wilayah karena dapat mengurus pengajuan pencetakan Akta Kelahiran, rekap Kartu Identitas Anak (KIA) baru, pendaftaran data Kartu Keluarga, dan memantau persetujuannya sambil duduk tenang dari kenyamanan rumah.",
    image: "/projects/ayunda.png",
    tags: ["Dukcapil", "E-Government", "Registrasi Online"],
    live: "https://ayunda.tebokab.go.id/",
    github: "#",
  },
  {
    id: 4,
    title: "SIDMD",
    description: "Singkatan dari Sistem Informasi Dokter Masuk Dusun (SIDMD) yang telah merevolusioner cara-cara pelayanan kesehatan dasar di wilayah pelosok atau desa Kabupaten Tebo yang sangat membelakangi prasarana utama kesehatan (rumah sakit). Dengan platform terbuka ini, setiap komunitas masyarakat di tingkat dusun langsung tau jadwal kedatangan para dokter umum maupun dokter gigi di area desanya, melihat panduan medis ibu-anak spesifik, dan memantau pasokan logistik obat gratis demi program pemerataan kesehatan dan pengentasan gizi kurang.",
    image: "/projects/dmd.png",
    tags: ["Kesehatan", "Sistem Medis", "Penjadwalan"],
    live: "https://dmd.tebokab.go.id/",
    github: "#",
  },
  {
    id: 5,
    title: "SIGA",
    description: "Sistem Informasi Gender dan Anak yang diproyeksikan sebagai instrumen dasbor *Big Data* pengumpul wawasan analitik kompleks di Kabupaten Tebo. Aplikasi ini dengan transparan memetakan profil demografi mendalam dari berbagai multi sektor penting—sejak pendidikan, status ekonomi, hingga kepastian penegakan hukum keseharian. Analitik ini lantas dialihfungsikan menjadi acuan mutlak bagi ekosistem pemerintahan daerah di dalam menyusun berbagai kebijakan vital yang senantiasa menaungi dan responsif terhadap pembedayaan isu-isu kesejahteraan kelompok marginal di daerah setempat.",
    image: "/projects/siga.png",
    tags: ["Analitik", "Pendataan Sektoral", "Dashboard"],
    live: "https://siga.tebokab.go.id/",
    github: "#",
  },
  {
    id: 6,
    title: "SiPPULAN",
    description: "Sistem Informasi Pelaporan Pemeliharaan Lampu Jalan yang menjadi jembatan terdekat yang menghubungkan masyarakat murni dengan petugas teknis lapangan terkait dari Dinas Perkim setempat. Tanpa birokrasi ribet, apabila terdapat lampu mati, maka pengguna fasilitas cukup mengambil foto bukti penerangan yang redup lalu menandai spot persis letaknya secara geologis. Laporan yang diajukan langsung ditindak melalui workflow berjenis *ticketing issue* hingga laporan berakhir saat keadaan darurat telah berhasil sepenuhnya tertangani.",
    image: "/projects/lpju.png",
    tags: ["Keamanan Publik", "Pelaporan Lokasi", "Infrastruktur"],
    live: "https://lpju.tebokab.go.id/",
    github: "#",
  },
  {
    id: 7,
    title: "UMKM Tebo",
    description: "Sebuah katalog pasar digital berbasiskan *e-commerce* andalan yang sengaja dibangkitkan untuk mempercepat eskalasi ekonomi para produsen industri rumahan Kabupaten Tebo. Dibungkus ke dalam user interface super interaktif bagi pengguna, sistem ini secara masif memamerkan karya para pelaku lokal yang merajut kemandirian. Melingkupi olahan camilan, minuman seduh, serta aneka rempah bahan baku, sistem marketplace ini mengharapkan agar seluruh talenta UMKM beroleh tempat istimewa menuju *digital go-live* bisnis mereka secara luas.",
    image: "/projects/pasar.png",
    tags: ["Pemasaran Ekstrim", "E-Commerce", "Marketplace Lokal"],
    live: "https://pasar.tebokab.go.id/",
    github: "#",
  }
];

export const EXPERIENCE = [
  {
    role: "Programmer",
    company: "Diskominfo Tebo",
    duration: "Januari 2024 - Desember 2025",
    description: "Mengembangkan aplikasi pelayanan publik dan sistem digitalisasi pemerintah Kabupaten Tebo.",
    tasks: [
      "Merancang dan mengembangkan aplikasi web berbasis React dan Next.js",
      "Mengoptimalkan arsitektur database dan membangun integrasi API",
      "Meningkatkan performa aplikasi dan modernisasi sistem birokrasi"
    ]
  }
];
