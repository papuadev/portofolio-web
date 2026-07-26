## PRD: Personal Static Portfolio Website

## 1. Product overview
### 1.1 Document title and version
- PRD: Personal Static Portfolio Website
- Version: 1.3 (Updated Post-Consistency Audit - Final)

### 1.2 Product summary
Produk ini adalah sebuah Website Portofolio Personal berbasis statis (*Single-Page Application*) yang dibangun untuk menampilkan resume secara interaktif secara *online*. Website ini berfungsi sebagai alat pendukung bagi seorang *Full-Stack Web Developer* untuk menonjolkan keterampilan, pengalaman kerja, dan proyek-proyek yang pernah diselesaikan kepada pihak rekruter (HRD). Desain difokuskan pada kesan premium, cepat diakses, responsif, dan mudah dikelola melalui struktur *Atomic Design* serta arsitektur *Data-Driven*.

## 2. Goals
### 2.1 Business goals
- Menyediakan *online resume* yang selalu aktif (24/7) untuk melengkapi lampiran CV konvensional.
- Meningkatkan kredibilitas profesional di mata *Recruiter* atau HRD.
- Membangun visibilitas di mesin pencari (SEO dasar) agar profil mudah ditemukan melalui pencarian organik.

### 2.2 User goals
- HRD/Recruiter dapat melihat secara cepat keterampilan inti dan pengalaman kerja kandidat tanpa navigasi yang membingungkan.
- HRD/Recruiter dapat mempelajari studi kasus (*Portfolio*) menggunakan metodologi STAR (*Situation, Task, Action, Result*) dengan jelas.
- HRD/Recruiter dapat dengan mudah menghubungi kandidat melalui form kontak yang tersedia.

### 2.3 Non-goals (Out of Scope)
- Penambahan Halaman Blog Pribadi (Direncanakan untuk rilis V2).
- Halaman detail proyek yang berdiri sendiri (multi-page route) (Direncanakan untuk rilis V2).
- Integrasi Sistem Manajemen Konten (*Headless CMS*) atau *Database/Backend* khusus untuk menyimpan pesan (*Contact Form*).

## 3. User personas
### 3.1 Key user types
- HRD / IT Recruiter
- Technical Lead / Engineering Manager

### 3.2 Basic persona details
- **Bapak/Ibu HRD (Recruiter)**: Mereka memiliki waktu sangat terbatas (kurang dari 1 menit per CV/Portofolio) untuk menilai apakah seorang kandidat cocok dengan kualifikasi perusahaan. Mereka menyukai desain yang bersih, informasi yang terstruktur poin per poin, dan langsung menyoroti *Tech Stack* serta pengalaman.
- **Technical Lead**: Mereka mencari bukti implementasi teknis. Mereka akan melihat *tools* yang digunakan, pendekatan *problem-solving* (melalui narasi STAR), dan seringkali mengecek kualitas UI secara langsung (responsivitas layar, inspeksi kode, dll).

### 3.3 Role-based access
- **Guest / Public**: Semua pengguna dapat melihat seluruh isi portofolio. Tidak ada sistem otentikasi (Login/Register).

## 4. Functional requirements
- **Hero Section** (Priority: P1)
  - Menampilkan Foto Profil, Nama, *Job Title*, dan pengantar singkat dengan *Call to Action* (CTA) "View Portfolio".
- **Theme Toggle** (Priority: P1)
  - Tombol untuk beralih antara *Light Mode* dan *Dark Mode*.
- **About Me Section** (Priority: P1)
  - Menampilkan biografi singkat dan nilai-nilai inti profesional kandidat.
- **Skills Section** (Priority: P1)
  - Menampilkan daftar keterampilan (Front-End, Back-End, DevOps) dalam bentuk *badge* atau kartu.
- **Portfolio Section** (Priority: P1)
  - Menampilkan daftar proyek yang menggunakan metode STAR.
- **Experience Section** (Priority: P2)
  - Menampilkan kronologi/urutan pengalaman kerja (*Timeline*).
- **Testimonials Section** (Priority: P2)
  - Menampilkan kutipan umpan balik (*feedback*) dari klien atau rekan kerja beserta nama dan posisinya.
