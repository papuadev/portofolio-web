---
title: Technical Specification - Portfolio Web Architecture & Data Contracts
version: 1.4
date_created: 2026-07-26
owner: Specification Architect
tags: [frontend, architecture, react, typescript, atomic-design]
---

# Introduction

Spesifikasi teknis ini mendefinisikan batasan arsitektur (Atomic Design), struktur data (*Data Contracts*), dan integrasi eksternal (EmailJS) untuk aplikasi Personal Static Portfolio Website. Spesifikasi ini merupakan ekstensi teknis dari PRD yang telah disetujui sebelumnya.

## 1. Purpose & Scope

Spesifikasi ini menjadi acuan mutlak bagi para *engineer* saat melakukan penulisan kode. Ruang lingkupnya mencakup standarisasi aliran data antar komponen, struktur Typescript Interfaces untuk pengikatan data statis, dan konfigurasi API pihak ketiga (tanpa melibatkan struktur *backend* internal).

## 2. Definitions

- **SPA**: *Single-Page Application*.
- **Atomic Design**: Metodologi pembuatan komponen UI yang dibagi menjadi tingkatan Atoms, Molecules, Organisms, Templates, dan Pages.
- **Strict Prop Drilling**: Aturan di mana komponen tingkat bawah hanya boleh menerima data melalui argumen *props*, bukan mengimpor data secara langsung.
- **ADR**: *Architectural Decision Record*.

## 3. Requirements, Constraints & Guidelines

- **REQ-001**: Aplikasi harus secara konsisten menggunakan TypeScript untuk memastikan *type safety* pada pengikatan data dari sumber data ke komponen UI.
- **CON-001**: **Strict Prop Drilling**. Hanya tingkat komponen *Organisms* dan *Pages* yang diizinkan untuk mengimpor dari `src/data/data.ts` atau memanggil fungsi layanan dari `src/services/`. Komponen *Molecules* dan *Atoms* harus 100% bergantung pada input `props`.
- **GUD-001**: Semua nama kelas CSS untuk penataan gaya yang dinamis harus digabungkan menggunakan utilitas *merger* (seperti `cn()` yang menggabungkan Tailwind Merge + clsx) agar mencegah konflik *class* bawaan Tailwind.

## 4. Interfaces & Data Contracts

### 4.1. Portfolio Data Contract
Data proyek portofolio harus mengadopsi spesifikasi *interface* berikut untuk mematuhi aturan penyajian narasi STAR dan rendering visualisasi ikon teknologi:

```typescript
// src/types/index.ts

export interface Technology {
  name: string;
  iconClass: string; // contoh: 'devicon-react-original'
}

export interface PortfolioItem {
  id: string; // Identifier unik
  title: string;
  summary: string; // Ringkasan singkat proyek (sebelum masuk detail STAR)
  thumbnailUrl?: string; // Opsional: Jika kosong/undefined, generic placeholder yang akan dirender
  technologies: Technology[];
  star: {
    situation: string;
    task: string;
    action: string;
    result: string;
  };
  projectUrl?: string; // Tautan ke demo live (opsional)
  githubUrl?: string; // Tautan ke source code (opsional)
}
```

### 4.2. Experience & Skills Data Contract
Berdasarkan kebutuhan PRD untuk pemisahan kategori pada `Skills` dan keringanan input (MVP) pada seksi `Experience`, kontrak datanya ditetapkan sebagai berikut:

```typescript
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string; // Format string statis (misal: "Jan 2021 - Present")
  responsibilities: string[]; // Daftar tanggung jawab pekerjaan
}

export interface SkillCategory {
  title: string; // contoh: "Front-End", "Back-End"
  skills: Technology[]; // Menggunakan kontrak Technology agar mendukung ikon
}
```

### 4.3. Profile, Contact & SEO Metadata Contract
Untuk memastikan seksi Hero, About, navigasi Kontak, dan integrasi tag meta (Helmet) mematuhi prinsip *Data-Driven UI* dari PRD, strukturnya ditetapkan sebagai berikut:

```typescript
export interface HeroData {
  name: string;
  jobTitle: string;
  avatarUrl: string; // Path relatif ke foto profil
  greeting: string; // Bio pendek
  ctaText: string;
}

export interface AboutData {
  description: string[]; // Array untuk mendukung format multi-paragraf
  coreValues: string[]; // contoh: ["Attention to Detail", "Clear Communication"]
}

export interface ContactData {
  email: string; // Alamat email untuk tautan "Email Me" langsung
  socialLinks: SocialLink[];
}

export interface SiteMetadata {
  title: string; // Title tag website
  description: string; // Meta description SEO
  themeColor: string; // Meta theme color (misal: "#0066ff")
}
```

