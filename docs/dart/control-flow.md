---
sidebar_position: 2
---

# 🔁 Control Flow

Saat menulis program komputer, Anda perlu memberi tahu komputer apa yang harus dilakukan dalam berbagai situasi. Untuk itu, Anda dapat menggunakan **struktur kontrol alur (control flow)** di Dart agar program dapat merespons kondisi tertentu secara dinamis.

Misalnya, sebuah aplikasi kalkulator harus melakukan pengurangan jika pengguna menekan tombol **"kurangi"**, dan melakukan penjumlahan jika pengguna menekan tombol **"tambah"**. Dalam kasus seperti ini, Anda bisa menggunakan **pernyataan kondisi (conditional statements)** untuk mengatur jalannya program.

---

## 🔀 Else If

Berikut contoh penggunaan `else if` dalam bahasa Dart:

```dart
void main() {
  int a = 10;
  int b = 5;

  if (a <= b) {
    print('$a lebih kecil dari atau sama dengan $b');
  } else if (a >= b) {
    print('$a lebih besar dari atau sama dengan $b');
  } else {
    print('Terjadi kesalahan');
  }
}
````

📘 **Penjelasan:**

* `if (kondisi) { ... }`: Menjalankan blok kode jika kondisi terpenuhi.
* `else if (kondisi_lain) { ... }`: Menjalankan blok kode lain jika kondisi `if` tidak terpenuhi, tetapi kondisi ini terpenuhi.
* `else { ... }`: Menjalankan blok kode jika tidak ada kondisi yang terpenuhi sebelumnya.

---