- **Contact Section** (Priority: P1)
  - Menampilkan form kontak (*Name*, *Email*, *Message*) yang terintegrasi dengan **EmailJS**.
  - Menampilkan tautan ke email langsung dan tautan sosial (*LinkedIn*, *GitHub*).

## 5. User experience
### 5.1 Entry points & first-time user flow
- Pengunjung masuk melalui tautan yang ada pada CV PDF, LinkedIn, atau pencarian Google.
- Mereka langsung disambut oleh *Hero Section* dengan animasi *fade-in* yang halus.
- Pengunjung menggunakan menu navigasi atas (yang *sticky*) untuk melakukan *smooth scroll* ke seksi yang diminati.

### 5.2 Core experience
- **Reviewing Portfolio**: Pengunjung melihat sekilas *thumbnail* proyek, membaca metodologi STAR secara ringkas, dan dapat mengklik *link live demo* / Github.
- **Contacting**: Pengunjung mengisi form kontak di bagian paling bawah. Setelah klik 'Send', notifikasi (Toast) muncul dan pesan terkirim ke email kandidat.

### 5.3 UI/UX highlights & Edge cases
- Menggunakan tipografi **Plus Jakarta Sans** dan warna primer `#0066ff`.
- Responsif penuh dari *Mobile* (320px) hingga *Desktop* Ultrawide (1920px).
- **Edge Case (Form):** Apabila layanan EmailJS sedang *down* atau *quota limit* tercapai, form harus menampilkan pesan gagal yang sopan (*Error Handling*).
- **Edge Case (Portfolio Images):** Jika *thumbnail* proyek kosong atau gagal dimuat, UI akan merender *Generic Placeholder Image* yang menggunakan warna primer (`#0066ff`) dan inisial judul proyek untuk menjaga konsistensi tata letak *grid*.

## 6. Narrative
Sebagai seorang HRD yang sedang menyaring puluhan kandidat, saya mengklik tautan portofolio di CV kandidat. Saya langsung disambut oleh halaman yang memuat cepat, elegan, dan menawarkan transisi *Dark Mode* yang modern. Melalui *smooth scrolling*, saya bisa melihat daftar kemampuan teknis (Skill) dan pengalaman kandidat dengan sangat jelas. Deskripsi proyek (Portfolio) yang menggunakan struktur STAR memudahkan saya memahami cara berpikir kandidat. Pada akhirnya, saya merasa yakin dan langsung menggunakan form kontak di bagian bawah halaman untuk mengirim undangan wawancara.

## 7. Success metrics
### 7.1 User-centric metrics
- Waktu rata-rata di halaman (*Average session duration*) meningkat di atas 45 detik.
- Pengunjung melakukan *scroll* hingga bagian *Contact* (*Scroll depth* mencapai 90%).

### 7.2 Business metrics
- Tidak relevan secara langsung, diukur dari konversi profil menjadi panggilan *interview*.

### 7.3 Technical metrics
- *Lighthouse Performance Score* harus mencapai >90 (hijau).
- SEO Score mencapai >95.
- Waktu muat awal (*First Contentful Paint*) < 1.5 detik.

## 8. Technical considerations (Input for Engineering Team)
### 8.1 Integration points
- **EmailJS**: Integrasi API eksternal (*Client-side*) menggunakan SDK EmailJS untuk form kontak.
- **Google Fonts**: Mengimpor font 'Plus Jakarta Sans'.

### 8.2 Data storage & privacy
- Tidak ada penyimpanan data pengguna (*Cookies* ditiadakan kecuali untuk preferensi tema *Light/Dark Mode* via `localStorage`).
- Seluruh *State* data aplikasi disimpan di dalam file statis `data.ts`.

### 8.3 Scalability & potential technical challenges
- Struktur komponen (Atomic Design) dan *Routing* semu (*Hash Navigation*) harus diatur agar di masa depan transisi menuju multi-page (React Router untuk versi 2.0) dapat dilakukan tanpa perombakan besar.

## 9. Milestones & sequencing
### 9.1 Project estimate & Team composition
- Size: 1-2 Minggu | Team: 1 Full-Stack Developer (Solo)
### 9.2 Suggested phases
- **Phase 0**: Discovery & PRD (Selesai).
- **Phase 1**: *Project Setup* (Vite, Tailwind, shadcn, TS).
- **Phase 2**: Pembuatan *Atoms & Molecules* (Button, Card, Form Inputs).
- **Phase 3**: Perakitan *Organisms & Templates* (Hero, About, Portfolio).
- **Phase 4**: Integrasi Data (`data.ts`) dan *Service* (EmailJS).
- **Phase 5**: QA (Responsivitas, Animasi) & *Deployment* ke Vercel.

