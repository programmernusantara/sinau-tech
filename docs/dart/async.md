---
sidebar_position: 8
---

# ⚡ Asynchronous

Dalam pemrograman Dart, **asynchronous programming** memungkinkan kita menjalankan beberapa proses secara bersamaan tanpa harus menunggu satu proses selesai terlebih dahulu.  
Konsep ini sangat penting terutama ketika kita bekerja dengan tugas yang memakan waktu, seperti **pengambilan data dari internet**, **akses file**, atau **penundaan waktu**.

Dengan asynchronous, program tidak “macet” menunggu satu tugas selesai. Ia tetap bisa melanjutkan tugas lain sementara proses yang lama berjalan di latar belakang.

---

## ⏳ 1️⃣ Synchronous

Pada mode **synchronous**, setiap baris kode dijalankan **berurutan** (satu selesai → baru lanjut ke berikutnya).

**Contoh:**

```jsx
void main() {
  print('start');
  print('task');
  print('end');
}
````

**📘 Penjelasan:**

* Semua perintah dijalankan **secara urut**.
* Output:

  ```
  start
  task
  end
  ```
* Tidak ada proses yang menunggu atau berjalan bersamaan.

---

## 🔁 2️⃣ Asynchronous (Tanpa Await)

Dengan menggunakan **`Future.delayed()`**, kita bisa membuat tugas berjalan **di masa depan** (setelah jeda waktu tertentu) tanpa menghentikan eksekusi kode berikutnya.

**Contoh:**

```jsx
void main() {
  print('start');

  // Future.delayed() membuat tugas dijalankan setelah 3 detik
  Future.delayed(Duration(seconds: 3), () => print('task'));

  print('end');
}
```

**📘 Penjelasan:**

* `Future.delayed()` → Menjadwalkan tugas untuk dijalankan setelah waktu tertentu.
* Program **tidak menunggu** tugas selesai.
* Output:

  ```
  start
  end
  task
  ```
* Tugas `task` muncul paling akhir karena dijalankan setelah 3 detik.

---

## 🔮 3️⃣ Future dengan `.then()`

Kita bisa menangani hasil dari `Future` menggunakan **method `.then()`**, mirip dengan *callback* di bahasa lain.

**Contoh:**

```jsx
void main() {
  print('start');

  getDataThen().then((value) => print(value));

  print('end');
}

Future<String> getDataThen() async {
  // Simulasi pengambilan data selama 2 detik
  return Future.delayed(Duration(seconds: 2), () => 'Mark');
}
```

**📘 Penjelasan:**

* Fungsi `getDataThen()` mengembalikan `Future` bertipe `String`.
* `.then()` menangkap hasil saat proses Future selesai.
* Output:

  ```
  start
  end
  Mark
  ```
* Baris `Mark` muncul terakhir karena hasil dari Future.

---

## 🚀 4️⃣ Async / Await

Kata kunci **`async`** dan **`await`** membuat penulisan kode asynchronous menjadi **lebih mudah dibaca** seperti kode synchronous.

**Contoh:**

```jsx
void main() async {
  print('start');

  String result = await getDataAwait();
  print(result);

  print('end');
}

Future<String> getDataAwait() async {
  await Future.delayed(Duration(seconds: 3));
  return 'task';
}
```

**📘 Penjelasan:**

* `async` → Menandai fungsi berisi operasi asynchronous.
* `await` → Menunggu hasil Future sebelum lanjut ke baris berikutnya.
* Output:

  ```
  start
  task
  end
  ```
* Program menunggu hasil dari `getDataAwait()` sebelum mencetak `end`.

---

## 🧯 5️⃣ Async / Await dengan Error Handling (Try–Catch)

Dalam operasi asynchronous, kita juga bisa menangani **error** dengan blok `try–catch`.

**Contoh:**

```jsx
void main() {
  print('start');
  getUser();
  print('end');
}

Future<void> getUser() async {
  try {
    String data = await getData();
    print(data);
  } catch (err) {
    print('Some error: $err');
  }
}

Future<String> getData() async {
  // Simulasi pengambilan data selama 3 detik
  return Future.delayed(Duration(seconds: 3), () => 'Wildan');
}
```

**📘 Penjelasan:**

* `getUser()` → Fungsi asynchronous yang memanggil `getData()`.
* `try–catch` → Menangani error yang mungkin terjadi saat proses asynchronous.
* Output:

  ```
  start
  end
  Wildan
  ```
* Jika terjadi kesalahan, program menampilkan:
  `Some error: <pesan error>`
---