---
sidebar_position: 2
---

# 🧱 OOP (Object-Oriented Programming)

**OOP (Object-Oriented Programming)** adalah pendekatan pemrograman yang mengorganisasi kode berdasarkan **objek**. Pendekatan ini membantu membuat program lebih terstruktur, mudah dikembangkan, dan dapat digunakan kembali (*reusable*).

🔹Apa Itu Objek?

Objek terdiri dari dua bagian utama:

- **Properti** → data atau atribut yang dimiliki objek  
- **Metode** → fungsi atau perilaku yang dapat dilakukan objek  

---

🌍 Contoh Dunia Nyata

Bayangkan sebuah objek: **🚗 Mobil**

✅ Properti (atribut mobil):
- 🎨 Warna  
- 🏷️ Merek  
- ⚡ Kecepatan  

✅ Metode (aksi yang dapat dilakukan mobil):
- ▶️ `driveForward()` → maju  
- ◀️ `reverse()` → mundur  
- 🛑 `brake()` → berhenti  

---

## 💻 Class

Dalam OOP, kita menggunakan **class** untuk mendefinisikan bentuk dan perilaku objek. Berikut contoh sederhana menggunakan bahasa **Dart**:

```jsx
void main() {
  Car myCar = Car();
  print(myCar.brand);
}

class Car {
  String brand = "Toyota";
}
````

---

📝 Penjelasan Kode

* `class Car {}` → Mendefinisikan **class** bernama `Car` sebagai template.
* `String brand = "Toyota";` → Menyimpan nilai properti `brand` pada class `Car`.
* `Car myCar = Car();` → Membuat objek `myCar` dari class `Car`.
* `print(myCar.brand);` → Menampilkan isi properti `brand` milik objek `myCar`.

---