## 10. User stories & Acceptance Criteria

### 10.1. Mengganti Tema Tampilan (Light/Dark Mode)
- **ID**: GH-001
- **Story**: As a [Pengunjung Web], I want to [bisa mengubah tema aplikasi antara terang dan gelap], so that [mata saya lebih nyaman saat membaca teks].
- **Acceptance criteria**:
  - [ ] Terdapat tombol (ikon matahari/bulan) di bagian navigasi.
  - [ ] Ketika diklik, seluruh halaman berubah menjadi tema yang berlawanan (*Light/Dark*).
  - [ ] Preferensi disimpan di `localStorage` (akan bertahan bila halaman di-*refresh*).
  - [ ] **Kondisi Default**: Jika belum ada data di `localStorage` (kunjungan pertama), aplikasi harus **memaksa masuk ke Dark Mode**.

### 10.2. Melihat Bagian Portfolio (Proyek)
- **ID**: GH-002
- **Story**: As a [Recruiter], I want to [melihat daftar proyek beserta pendekatan STAR-nya], so that [saya bisa menilai kualitas problem solving kandidat].
- **Acceptance criteria**:
  - [ ] Halaman menampilkan daftar proyek dalam bentuk *Grid Card*.
  - [ ] Setiap kartu menampilkan Teknologi yang digunakan.
  - [ ] Setiap kartu menampilkan teks dengan format *Situation*, *Task*, *Action*, dan *Result*.
  - [ ] Jika URL gambar kosong atau *broken*, kartu merender *Placeholder* berwarna `#0066ff`.

### 10.3. Mengirim Pesan melalui Contact Form
- **ID**: GH-003
- **Story**: As a [Recruiter], I want to [mengirim pesan langsung dari web], so that [saya bisa segera mengundang kandidat untuk interview].
- **Acceptance criteria**:
  - [ ] Terdapat form berisi input Nama, Email, dan Pesan.
  - [ ] Validasi form aktif (email harus valid, pesan tidak boleh kosong).
  - [ ] Ketika "Submit" diklik, sistem memanggil *EmailJS*.
  - [ ] Terdapat status *Loading* saat proses kirim.
  - [ ] **Pencegahan Double-Submit**: Tombol Submit langsung di-*disable* (nonaktif) pada klik pertama untuk mencegah pengiriman ganda saat *loading*.
  - [ ] Terdapat *Toast/Snackbar* sukses jika pesan terkirim, dan pesan gagal jika terjadi error.
  - [ ] **Spam Mitigation**: Diabaikan untuk MVP. Fokus pada pengiriman data tanpa proteksi *bot*.
  - [ ] **Sosial Media:** Terdapat area yang menampilkan tautan ke LinkedIn dan GitHub yang bisa diklik.

### 10.4. Navigasi Smooth Scrolling
- **ID**: GH-004
- **Story**: As a [Pengunjung Web], I want to [mengklik menu dan layar bergulir otomatis ke seksi yang dituju], so that [saya tidak perlu men-scroll manual mencari informasi].
- **Acceptance criteria**:
  - [ ] Navbar memiliki *link* ke Hero, About, Skills, Portfolio, Experience, dan Contact.
  - [ ] Klik link memicu animasi *smooth scroll* (bukan perpindahan halaman yang kasar).
  - [ ] Navbar tetap menempel (*sticky*) di bagian atas layar.
  - [ ] **Interaksi Mobile**: Pada mode layar kecil (Hamburger Menu), menu akan otomatis tertutup sesaat setelah salah satu tautan diklik.

### 10.5. Melihat Testimoni
- **ID**: GH-005
- **Story**: As a [Recruiter], I want to [membaca umpan balik dari klien sebelumnya], so that [kredibilitas kandidat semakin meyakinkan].
- **Acceptance criteria**:
  - [ ] Halaman menampilkan seksi Testimoni.
  - [ ] Setiap testimoni menampilkan kutipan, nama klien, dan posisi klien.
