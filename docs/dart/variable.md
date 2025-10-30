---
sidebar_position: 5
---

# 🧩 Variable

Dalam bahasa Dart, **variabel** digunakan untuk menyimpan data agar dapat digunakan kembali dalam program.  
Setiap variabel memiliki **nama**, **tipe data**, dan **nilai**.  

Dart memiliki beberapa jenis deklarasi variabel seperti `var`, `final`, `const`, `late`, dan juga mendukung **nullable variable** menggunakan tanda `?`.

---

## 💡 Variabel

Variabel adalah tempat penyimpanan data sementara dalam program.  
Contoh sederhana:

```jsx
void main() {
  var name = 'Wildan';
  print(name);
}
````

**📘 Penjelasan:**

* `var name = 'Wildan';` → Membuat variabel dengan nama `name` dan nilai `'Wildan'`.
* `print(name);` → Menampilkan nilai variabel ke konsol.

---

## ⚙️ Const

Kata kunci **`const`** digunakan untuk mendefinisikan nilai yang **tidak akan pernah berubah** selama program berjalan.
Nilainya harus sudah diketahui **saat kompilasi** (compile-time).

**Contoh:**

```jsx
void main() {
  const double atm = 1000;
  print(atm);
}
```

**📘 Penjelasan:**

* `const double atm = 1000;` → Membuat variabel konstan bernilai `1000`.
* Nilai `atm` **tidak bisa diubah** setelah dideklarasikan.
* **Output:** `1000`

---

## 🕒 Final

Kata kunci **`final`** mirip dengan `const`, tetapi nilainya bisa ditentukan **saat program dijalankan** (*runtime*), bukan saat kompilasi.

**Contoh:**

```jsx
void main() {
  final waktuSekarang = DateTime.now();
  print(waktuSekarang);
}
```

**📘 Penjelasan:**

* `final waktuSekarang = DateTime.now();` → Nilai ditentukan ketika program dijalankan.
* Nilai `waktuSekarang` tidak bisa diubah setelah diinisialisasi.
* **Output:** Waktu saat program dijalankan (misal `2025-10-30 10:00:00.000`).

---

## 🧭 Late

Kata kunci **`late`** digunakan ketika kamu ingin mendeklarasikan variabel **tanpa langsung memberikan nilai**, tetapi menjamin nilainya **akan diinisialisasi nanti** sebelum digunakan.

**Contoh:**

```jsx
void main() {
  late String description;
  description = 'Feijoada!';
  print(description);
}
```

**📘 Penjelasan:**

* `late String description;` → Variabel `description` akan diinisialisasi nanti.
* `description = 'Feijoada!';` → Mengisi nilai ke variabel tersebut.
* **Output:** `Feijoada!`

🧠 **Catatan:**
Jika variabel `late` digunakan sebelum diisi nilai, program akan error.

---

## ❓ Nullable

Secara default, Dart tidak mengizinkan variabel bernilai `null` untuk mencegah error.
Namun, kamu bisa membuat variabel **nullable** (boleh kosong) dengan menambahkan tanda `?` setelah tipe datanya.

**Contoh:**

```jsx
void main() {
  String? name;
  name = 'Wildan';
  print(name);
}
```

**📘 Penjelasan:**

* `String? name;` → Variabel `name` bertipe `String`, namun bisa bernilai `null`.
* `name = 'Wildan';` → Mengisi nilai ke variabel.
* **Output:** `Wildan`

---