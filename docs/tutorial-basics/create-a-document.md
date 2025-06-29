---
sidebar_position: 2
---

# 🧱 OOP (Object-Oriented Programming)

**OOP (Object-Oriented Programming)** adalah pendekatan pemrograman yang mengorganisasi kode berdasarkan **objek**. Pendekatan ini membuat program lebih terstruktur, mudah dikembangkan, dan dapat digunakan kembali (*reusable*).

---

## 🔹 Apa Itu Objek?

Objek terdiri dari dua bagian utama:

- **Properti** → data atau atribut yang dimiliki objek  
- **Metode** → fungsi atau aksi yang dapat dilakukan oleh objek  

---

## 🌍 Contoh Dunia Nyata

Bayangkan sebuah objek **🚗 Mobil**:

### ✅ Properti (atribut mobil):
- 🎨 Warna  
- 🏷️ Merek  
- ⚡ Kecepatan  

### ✅ Metode (aksi yang dapat dilakukan mobil):
- ▶️ `driveForward()` → maju  
- ◀️ `reverse()` → mundur  
- 🛑 `brake()` → berhenti  

---

## 💻 Class (Kelas)

Dalam OOP, kita menggunakan **class** untuk mendefinisikan bentuk dan perilaku objek. Berikut contoh sederhana dalam bahasa **Dart**:

```jsx
void main() {
  Car myCar = Car();
  print(myCar.brand);
}

class Car {
  String brand = "Toyota";
}
````

### 📝 Penjelasan Kode:

* `class Car {}` → Mendefinisikan class bernama `Car` sebagai *template* objek.
* `String brand = "Toyota";` → Properti `brand` dalam class `Car`.
* `Car myCar = Car();` → Membuat objek baru `myCar` dari class `Car`.
* `print(myCar.brand);` → Menampilkan nilai properti `brand` milik `myCar`.

---

## 🛠️ Constructor (Konstruktor)

**Constructor** adalah fungsi khusus dalam class yang digunakan untuk membuat dan menginisialisasi objek baru.

```jsx
void main() {
  var person = Person("Wildan");
  print(person.name);
}

class Person {
  String name;

  Person(this.name);
}
```

### 📝 Penjelasan Kode:

* `class Person` → Mendefinisikan class `Person`.
* `String name;` → Properti `name` dari class.
* `Person(this.name);` → Konstruktor yang langsung mengisi nilai `name`.
* `var person = Person("Wildan");` → Membuat objek `person` dan mengatur namanya menjadi `"Wildan"`.
* `print(person.name);` → Menampilkan nama dari objek `person`.

---