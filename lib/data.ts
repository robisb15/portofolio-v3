import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiLinux,
  SiDocker,
  SiLaravel,
  SiPhp,
  SiJavascript,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

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
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E", darkColor: "#F7DF1E" },
  { name: "PHP", icon: SiPhp, color: "#777BB4", darkColor: "#8892BF" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20", darkColor: "#FF2D20" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", darkColor: "#06B6D4" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933", darkColor: "#43AC6A" },
  { name: "Express.js", icon: SiExpress, color: "#000000", darkColor: "#ffffff" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", darkColor: "#4169E1" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", darkColor: "#4479A1" },
  { name: "Git", icon: SiGit, color: "#F05032", darkColor: "#F05032" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", darkColor: "#2496ED" },
  { name: "Linux", icon: SiLinux, color: "#FCC624", darkColor: "#FCC624" },
  { name: "AWS", icon: FaAws, color: "#FF9900", darkColor: "#FF9900" },
];

export const PROJECTS = [
  {
    id: 9,
    title: "Portofolio Pribadi",
    description: "Website portofolio interaktif dan modern yang dibangun menggunakan React, Next.js, dan Tailwind CSS. Aplikasi ini memiliki fitur transisi halaman mulus dengan Framer Motion, desain fully responsive, dan mode gelap fungsional yang berfokus pada kecepatan dan performa.",
    image: "/projects/portofolio.png",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    live: "https://portofolio.robiaulia.online",
    github: "#",
  },
  {
    id: 1,
    title: "Web desa platform",
    description:
      "Platform website desa berbasis template multi-tenant, memungkinkan setiap desa memiliki website resmi sendiri untuk profil desa, berita, transparansi anggaran, dan publikasi UMKM.",
    image: "/projects/sidomulyo.png",
    tags: ["Sistem Desa", "Portal Berita", "Next.js"],
    live: "https://sidomulyo-tebo.desa.id/",
    github: "#",
  },
  {
    id: 8,
    title: "PPID Tebo",
    description:
      "Portal layanan keterbukaan informasi publik untuk pengelolaan regulasi, permohonan informasi, pengaduan, dan publikasi dokumen pemerintah secara digital.",
    image: "/projects/ppid.png",
    tags: ["Sistem Pengaduan", "Manajemen Konten", "Birokrasi"],
    live: "https://ppidv2.tebokab.go.id/",
    github: "#",
  },
  {
    id: 2,
    title: "Nakertrans Tebo",
    description:
      "Website layanan ketenagakerjaan yang menyediakan informasi pelatihan, regulasi, dan integrasi layanan lowongan kerja bagi masyarakat.",
    image: "/projects/nakertrans.png",
    tags: ["Layanan Publik", "Ketenagakerjaan", "Portal Web"],
    live: "https://nakertrans.tebokab.go.id/",
    github: "#",
  },
  {
    id: 3,
    title: "Ayunda Tebo",
    description:
      "Platform layanan administrasi kependudukan online untuk pengajuan dokumen seperti akta kelahiran, KIA, kartu keluarga, dan pelacakan proses layanan.",
    image: "/projects/ayunda.png",
    tags: ["Dukcapil", "E-Government", "Registrasi Online"],
    live: "https://ayunda.tebokab.go.id/",
    github: "#",
  },
  {
    id: 4,
    title: "SIDMD",
    description:
      "Sistem informasi layanan kesehatan desa untuk jadwal dokter masuk dusun, edukasi kesehatan masyarakat, dan distribusi informasi layanan medis.",
    image: "/projects/dmd.png",
    tags: ["Kesehatan", "Sistem Medis", "Penjadwalan"],
    live: "https://dmd.tebokab.go.id/",
    github: "#",
  },
  {
    id: 5,
    title: "SIGA",
    description:
      "Dashboard data gender dan anak untuk pengelolaan data sektoral serta mendukung penyusunan kebijakan berbasis data pemerintah daerah.",
    image: "/projects/siga.png",
    tags: ["Analitik", "Pendataan Sektoral", "Dashboard"],
    live: "https://siga.tebokab.go.id/",
    github: "#",
  },
  {
    id: 6,
    title: "SiPPULAN",
    description:
      "Aplikasi pelaporan lampu jalan berbasis lokasi yang memudahkan masyarakat mengirim laporan dan memantau tindak lanjut melalui sistem ticketing.",
    image: "/projects/lpju.png",
    tags: ["Keamanan Publik", "Pelaporan Lokasi", "Infrastruktur"],
    live: "https://lpju.tebokab.go.id/",
    github: "#",
  },
  {
    id: 7,
    title: "UMKM Tebo",
    description:
      "Marketplace digital untuk promosi dan pemasaran produk UMKM lokal guna mendukung transformasi bisnis pelaku usaha ke ranah digital.",
    image: "/projects/pasar.png",
    tags: ["Marketplace", "E-Commerce", "UMKM"],
    live: "https://pasar.tebokab.go.id/",
    github: "#",
  }
];

export const EXPERIENCE = [
  {
    type: "work",
    role: "Programmer",
    company: "Diskominfo Tebo",
    duration: "Januari 2024 - Desember 2025",
    description: "Mengembangkan aplikasi pelayanan publik dan sistem digitalisasi pemerintah Kabupaten Tebo.",
    tasks: [
      "Merancang arsitektur backend, database (Laravel) & RESTful API untuk integrasi aplikasi mobile Flutter.",
      "Mengelola infrastruktur Linux Server, jaringan, serta tracking & pemeliharaan preventif pada software dan hardware.",
      "Mengembangkan berbagai aplikasi web (internal/publik) dan menyusun dokumentasi teknis yang komprehensif."
    ]
  },
  {
    type: "education",
    role: "Teknik Informatika",
    company: "Universitas Dinamika Bangsa",
    duration: "Sep 2019 - Feb 2023",
    description: "Fakultas Ilmu Komputer <br> Jurusan Teknik Informatika. <br> IPK 3.94.",
    tasks: []
  }
];
