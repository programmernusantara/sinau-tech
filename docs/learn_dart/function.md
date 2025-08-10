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