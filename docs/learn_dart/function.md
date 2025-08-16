---
sidebar_position: 3
---

# ⚙️ Function

Dalam bahasa Dart, **function** atau **fungsi** adalah blok kode yang dirancang untuk menjalankan tugas tertentu.  
Fungsi membantu menghindari pengulangan kode, membuat program lebih rapi, dan mudah dibaca.

Setiap program Dart dimulai dari **fungsi `main()`**. Dari fungsi ini, kita dapat memanggil fungsi lain untuk dieksekusi.  
Dengan fungsi, kita bisa mengelompokkan logika program agar dapat digunakan kembali tanpa harus menulis ulang kode yang sama.

---

## 🏁 Fungsi `main()`

`main()` adalah titik awal eksekusi program Dart. Tanpa fungsi ini, program Dart tidak akan berjalan.

**Contoh:**
```jsx
void main() {
  hello();
}

void hello() {
  print('Hello');
}
````

**📘 Penjelasan:**

* `void main()` → Titik awal eksekusi program Dart dengan tipe kembalian `void` (tidak mengembalikan nilai).
* `hello();` → Memanggil fungsi `hello` agar dijalankan.
* `void hello()` → Fungsi tanpa nilai kembalian yang berisi perintah yang akan dijalankan.
* `print('Hello');` → Menampilkan teks **Hello** ke konsol.

---

## 🎯 Fungsi dengan Parameter

Fungsi dapat menerima **parameter** (argumen) untuk diproses di dalamnya.
Parameter memungkinkan kita memberikan data dari luar fungsi.

**Contoh:**

```dart
void main() {
  hello('Wildan');
}

void hello(String name) {
  print('Welcome, $name');
}
```

**📘 Penjelasan:**

* `hello('Wildan');` → Memanggil fungsi `hello` dengan mengirimkan nilai `"Wildan"` sebagai parameter.
* `void hello(String name)` → Fungsi `hello` menerima sebuah parameter bertipe `String` dengan nama variabel `name`.
* `print('Welcome, $name');` → Menampilkan teks sambutan sesuai nilai parameter yang dikirim.

---

## 🔄 Fungsi dengan Return Type

Selain `void`, fungsi juga bisa **mengembalikan nilai** (return value).
Tipe data yang dikembalikan harus sesuai dengan yang ditentukan di deklarasi fungsi.

**Contoh:**

```jsx
void main() {
  var myName = name();
  print('Hi My Name Is: $myName');
}

String name() {
  return 'Wildan';
}
```

**📘 Penjelasan:**

* `var myName = name();` → Memanggil fungsi `name` dan menyimpan nilai yang dikembalikan ke variabel `myName`.
* `String name()` → Fungsi `name` dideklarasikan dengan return type `String`.
* `return 'Wildan';` → Mengembalikan nilai berupa string `"Wildan"`.
* `print('Hi My Name Is: $myName');` → Menampilkan teks dengan nilai yang dikembalikan dari fungsi.

---

## 🧩 Fungsi dengan Beberapa Parameter

Kita juga bisa membuat fungsi dengan lebih dari satu parameter.

**Contoh:**

```jsx
void main() {
  var hasil = tambah(10, 5);
  print('Hasil penjumlahan: $hasil');
}

int tambah(int a, int b) {
  return a + b;
}
```

**📘 Penjelasan:**

* `tambah(10, 5);` → Mengirimkan dua parameter yaitu `10` dan `5`.
* `int tambah(int a, int b)` → Fungsi `tambah` menerima dua parameter bertipe `int`.
* `return a + b;` → Mengembalikan hasil penjumlahan dari kedua parameter.
* Hasil akhirnya: **Hasil penjumlahan: 15**

---

## ⚡ Fungsi Arrow (Sederhana)

Dart menyediakan **arrow function** untuk menuliskan fungsi singkat dalam satu baris.

**Contoh:**

```jsx
int kali(int a, int b) => a * b;

void main() {
  print(kali(4, 3)); // Output: 12
}
```

**📘 Penjelasan:**

* `=>` → Digunakan untuk menggantikan `{ return ... }` jika hanya satu baris kode.
* `int kali(int a, int b) => a * b;` → Mengembalikan hasil perkalian langsung.

---

## 🔗 Penggabungan Semua Konsep

Sekarang mari kita gabungkan semuanya: fungsi dengan parameter, return type, dan pemanggilan di `main()`.

**Contoh:**

```jsx
void main() {
  var nama = getName();
  var hasil = hitung(10, 20);

  greet(nama, hasil);
}

// Fungsi mengembalikan String
String getName() {
  return 'Wildan';
}

// Fungsi dengan return type int
int hitung(int a, int b) {
  return a + b;
}

// Fungsi dengan parameter (String & int)
void greet(String name, int value) {
  print('Halo $name, hasil perhitunganmu adalah $value');
}
```

**📘 Penjelasan:**

* `getName()` → Mengembalikan nama `"Wildan"`.
* `hitung(10, 20)` → Menghitung penjumlahan `10 + 20 = 30`.
* `greet(nama, hasil);` → Memanggil fungsi dengan parameter `nama` dan `hasil`.

---