### 4.4. Testimonials & Social Links Contract
Seksi testimoni dan daftar tautan sosial (LinkedIn, GitHub) harus dikelola melalui antarmuka berikut:

```typescript
export interface TestimonialItem {
  id: string;
  name: string;
  role: string; // contoh: "CEO at XYZ Corp"
  avatarUrl?: string;
  quote: string; // Kutipan umpan balik
}

export interface SocialLink {
  platform: string; // contoh: "LinkedIn"
  url: string;
  iconClass: string; // Class untuk ikon sosial media
}
```

## 5. Acceptance Criteria

- **AC-001**: Given sebuah *Molecules* (misal: `ProjectCard`), When komponen tersebut dirender, Then ia tidak boleh secara mandiri mengimpor file data eksternal dan harus me-render seluruh nilainya murni berdasarkan *Props* yang dilempar dari *Organisms*.
- **AC-002**: Given sebuah `PortfolioItem` yang kekurangan properti `thumbnailUrl`, When *ProjectCard* merendernya, Then ia harus menampilkan blok warna (*Placeholder*) menggunakan warna primer turunan `#0066ff`.

## 6. Test Automation Strategy

- **Test Levels**: Eksekusi Manual QA difokuskan pada pengujian silang *Responsiveness* antar perangkat lunak *browser* dan pemeriksaan stabilitas transisi *Theme Toggle*.
- **CI/CD Integration**: Otomatisasi pengujian tipe statis melalui *pipeline* deployment Vercel (Pengecekan otomatis *build error* menggunakan `tsc --noEmit`).

## 7. Rationale, Context & Architecture Decisions (ADRs)

- **ADR-001**: Kontrak Data untuk variabel `technologies` sengaja diubah menjadi *Array of Objects* (bukan string array murni) agar setiap teknologi dapat menyimpan *class* CSS dari *library icon* pihak ketiga (misalnya Devicon), sehingga komponen dapat menampilkan visualisasi UI yang premium.
- **ADR-002**: Penerapan **Strict Prop Drilling** (CON-001) diambil untuk mencegah penguncian komponen (*tightly coupled*). Hal ini memastikan bahwa seluruh *Atoms* (seperti `Button`) dan *Molecules* (seperti `Card`) dari instalasi *shadcn/ui* atau *custom* tetap dalam wujud aslinya yang *reusable*, mengamankan skalabilitas untuk versi rilis 2.0.
- **ADR-003**: Tidak ada pencegahan spesifik terhadap bot (*Spam Mitigation*) pada formulir EmailJS (Keputusan MVP untuk *speed-to-market*).
- **ADR-004**: Properti `duration` pada tipe data `ExperienceItem` ditetapkan menggunakan tipe data `string` murni (Bukan objek validasi waktu) untuk memaksimalkan kepraktisan penulisan konten saat MVP, dengan penerimaan risiko bahwa *sorting* otomatis berdasarkan waktu di masa depan tidak didukung.

## 8. Dependencies & External Integrations

### Third-Party Services
- **SVC-001**: **EmailJS** - Diwajibkan untuk fungsi pengiriman email dari komponen *Contact Form*. Pengintegrasian ini membutuhkan pengisian *Service ID*, *Template ID*, dan *Public Key*. 
- **Keamanan:** Seluruh kredensial ini dilarang keras ditulis statis (*hardcoded*) di dalam file berekstensi `.ts/.js`, dan wajib diambil melalui manajemen *Environment Variables* klien (`import.meta.env.VITE_...`).

## 9. Examples & Edge Cases

```typescript
// Contoh simulasi data valid sesuai kontrak yang telah disepakati
export const mockHero: HeroData = {
  name: "Budi Santoso",
  jobTitle: "Full-Stack Web Developer",
  avatarUrl: "/assets/profile.jpg",
  greeting: "Building scalable and high-performance web solutions.",
  ctaText: "View Portfolio"
};
```

## 10. Validation Criteria
Sistem perangkat lunak hanya akan dinyatakan valid (Lolos tahap implementasi awal) jika perintah kompilasi `npm run build` yang memanggil `tsc` dapat diselesaikan pada terminal lokal *Developer* tanpa menghasilkan teguran *Type Mismatch Error* tunggal pun pada *Data Contracts*.

## 11. Related Specifications / Further Reading
- Dokumen Kebutuhan Bisnis: [doc/prd-feature-portfolio-26072026.md](file:///D:/Learn/Purwadhika/Practice/Code%20Challenge%202/cv%20web/doc/prd-feature-portfolio-26072026.md)
