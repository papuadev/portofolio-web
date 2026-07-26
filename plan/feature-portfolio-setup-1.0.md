---
goal: Setup and Implementation of Personal Static Portfolio Web
version: 1.1
date_created: 2026-07-26
owner: Planner Architect
status: 'Planned'
tags: [feature, architecture, react, setup]
---

# Introduction

![Status: Planned](https://img.shields.io/badge/status-Planned-blue)

Dokumen ini berisi rencana implementasi langkah-demi-langkah yang deterministik untuk membangun Website Portofolio Statis menggunakan React (Vite), TypeScript, Tailwind CSS, dan shadcn/ui. Rencana ini memastikan *developer* bekerja secara bertahap tanpa menimbulkan *technical debt*.

## 1. Requirements & Constraints

- **REQ-001**: Aplikasi SPA dengan *Smooth Scrolling* dan *Theme Toggle*.
- **REQ-002**: Desain *Atomic Design* dengan Strict Prop Drilling.
- **REQ-003**: Injeksi meta tag SEO secara dinamis (*Helmet*).
- **CON-001**: Tidak boleh menggunakan *react-router-dom*. Navigasi murni berbasis *Hash* (`#`).
- **CON-002**: Resolusi *path alias* (`@/*`) wajib diinisialisasi sebelum *shadcn/ui* dipasang untuk mencegah malfungsi instalasi.

## 2. Implementation Steps

> **⚠️ EXECUTION DIRECTIVE FOR AI AGENTS:** 
> You MUST execute this plan phase by phase. You MUST run the specific testing/verification task at the end of each phase. After a phase is tested, you **MUST STOP AND WAIT** for the user's explicit approval before proceeding to the next phase.

### Implementation Phase 1: Project Initialization & Infrastructure
- GOAL-1: Menginisialisasi proyek dasar dengan Vite, merapikan konfigurasi TypeScript, dan menyetel fondasi Tailwind CSS serta shadcn/ui.

| Task     | Description                                                             | Completed | Date       |
| -------- | ----------------------------------------------------------------------- | --------- | ---------- |
| TASK-1.1 | Scaffold proyek React TS: `npm create vite@latest . -- --template react-ts` |           |            |
| TASK-1.2 | Instalasi *dependencies* dasar: Tailwind CSS, PostCSS, Autoprefixer, dan inisialisasi Tailwind. |           |            |
| TASK-1.3 | Instalasi `@types/node` dan modifikasi `vite.config.ts` serta `tsconfig.json` untuk resolusi *path alias* `@/*`. |           |            |
| TASK-1.4 | Inisialisasi *shadcn/ui* (`npx shadcn-ui@latest init`). |           |            |
| TASK-1.5 | Instalasi *lucide-react* dan *react-helmet-async*. |           |            |
| TASK-1.6 | **VERIFY**: Jalankan `npm run dev` dan pastikan tidak ada *error* kompilasi awal. |           |            |
| TASK-1.7 | **APPROVAL**: Wait for explicit user confirmation to proceed to Phase 2 |           |            |

### Implementation Phase 2: Global Configuration & Data Setup
- GOAL-2: Mengatur tema warna primer, tipografi (Font), dan memasukkan seluruh *Data Contract* dari dokumen Spesifikasi.

| Task     | Description                                                     | Completed | Date |
| -------- | --------------------------------------------------------------- | --------- | ---- |
| TASK-2.1 | Tambahkan CDN Font 'Plus Jakarta Sans' dan 'Devicon' ke `index.html`. |           |      |
| TASK-2.2 | Konfigurasi `tailwind.config.js` untuk warna `#0066ff` (*primary*) dan *font family* utama. |           |      |
| TASK-2.3 | Buat file `src/types/index.ts` dan masukkan seluruh antarmuka Typescript dari dokumen Spec (termasuk `HeroData`, dll). |           |      |
| TASK-2.4 | Buat file `src/data/data.ts` dan isi dengan *mock data* berdasarkan *interfaces* tersebut. |           |      |
| TASK-2.5 | Buat file `.env.example` untuk variabel layanan EmailJS. |           |      |
| TASK-2.6 | **VERIFY**: Jalankan `tsc --noEmit` untuk memastikan *Data Contracts* bebas dari *Type Mismatch*. |           |      |
| TASK-2.7 | **APPROVAL**: Wait for explicit user confirmation to proceed to Phase 3 |           |      |

### Implementation Phase 3: Atoms & Molecules Construction
- GOAL-3: Membangun komponen UI tingkat dasar (*Atomic Design*) yang sangat *reusable*.

| Task     | Description                                                     | Completed | Date |
| -------- | --------------------------------------------------------------- | --------- | ---- |
| TASK-3.1 | Generate komponen shadcn: `button`, `card`, `input`, `textarea`, `badge`, `sonner`, `form` (Zod + React Hook Form). |           |      |
| TASK-3.2 | Buat komponen Molecule: `ProjectCard` (merender `PortfolioItem` via *props*). |           |      |
| TASK-3.3 | Buat komponen Molecule: `SkillBadge`, `ExperienceTimelineItem`, `TestimonialCard`. |           |      |
| TASK-3.4 | **VERIFY**: Uji komponen Molecule secara individual di `App.tsx` untuk memastikan *rendering* UI (termasuk gambar *placeholder*) berjalan sempurna. |           |      |
| TASK-3.5 | **APPROVAL**: Wait for explicit user confirmation to proceed to Phase 4 |           |      |

### Implementation Phase 4: Organisms, Templates & Layout Assembly
- GOAL-4: Merangkai komponen kecil menjadi seksi-seksi utuh dan menyusun tata letak utama.

| Task     | Description                                                     | Completed | Date |
| -------- | --------------------------------------------------------------- | --------- | ---- |
| TASK-4.1 | Buat *Organism*: `Navbar` dengan logika *Hamburger Menu* yang otomatis tertutup (*collapse*) saat tautan diklik. |           |      |
| TASK-4.2 | Buat *Organism*: `HeroSection`, `AboutSection`, `SkillsSection`, `PortfolioSection`, `ExperienceSection`, `TestimonialSection`. |           |      |
| TASK-4.3 | Buat *Organism*: `ContactSection` (dengan form Zod yang di-*disable* saat *loading* & pencegahan *double-submit*). |           |      |
| TASK-4.4 | Buat *Template*: `MainLayout` dan rangkai semua *Organisms* di dalam `pages/Home.tsx`. |           |      |
| TASK-4.5 | **VERIFY**: Verifikasi responsivitas *layout* secara ketat pada ukuran layar *Mobile* (320px) hingga *Desktop*. |           |      |
| TASK-4.6 | **APPROVAL**: Wait for explicit user confirmation to proceed to Phase 5 |           |      |

### Implementation Phase 5: State, Interactivity & Final Polish
- GOAL-5: Menambahkan interaktivitas tingkat lanjut, deteksi *scroll*, dan optimasi SEO.

| Task     | Description                                                     | Completed | Date |
| -------- | --------------------------------------------------------------- | --------- | ---- |
| TASK-5.1 | Buat `components/theme-provider.tsx` dan integrasikan tombol *Theme Toggle* untuk peralihan *Light/Dark Mode*. |           |      |
| TASK-5.2 | Buat custom hook `useActiveSection` (menggunakan *Intersection Observer*) untuk *highlight* tautan Navbar yang aktif. |           |      |
| TASK-5.3 | Buat layanan `src/services/emailService.ts` untuk memproses *Contact Form* dan menampilkan *Sonner Toast*. |           |      |
| TASK-5.4 | Integrasikan `HelmetProvider` dan injeksi SEO *Meta Tags* dinamis di *root application*. |           |      |
| TASK-5.5 | **VERIFY**: Jalankan *End-to-End* testing manual (klik semua link, isi form, ganti tema) dan verifikasi fungsionalitas keseluruhan. |           |      |
| TASK-5.6 | **APPROVAL**: Wait for explicit user confirmation to finish development |           |      |

## 3. Alternatives

- **ALT-001**: Menggunakan React Router untuk navigasi antar komponen. *Ditolak* karena proyek ini dirancang sebagai *Single-Page Application* murni. Penggunaan *Hash Navigation* jauh lebih efisien untuk *smooth scrolling*.
- **ALT-002**: Menulis CSS kustom sepenuhnya tanpa *framework*. *Ditolak* karena kombinasi *Tailwind* + *shadcn/ui* mempercepat pengembangan drastis dengan standar desain *Enterprise*.

## 4. Dependencies

- **DEP-001**: `lucide-react` (Ikon UI generik).
- **DEP-002**: `react-helmet-async` (Injeksi head tags SEO).
- **DEP-003**: `@emailjs/browser` (SDK Pengiriman email kontak).
- **DEP-004**: `react-hook-form` & `zod` (Validasi form tipe-aman bawaan *shadcn*).

## 5. Files

- Semua direktori di dalam `src/` (`components/atoms`, `components/molecules`, `components/organisms`, `services`, `types`, `data`, `utils`, `hooks`).
- File konfigurasi (*root*): `tailwind.config.js`, `tsconfig.json`, `vite.config.ts`, `.env.example`, `index.html`.

## 6. Testing

- **TEST-001**: Pengecekan tipe statis (TypeScript Compiler / `tsc`).
- **TEST-002**: Pengujian responsivitas UI manual di Chrome DevTools (Mobile, Tablet, Desktop).
- **TEST-003**: Pengujian Integrasi API eksternal (EmailJS) beserta penanganan status *Loading* dan *Error*.

## 7. Risks & Assumptions

- **RISK-001**: Risiko kuota EmailJS gratis habis mendadak jika form diserang *spam bot*, dikarenakan penghilangan mekanisme *CAPTCHA* pada versi rilis MVP.
- **ASSUMPTION-001**: Node.js dan NPM telah terinstal di lingkungan pengembangan lokal (*environment*).

## 8. Related Specifications / Further Reading

- [doc/prd-feature-portfolio-26072026.md](file:///D:/Learn/Purwadhika/Practice/Code%20Challenge%202/cv%20web/doc/prd-feature-portfolio-26072026.md)
- [spec/spec-technical-portfolio.md](file:///D:/Learn/Purwadhika/Practice/Code%20Challenge%202/cv%20web/spec/spec-technical-portfolio.md)
