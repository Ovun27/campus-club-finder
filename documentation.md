# 📘 Campus Club Finder – Documentation

Campus Club Finder adalah aplikasi web berbasis React + Vite + Tailwind yang membantu mahasiswa menemukan, mengeksplorasi, dan bergabung dengan berbagai klub kampus.

---

## 🛠️ Tech Stack
- Vite (setup dan bundling)
- React (UI dan state)
- React Router (navigasi)
- Tailwind CSS (styling)
- TypeScript
- localStorage (untuk menyimpan status join)

---

## 🚀 Cara Menjalankan Aplikasi

```bash
npm install
npm run dev
```

---


## 📑 Struktur Halaman
🏠 Home (/)
- Welcome message
- CTA menuju halaman daftar klub


📋 Club List (/clubs)
- Menampilkan seluruh klub
- Dropdown sorting (A-Z, Z-A)
- Toggle view: Grid & List
- Tombol "View Details"

![Grid View](./screenshoot/image-1.png)
![List View](./screenshoot/image-2.png)
![orting Z-A](./screenshoot/image-3.png)

🔍 Club Detail (/clubs/:clubId)
- Gambar besar
- Deskripsi lengkap
- Daftar event
- Tombol “Join Club”
- Jika sudah join → muncul tulisan “You have joined this club!”
![Sebelum Join](./screenshoot/image-4.png)
![Sesudah Join](./screenshoot/image-5.png)

ℹ️ About (/about)
Penjelasan singkat aplikasi & tech stack
![about page](./screenshoot/image-6.png)

🚫 404 Not Found (*)
Halaman muncul jika URL tidak ditemukan
![not found page](./screenshoot/image-7.png)

💾 Penyimpanan Lokal
Data klub yang di-join disimpan di localStorage:
```bash
localStorage.getItem('joinedClubs')
```
👤 Dibuat Oleh
Nama: Colliens Edward
NIM: 2540130296
