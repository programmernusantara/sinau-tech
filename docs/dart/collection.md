---
sidebar_position: 4
---

# 🧾 Collection

Dalam bahasa Dart, terdapat beberapa **struktur data koleksi** yang digunakan untuk menyimpan banyak nilai sekaligus, yaitu:

- **List** → Kumpulan data berurutan dan dapat diakses dengan indeks.  
- **Set** → Kumpulan data unik (tidak boleh ada elemen yang sama).  
- **Map** → Kumpulan pasangan *key-value* (mirip dengan kamus).

Setiap struktur data memiliki karakteristik dan kegunaannya masing-masing dalam pengelolaan data.

---

## 📋 List

**List** adalah kumpulan data yang dapat menyimpan lebih dari satu nilai dalam satu variabel.  
List sangat berguna ketika kamu ingin menyimpan banyak data dengan tipe yang sama.

**Contoh:**

```jsx
void main() {
  List<String> user = ['Wildan', 'Gufron', 'Fahrur'];
  print(user);
  print(user[1]);
  print(user.length);
}
````

**📘 Penjelasan:**

* `List<String> user = ['Wildan', 'Gufron', 'Fahrur'];`
  → Membuat list bertipe `String` berisi tiga elemen.

* `print(user);`
  → Menampilkan seluruh isi list:
  **Output:** `['Wildan', 'Gufron', 'Fahrur']`

* `print(user[1]);`
  → Mengakses elemen ke-2 (indeks dimulai dari 0):
  **Output:** `Gufron`

* `print(user.length);`
  → Menampilkan jumlah elemen dalam list:
  **Output:** `3`

---

## 🍎 Set

**Set** digunakan untuk menyimpan kumpulan data **unik**, artinya tidak boleh ada elemen yang sama.
Urutan elemen dalam Set **tidak dijamin berurutan** seperti List.

**Contoh:**

```jsx
void main() {
  Set<String> fruits = {'Apple', 'Manggo', 'Banana'};
  print(fruits);
}
```

**📘 Penjelasan:**

* `Set<String> fruits = {'Apple', 'Manggo', 'Banana'};`
  → Membuat sebuah himpunan (Set) dengan tiga elemen bertipe `String`.

* `print(fruits);`
  → Menampilkan seluruh isi Set.
  **Output (tidak selalu berurutan):** `{Apple, Manggo, Banana}`

---

## 🗺️ Map

**Map** menyimpan data dalam bentuk **pasangan key dan value**.
Key harus **unik**, dan digunakan untuk mengakses nilai (value) yang terkait dengannya.
Map sering digunakan untuk menyimpan data seperti nama-kota, negara-ibu kota, atau id-nama.

**Contoh:**

```jsx
void main() {
  Map<String, String> countryCapital = {
    'USA': 'Washington, D.C.',
    'Indonesia': 'Jakarta',
    'China': 'Beijing',
  };
  print(countryCapital);
}
```

**📘 Penjelasan:**

* `Map<String, String>` → Tipe data `Map` dengan key dan value bertipe `String`.
* `'USA': 'Washington, D.C.'` → Key `'USA'` memiliki value `'Washington, D.C.'`.
* `print(countryCapital);` → Menampilkan seluruh isi Map:
  **Output:** `{USA: Washington, D.C., Indonesia: Jakarta, China: Beijing}`

---