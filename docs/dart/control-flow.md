---
sidebar_position: 2
---

# 🔁 Control Flow

Dalam pemrograman, sering kali kita perlu membuat program merespons kondisi tertentu secara dinamis. Untuk itu, kita menggunakan **struktur kontrol alur (control flow)**.

Bahasa Dart menyediakan beberapa struktur kontrol utama seperti `if-else`, `switch-case`, `for`, dan `while`, yang memungkinkan kita menentukan jalannya eksekusi program berdasarkan kondisi yang berbeda.

---

## Else If

Pernyataan `if-else if-else` digunakan untuk mengevaluasi beberapa kondisi secara berurutan. Eksekusi berhenti pada kondisi pertama yang bernilai **true**.

Contoh:
```jsx
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

📘 Penjelasan:

* `if (kondisi)`:
  Menjalankan blok kode jika kondisi pertama bernilai benar.

* `else if (kondisi_lain)`:
  Diperiksa jika kondisi `if` salah. Jika benar, blok ini dijalankan.

* `else`:
  Menjalankan blok kode ini jika semua kondisi sebelumnya salah.

---

## Switch Case

`switch-case` digunakan ketika Anda ingin membandingkan satu variabel dengan banyak kemungkinan nilai tetap. Ini lebih rapi daripada menggunakan banyak `if-else`.

Contoh:

```jsx
void main() {
  var hariDalamMinggu = 1;

  switch (hariDalamMinggu) {
    case 1:
      print('Hari Senin');
      break;
    case 2:
      print('Hari Selasa');
      break;
    case 3:
      print('Hari Rabu');
      break;
    case 4:
      print('Hari Kamis');
      break;
    case 5:
      print('Hari Jumat');
      break;
    case 6:
      print('Hari Sabtu');
      break;
    case 7:
      print('Hari Minggu');
      break;
    default:
      print('Hari tidak valid');
  }
}
```

📘 Penjelasan:

* `switch (nilai)`:
  Memeriksa nilai yang diberikan.

* `case nilai:`
  Jika cocok, blok kode berikut dijalankan.

* `break;`:
  Menghentikan eksekusi dan keluar dari `switch`.

* `default:`
  Menangani semua nilai yang tidak cocok dengan case manapun.

---

## For Loop

 Loop digunakan untuk mengeksekusi blok kode berulang kali selama kondisi tertentu terpenuhi.
 `for` digunakan saat jumlah iterasi sudah diketahui.

```jsx
void main() {
  for (var i = 0; i <= 10; i++) {
    print('Iterasi: $i');
  }
}
```

📘 Penjelasan:

* `var i = 0` → Inisialisasi variabel iterator.
* `i <= 10` → Kondisi perulangan.
* `i++` → Increment setelah setiap iterasi.
* Blok `print(...)` akan dijalankan sebanyak 11 kali (0 sampai 10).

---

## While Loop

`while` digunakan saat jumlah perulangan **tidak pasti**, dan bergantung pada kondisi logis.

```jsx
void main() {
  int count = 1;

  while (count <= 10) {
    print(count++);
  }
}
```

📘 Penjelasan:

* `int count = 1` → Inisialisasi nilai awal.
* `while (count <= 10)` → Perulangan akan terus berjalan selama kondisi ini **benar**.
* `print(count++)` → Mencetak lalu menambah `count` satu per satu.

---