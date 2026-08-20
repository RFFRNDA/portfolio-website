---
version: "alpha"
name: "Portfolio Rafif"

colors:
  primary: "#0c1621"
  secondary: "#e0e3d9"
  tertiary: "#c85314"
  text-on-dark: "#f3f4f0"
  text-on-dark-secondary: "#57626f"
  text-on-warm-secondary: "#445569"

typography:
  h1:
    fontFamily: "Space Grotesk, sans-serif"
    fontSize: 2.25rem
    fontWeight: 700
  body-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 1rem
    fontWeight: 400
  label-caps:
    fontFamily: "Inter, sans-serif"
    fontSize: 0.75rem
    fontWeight: 500

components:
  button-primary:
    backgroundColor: "{colors.tertiary}"
    borderRadius: 8px
    padding: 12px 24px
  card:
    borderRadius: 12px
    borderColor: "{colors.text-on-dark-secondary}"
---

# DESIGN.md
## Overview
Portfolio pribadi dengan karakter bold, modern, dan penuh energi — memadukan dark background yang tegas dengan aksen orange yang berani, ditambah elemen dekoratif seperti brush-stroke texture untuk memberi kesan personal branding yang kuat dan mudah diingat. Section warm white digunakan sebagai jeda visual dan menjaga keterbacaan konten yang lebih panjang (About, deskripsi project).

Kombinasi dark + bold + warm ini dipilih supaya portfolio tetap terasa profesional di mata recruiter, tapi juga menonjolkan personality & craft sebagai designer/developer — bukan template generik.

> Catatan desain: elemen bold (brush-stroke, badge melingkar) dipakai sebagai signature visual di titik strategis — tidak diulang di setiap section, supaya halaman yang lebih panjang seperti About/Project tetap nyaman dibaca dan tidak berlebihan.

## Colors
- **Dark Base** #0c1621 — background section gelap (Hero,'What I Can Do', Experience, Footer) 
- **Warm Base** #e0e3d9 — background section terang (About, Featured Project)
- **Accent Orange** #c85314 — CTA, highlight, brush-stroke texture, badge
- **Text on Dark** #f3f4f0 — teks utama di atas Dark Base
- **Text on Dark (secondary)** #57626f — teks sekunder/caption di atas Dark Base
- **Text on Warm (secondary)** #445569 — teks sekunder di atas Warm Base

## Typography
- **Heading:** Space Grotesk (bold 700) — dipakai di Hero & judul, kesan modern-tech tapi tetap profesional
- **Body:** Inter (400/500) — untuk paragraf & deskripsi, readability tinggi
- **Skala:** default Tailwind (hero text-5xl/6xl bold, section title text-3xl/4xl, body text-base)

## Rounded & Shapes
- **Card:** `rounded-xl` (12px) — ProjectCard, CompetencyCard
- **Button:** `rounded-lg` (8px) — solid & outline CTA
- **Badge "Open to Work":** custom circular shape (lihat Components → Hero)

## Elevation & Depth
Dark theme kurang cocok pakai shadow tradisional (kurang kelihatan di background gelap) — gantinya pakai border `text-on-dark-secondary`.

- **Decorative texture layer:** brush-stroke SVG/PNG warna accent orange, absolute-positioned di background Hero, di belakang konten (z-index: base). Sengaja tidak dipakai berulang di section lain agar tetap terasa signature, bukan noise visual.

## Layout
- **Grid:** section padding `py-16`/`py-24`, container `max-w-6xl mx-auto px-6`, grid untuk ProjectCard & CompetencyCard.
- **Struktur multi-page:** tiap halaman (Home/About/Project) punya urutan section sendiri, bukan satu long-scroll. Navbar cukup link ke 3 halaman + language switcher 
- **Mobile collapse:** semua layout multi-kolom collapse di bawah 768px. No horizontal overflow.
- **z-index contract:** base (0) / sticky-nav (100) / overlay (200) / modal (300) / toast (500).

## Page Structure

### Home
1. Navbar
2. Hero
3. About Me Preview
4. What I Can Do
5. Experience & Technical Focus
6. Featured Project
7. Footer

### About
1. Navbar
2. Header
3. Biography
4. Experience Timeline
5. Competencies
6. Skills 
7. Certifications
8. Footer

