---
sidebar_position: 1
---

# 🚀 Introduction

Selamat datang di bahasa pemrograman **Dart**!  
Dart adalah bahasa pemrograman yang mudah dipelajari dan skalabel, digunakan untuk membangun aplikasi **seluler**, **web**, dan **sisi server**.

Dalam panduan ini, Anda akan mempelajari dasar-dasar Dart melalui contoh-contoh yang jelas dan mudah dipahami.

---

## 👋 Hello World

Berikut adalah program Dart pertama Anda:

```jsx
void main() {
  print("Hello World");
}
````

📘 **Penjelasan:**

* `void main() {}`: Titik masuk dari setiap aplikasi Dart.
* `print()`: Mencetak teks ke konsol.

---

## 🧺 Data Types

Variabel adalah wadah untuk menyimpan nilai data.

```jsx
void main() {
  int num = 10;
  double precision = 100.00;
  String alfabet = 'Wildan';
  List list = [1, 2, 3];
  Map map = {
    'First': 'Wildan',
    'Middle': 'Firmani',
    'Last': 'Quraisi',
  };

  print(
    'Number: $num, Decimal: $precision, String: $alfabet, List: $list, Map: $map',
  );
}
```

📘 **Penjelasan:**

* `int`: Untuk bilangan bulat.
* `double`: Untuk bilangan desimal.
* `String`: Untuk teks.
* `List`: Untuk daftar nilai.
* `Map`: Untuk pasangan kunci-nilai.

---

## ➕ Operators

🔢 Arithmetic Operators

```jsx
void main() {
  var a = 10;
  var b = 5;

  print(a * b); // Perkalian
  print(a / b); // Pembagian
  print(a + b); // Penjumlahan
  print(a - b); // Pengurangan
}
```

* `*` Perkalian
* `/` Pembagian
* `+` Penjumlahan
* `-` Pengurangan

---

🔍 Comparison Operators

```jsx
void main() {
  var a = 1;
  var b = 1;

  print(a == b);  // Sama dengan
  print(a != b);  // Tidak sama dengan
  print(a > b);   // Lebih besar dari
  print(a < b);   // Lebih kecil dari
  print(a >= b);  // Lebih besar atau sama dengan
  print(a <= b);  // Lebih kecil atau sama dengan
}
```

* `==` Sama dengan
* `!=` Tidak sama dengan
* `>` Lebih besar dari
* `<` Lebih kecil dari
* `>=` Lebih besar atau sama dengan
* `<=` Lebih kecil atau sama dengan

---

## 📥 User Input

Berikut contoh untuk menerima input dari pengguna:

```jsx
import 'dart:io';

void main() {
  print('Masukkan Nama:');
  String? name = stdin.readLineSync();

  print('Nama Anda: $name');
}
```

📘 **Penjelasan:**

* `stdin.readLineSync()`: Digunakan untuk membaca input dari pengguna melalui terminal.
* `String? name`: Tanda `?` menunjukkan bahwa variabel bisa bernilai null (nullable).

---