---
title: Project Discovery & Architecture Summary
status: DRAFT (Phase 0) - FINALIZED
date_analyzed: 2026-07-26
---

# Project Discovery Summary

## 1. Project Overview

Proyek ini adalah pembuatan sebuah Website Personal Portfolio berhalaman tunggal (single-page layout dengan *smooth scrolling* antar seksi). Tujuannya adalah untuk menampilkan profil, keahlian, pengalaman kerja, serta proyek portofolio dari seorang Full-Stack Web Developer. 

Desain antarmuka (UI) akan dirancang premium dengan tipografi **Plus Jakarta Sans**, selaras dengan warna logo primer `#0066ff`, dan memiliki dukungan penuh untuk **Light/Dark Mode**. Konten awal akan dikelola terpusat menggunakan struktur data di `data.ts`.

## 2. Technology Stack & Infrastructure

- **Core Framework/Language:** React (via Vite) dengan **TypeScript**.
- **Styling & UI Library:** Tailwind CSS dan shadcn/ui.
- **Typography:** Plus Jakarta Sans (Google Fonts).
- **Animations:** Utilitas transisi dan animasi bawaan dari Tailwind CSS & shadcn/ui.
- **State Management & Context:** React Context API (untuk manajemen tema Dark/Light).
- **SEO & Meta Tags:** `react-helmet-async` untuk SEO dan optimasi tag `<head>`.
- **Form Integration:** **EmailJS** untuk pengiriman form kontak tanpa *backend*.
- **Infrastructure/Deployment:** Vercel.
- **Design Pattern:** Atomic Design (Atoms, Molecules, Organisms, Templates, Pages).

## 3. Current Architecture Assessment

Proyek ini dimulai dari awal (Greenfield) dan arsitekturnya dirancang dari perspektif stabilitas dan kemudahan *maintenance*:

- **Strengths:** 
  - Pemisahan data UI ke dalam file `data.ts` memastikan kode bersih dari *hardcoding* dan memudahkan pembaruan konten secara manual.
  - Penggunaan **TypeScript** memberikan *type-safety*, terutama untuk memastikan struktur metode STAR pada portofolio dipatuhi dengan ketat.
  - Pendekatan animasi menggunakan *Tailwind/shadcn utility classes* (tanpa *library* tambahan seperti Framer Motion) menjaga ukuran *bundle* tetap kecil dan performa tetap tinggi.
- **Tech Debt & Risks:** 
  - Kinerja *smooth scrolling* harus dikelola dengan baik.
  - Kredensial **EmailJS** (Public Key, Service ID, Template ID) harus diamankan dengan *Environment Variables* (`.env`) agar tidak bocor ke publik.

## 4. Key Workflows & Domain Logic

1. **Theme Switching Workflow:** Pengguna menekan tombol Toggle -> `ThemeContext` merespons -> Mengubah kelas `dark` pada elemen HTML root -> Menyimpan preferensi di `localStorage`.
2. **Dynamic Data Binding Workflow:** Data *dummy* di `src/data/data.ts` -> Diimpor oleh *Organisms* -> Memetakan (*mapping*) data ke *Molecules* yang menerima *props* ter-diketik menggunakan TypeScript.
3. **Contact Form Workflow:** Pengguna mengisi form -> Validasi di *client-side* -> Memanggil *service* eksternal `EmailJS` di folder `services/` -> Menampilkan notifikasi sukses/gagal melalui *Toast/Snackbar*.
4. **SEO Management Flow:** Komponen halaman dibungkus oleh `<HelmetProvider>` -> Menginjeksikan `<title>`, `<meta description>`, dan *OpenGraph tags* secara dinamis.

## 5. Handoff Notes for Product Manager (@ProductManagerPRD) / Developers

- **Variabel Lingkungan:** Developer harus segera menyiapkan file `.env` untuk menyimpan `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, dan `VITE_EMAILJS_PUBLIC_KEY`.
- **Warna & Tipografi:** Konfigurasikan *theme colors* pada `tailwind.config.ts` untuk menggunakan warna dasar `#0066ff`, dan atur *font family* utama ke 'Plus Jakarta Sans'.
- **Struktur Proyek:** Segera lakukan inisialisasi dengan perintah `npm create vite@latest . -- --template react-ts` lalu terapkan folder *Atomic Design* (`components/atoms`, `components/molecules`, dll) serta folder `services/`, `utils/`, dan `data/`.