### Project
1. Navbar
2. Header
3. Category Filter
4. Project Grid
5. Footer

## Components

- **Navbar** — Signature di kiri, nav links (Home/About/Project) di tengah, language switcher di kanan. Sticky top, background Dark Base dengan border-bottom tipis.

- **Hero** — 2 kolom (teks | foto) desktop, stack di mobile. Teks terdiri dari nama lengkap, tagline singkat, CTA "View My Project" & "Download CV". Brush-stroke texture orange di background belakang foto sebagai aksen dekoratif. Badge circular "Open to Work" (teks melengkung mengelilingi lingkaran + panah di tengah) di pojok foto.

- **About Me Preview** — 2 kolom (About Me Preview + CTA "More About Me" | Bio & info singkat + Signature), background Warm Base. Mobile tetap 2 kolom, perkecil size icon & text serta hilangkan signature.

- **CompetencyCard** ("What I Can Do") — grid 3-4 kolom, icon + judul + deskripsi singkat.

- **Experience Timeline** — Representasi pengalaman kerja/intern dalam bentuk timeline/list dengan dot marker (accent orange; hollow untuk role lampau, filled untuk role saat ini), rentang tahun, role, dan nama perusahaan.
  - *Home — Experience & Skills:* menampilkan ringkasan experience/timeline secara compact di kolom kiri dan TechnicalFocus di kolom kanan. Setiap experience memiliki deskripsi singkat 1–2 baris. CTA "View Full CV" ditempatkan di bawah area Experience.
  - *About — Experience Timeline:* menampilkan timeline pengalaman secara lebih lengkap dengan deskripsi dan detail role.

- **Technical Focus** — menampilkan beberapa high-level technical focus area dengan visual 5-level dot scale (`●●●●○`). Tidak menggunakan persentase numerik. Level dots berfungsi sebagai visual indication dari tingkat familiarity/strength, bukan skor kompetensi objektif.

- **Skills** — pada halaman About, skill ditampilkan dalam grouped taxonomy berdasarkan kategori.
  - Kategori: Programming, Machine Learning & Data, Framework, Database, System Analysis, Development Tools, Office Applications.
  - Setiap kategori menggunakan heading kecil dan kumpulan skill tags/chips.
  - Skills tidak menggunakan progress bar atau percentage.

- **CertificationCard** — certificate preview dalam bentuk card:
  - *Preview:* certificate thumbnail, certification name, issuer, issued date, CTA arrow "View Certificate".
  - CTA "View Certificate" membuka certificate detail dalam modal/lightbox.
  - *Certificate Detail:* menampilkan certificate image dalam ukuran lebih besar, description, expiration date (jika tersedia), dan verification link (jika tersedia).
  - Modal dapat ditutup melalui close button atau klik di luar modal.
  - Pada mobile, modal menggunakan hampir seluruh viewport dengan scroll internal jika diperlukan.
  - Verification link dan expiration date hanya ditampilkan apabila tersedia.
 
- **ProjectCard** — dua varian:
  - *Preview* (dipakai di Home "Featured Project"): thumbnail, title, badge kategori, background Warm Base, outline Text on Dark (secondary), CTA arrow "lihat detail"
  - *Full* (dipakai di halaman Project): tambahan tag tech stack + hover border accent + CTA panah "lihat detail". Detail card berupa modul popup

- **FilterButton** — pill per kategori (halaman Project). Active = solid accent, inactive = outline.

- **Footer** — 4 kolom: (1) Signature + tagline singkat, (2) Quick Links (Home/About/Project), (3) Contact (Email, WhatsApp, Lokasi), (4) Social media icons (GitHub, LinkedIn, Instagram). Baris bawah: copyright + tagline kecil, background Dark Base.

## Do's and Don'ts
- Do pakai orange secukupnya, bukan untuk teks panjang/background besar
- Do brush-stroke/texture cuma di Hero dan titik dekoratif strategis yang memang diperlukan. Jangan diulang di tiap section biar tetap terasa signature, bukan noise
- Do jaga kontras teks vs background 
- Don't lebih dari 2 font family
- Don't animasi/transition berat yang membuat lag di device low-end
- Don't emojis di UI — selalu gunakan icon system (Lucide, Heroicons)
