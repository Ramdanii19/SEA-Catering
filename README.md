
# SEA Catering 🍱

**SEA Catering** adalah aplikasi web berbasis Laravel yang menyediakan layanan langganan rencana makanan sehat. Dilengkapi dengan dashboard admin, autentikasi pengguna, fitur testimoni, dan antarmuka frontend modern yang responsif menggunakan Tailwind CSS.

---

## 📚 Daftar Isi

- [🧩 Fitur](#-fitur)
- [📦 Kebutuhan Sistem](#-kebutuhan-sistem)
- [⚙️ Instalasi](#️-instalasi)
- [🔐 Konfigurasi Environment](#-konfigurasi-environment)
- [🧱 Migrasi Database](#-migrasi-database)
- [📡 API Endpoint](#-api-endpoint)
- [🌐 Halaman Frontend](#-halaman-frontend)
- [🛠️ Admin Dashboard](#️-admin-dashboard)
- [🌟 Testimoni](#-testimoni)
- [🥗 Meal Plan](#-meal-plan)
- [📁 Struktur File](#-struktur-file)
- [🪪 Lisensi](#-lisensi)

---

## 🧩 Fitur

- Autentikasi pengguna (login dan register)
- CRUD Meal Plan (khusus admin)
- Listing meal plan + modal detail
- Dashboard admin: statistik, manajemen user & subscription
- Pengguna bisa memberikan testimoni + rating
- Desain responsif dengan Tailwind CSS
- RESTful API lengkap
- Manajemen langganan (subscribe, pause, cancel)
- Halaman kontak dengan info manajer
- Dashboard pengguna untuk mengelola langganan

---

## 📦 Kebutuhan Sistem

- PHP >= 8.1
- Composer
- Node.js + npm
- MySQL/MariaDB
- Laravel 10+

---

## ⚙️ Instalasi

```bash
git clone https://github.com/yourusername/sea-catering.git
cd sea-catering
composer install
npm install
npm run build
```

---

## 🔐 Konfigurasi Environment

1. Duplikat file `.env.example` ke `.env`
2. Ubah konfigurasi DB, mail, dan URL backend kamu
3. Jalankan perintah:

```bash
php artisan key:generate
```

---

## 🧱 Migrasi Database

```bash
php artisan migrate
php artisan db:seed
php artisan db:seed --class=MealPlanSeeder
```

---

## 👨‍💼 Akun Demo Admin

- Email: `admin@seacatering.com`
- Password: `Adminsea@123`

---

## 🛠️ Admin Dashboard

- Filter data berdasarkan tanggal
- Lihat statistik langganan, pendapatan, pengguna aktif
- Kelola user (promote jadi admin)

![Admin Dashboard](/public/assets/Admin_Dashboard.jpeg)

---

## 🌟 Testimoni

- Pengguna bisa memberikan rating & review
- Ditampilkan dalam bentuk carousel (Swiper)

![Testimonials](/public/assets/Rating.jpeg)
![Testimonials](/public/assets/Review.jpeg)

---

## 🥗 Meal Plan

- Daftar plan dengan gambar, harga, deskripsi, fitur
- Modal detail makanan bisa diakses oleh pengguna

![Meal Plans](/public/assets/Meal_Plans.jpeg)

---

## 📬 Langganan

- Pengguna memilih jenis plan, hari, alergi, dsb
- Harga dihitung otomatis
- Bisa pause atau cancel via dashboard user

![Subscription](/public/assets/Subscriptions.jpeg)

---

## 👤 Dashboard Pengguna

- Lihat dan kelola langganan aktif
- Bisa *pause* dalam rentang tanggal tertentu
- Bisa *cancel* langganan

![User Dashboard](/public/assets/User_Dashboard.jpeg)

---

## ☎️ Contact Us

- Info kontak manajer disediakan dengan nama dan nomor telepon

![Contact Us](/public/assets/Contact_Us.jpeg)

---

## 📁 Struktur Folder (Contoh)

```
/app
/routes
/resources
/public
.env
```

---

## 🪪 Lisensi

MIT © SEA Catering — 2025
