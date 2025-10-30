---
sidebar_position: 6
---

# 🏗️ Object-Oriented Programming

**Object-Oriented Programming (OOP)** adalah paradigma pemrograman yang berfokus pada **objek**.  
Objek menyimpan **data (property)** dan **fungsi (method)**, sehingga program menjadi lebih **terstruktur, modular, dan mudah dikembangkan**.

Dalam Dart, OOP mencakup konsep berikut:
- **Class** → Blueprint atau cetak biru objek
- **Object** → Instansi nyata dari class
- **Property** → Variabel di dalam class
- **Method** → Fungsi di dalam class
- **Constructor** → Inisialisasi objek saat dibuat
- **Inheritance** → Pewarisan sifat dan method dari class lain

---

## 1️⃣ Membuat Class & Object Sederhana

Class adalah cetak biru untuk membuat object, sedangkan object adalah instansi nyata dari class.  

**Contoh:**

```jsx
void main() {
  Car myCar = Car();
  print(myCar.brand);
}

class Car {
  String brand = "Toyota";
}
````

**📘 Penjelasan Detail:**

* `class Car` → Mendefinisikan class `Car`. Class berisi property dan method.
* `String brand = "Toyota";` → Property `brand` menyimpan informasi tentang mobil.
* `Car myCar = Car();` → Membuat object `myCar` dari class `Car`.
* `print(myCar.brand);` → Mengakses property `brand` milik object `myCar`.
* **Output:** `Toyota`

✅ Dengan cara ini, kamu bisa membuat banyak object dari satu class dengan property berbeda.

---

## 2️⃣ Constructor & `const` Object

Constructor adalah method khusus yang digunakan untuk **menginisialisasi property** saat object dibuat.
Kamu bisa menggunakan **`const`** untuk membuat object yang **nilainya tetap** (tidak bisa diubah).

**Contoh:**

```jsx
void main() {
  var person = const Person('Wildan', 20);
  print(person.name);
  print(person.age);
}

class Person {
  final String name;
  final int age;

  const Person(this.name, this.age);
}
```

**📘 Penjelasan Detail:**

* `const Person(this.name, this.age);` → Constructor konstan yang membuat object immutable.
* `final` → Property hanya bisa diinisialisasi sekali, nilainya tidak bisa diubah setelah object dibuat.
* `Person('Wildan', 20)` → Membuat object dengan nilai `name` = Wildan dan `age` = 20.
* **Output:**

  ```
  Wildan
  20
  ```
* **Kegunaan:** Object const aman untuk data yang tidak boleh berubah (misal konfigurasi atau identitas unik).

---

## 3️⃣ Method dalam Class

Method adalah **fungsi di dalam class** yang bisa digunakan untuk menjalankan aksi pada object.

**Contoh:**

```jsx
void main() {
  var teacher1 = Teacher('Wildan', 1500.0);
  teacher1.info();

  var teacher2 = Teacher('Bahrul', 1000.0);
  teacher2.info();
}

class Teacher {
  String? name;
  double? salary;

  Teacher(this.name, this.salary);

  void info() {
    print('Name: $name');
    print('Salary: $salary');
  }
}
```

**📘 Penjelasan Detail:**

* `Teacher(this.name, this.salary)` → Constructor untuk mengisi property `name` dan `salary`.
* `void info()` → Method yang menampilkan informasi teacher.
* `teacher1.info();` → Memanggil method `info()` dari object `teacher1`.
* **Output:**

  ```
  Name: Wildan
  Salary: 1500.0
  Name: Bahrul
  Salary: 1000.0
  ```
* **Kegunaan:** Method membuat class lebih fleksibel karena bisa mengeksekusi logika atau aksi terkait object.

---

## 4️⃣ Inheritance (Pewarisan)

Inheritance memungkinkan satu class **mewarisi property dan method** dari class lain.
Class yang mewarisi disebut **child/subclass**, sedangkan class yang diwarisi disebut **parent/superclass**.

**Contoh:**

```jsx
void main() {
  var car = Brand();
  car.brand = 'Honda';
  car.model = 'Hrv';
  car.year = 2025;
  car.price = 1000000;
  car.start();   // Method dari parent class
  car.details(); // Method khusus child class
}

class Car {
  String? brand;

  void start() {
    print('Running');
  }
}

class Brand extends Car {
  late String model;
  late int year;
  late double price;

  void details() {
    print('Brand: $brand, Model: $model, Years: $year, Price: $price');
  }
}
```

**📘 Penjelasan Detail:**

* `class Brand extends Car` → Brand mewarisi semua property dan method dari Car.
* `start()` → Method dari parent class bisa dipanggil oleh object Brand.
* `details()` → Method tambahan khusus Brand.
* **Output:**

  ```
  Running
  Brand: Honda, Model: Hrv, Years: 2025, Price: 1000000.0
  ```
* **Kegunaan:** Inheritance membuat kode lebih efisien dan mengurangi duplikasi.

---

## 5️⃣ Contoh Object & Behavior

Kamu juga bisa membuat object yang mengeksekusi **aksi atau perilaku**.

```jsx
void main() {
  var person = Person();
  person.behavior();
}

class Person {
  String name = 'Wildan';

  void behavior() {
    print('$name is running');
  }
}
```

**📘 Penjelasan Detail:**

* Method `behavior()` mengeksekusi aksi yang terkait object.
* Property `name` digunakan di dalam method untuk personalisasi aksi.
* **Output:** `Wildan is running`
* **Kegunaan:** Menunjukkan interaksi object dengan method dan data di dalamnya.

---