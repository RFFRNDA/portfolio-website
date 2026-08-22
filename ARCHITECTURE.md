# ARCHITECTURE.md

## Tech Stack
React 18 + TypeScript, Vite, React Router, Tailwind CSS, data TypeScript, deploy Vercel

## Folder Structure
portfolio-website/
├── public/
│   ├── cv.pdf
│   └── images/
├── src/
│   ├── components/  
│   │   └── ...   # Navbar, Footer, ProjectCard, dll       
│   ├── pages/      
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── Project.tsx       
│   ├── data/
│   │   |── projects.ts
│   │   ├── certifications.ts
│   │   ├── experiences.ts
│   │   └── i18n/
│   │       ├── en.ts
│   │       └── id.ts
│   ├── context/
│   │   └── LanguageContext.tsx 
│   ├── types/
│   │   ├── language.ts
│   │   ├── project.ts
│   │   ├── certification.ts
│   │   └── experience.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css          
├── tailwind.config.ts     
├── index.html
├── package.json
└── vite.config.ts

## Data model

### Language
Language:
{type: "en" | "id"}

### Project
Project: 
{
  id,
  title: { en, id },
  category,
  role,
  stack,
  duration,
  description: { en, id },
  image,
  link
}

### Experience
Experience:
{
  id,
  role,
  company,
  startDate,
  endDate,
  description: { en, id },
  type?
}

### Certification
Certification:
{
  id,
  name,
  issuer,
  issuedDate,
  expirationDate?,
  description: { en, id },
  image,
  verificationUrl?
}

## Data Flow

### Language 
Untuk LanguageContext + t()
1. `LanguageProvider` pada `LanguageContext.tsx` menyediakan global language state (`en` / `id`).
2. Language preference dibaca dari `localStorage`; jika belum tersedia, default ke `en`.
3. User dapat mengganti bahasa melalui language switcher pada Navbar.
4. Perubahan language memperbarui context dan disimpan kembali ke `localStorage`.
5. UI menggunakan helper `t()` untuk mengambil UI labels dari `en.ts` atau `id.ts`.

### Projects  
Untuk projects.ts + localized fields
1. `projects.ts` menjadi single source of truth untuk seluruh project data.
2. Data project di-parse sesuai interface `Project` (type-safe).
3. Field yang tidak bergantung pada bahasa (`category`, `role`, `stack`, `duration`, `image`, `link`) digunakan secara langsung.
4. Field localized (`title`, `description`) mengambil nilai berdasarkan active language.
5. State filter kategori dikelola lokal di halaman `Project`.
6. Featured Project pada `Home` mengambil subset dari sumber data project yang sama — hindari duplikasi/hardcode ganda.

### Experience
1. `experiences.ts` menjadi single source of truth untuk seluruh experience data.
2. Data experience menggunakan `Experience` type untuk menjaga struktur tetap type-safe.
3. Home mengambil experience data untuk menampilkan compact experience summary.
4. About mengambil data yang sama untuk menampilkan full Experience Timeline.
5. Field localized (`description`) mengambil nilai berdasarkan active language.
6. Field language-independent (`role`,`company`, `startDate`, `endDate`) digunakan secara langsung.

### Certifications
Untuk `certifications.ts` + `Certification` type
1. `certifications.ts` menjadi single source of truth untuk seluruh certification data.
2. Data certification menggunakan `Certification` type untuk menjaga struktur tetap type-safe.
3. `About` mengambil certification data untuk menampilkan `CertificationCard`.
4. Saat user memilih "View Certificate", certification yang dipilih ditampilkan dalam modal/lightbox.
5. `description` mengambil nilai berdasarkan active language.
6. `expirationDate` dan `verificationUrl` hanya ditampilkan jika tersedia.

## Technical Decisions
- Menggunakan custom i18n berbasis React Context (`LanguageContext`) dan helper `t()` daripada `react-i18next`, karena scope portfolio kecil dan tidak membutuhkan fitur i18n kompleks seperti pluralization atau namespace.
- UI translation dan localized content dibedakan.
- UI translation disimpan sebagai TypeScript dictionary (`en.ts` dan `id.ts`) untuk menjaga struktur translation tetap sederhana dan type-safe tanpa dependency tambahan.
- `projects.ts` digunakan sebagai single source of truth untuk project data. Data project tidak diduplikasi berdasarkan bahasa; hanya field yang membutuhkan localization seperti `title` dan `description` yang memiliki nilai `en` dan `id`.
- Active language disimpan di `localStorage` agar pilihan bahasa user tetap dipertahankan antar halaman dan sesi kunjungan. Default language adalah English (`en`) jika belum terdapat preference.
- Language tidak menjadi bagian dari URL atau routing. `/about` dan `/projects` tetap menggunakan route yang sama untuk kedua bahasa; bahasa dikelola melalui global language state.
- UI labels menggunakan helper `t()` dari translation dictionary, sedangkan localized project content (`title`, `description`) diambil langsung dari data project berdasarkan active language. Keduanya tidak dicampur dalam satu mekanisme translation.
- Istilah seperti Project, Download CV, Open to Work, dan terminology teknis lainnya tetap dalam English
- Skills pada page About cukup dibuat hardcoded karena sederhana.

