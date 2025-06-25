---

sidebar_position: 2

---

# 🧱 Object-Oriented Programming

**OOP (Object-Oriented Programming)** is a programming approach that organizes code based on **objects**.

An object is a combination of:

* **Data** → called **properties** or **attributes**
* **Functions** → called **methods** or **behaviors**

---

🌍 Real-World Example

Imagine an **object**: 🚗 Car

**Properties (characteristics of the car):**

* 🎨 Color
* 🏷️ Brand
* ⚡ Speed

**Methods (what the car can do):**

* ▶️ `driveForward()` → move forward
* ◀️ `reverse()` → move backward
* 🛑 `brake()` → stop

---

## 💻 OOP Example in Dart Language

```jsx
void main() {
  // Creating a car object
  Car myCar = Car();
  myCar.go();
}

// Creating a class (template for objects)
class Car {
  // Properties
  String brand = "Toyota";
  int speed = 120;

  // Method (behavior)
  void go() {
    print('The $brand car is moving at $speed km/h.');
  }
}
```

---

📝 Explanation

* `class Car {}` → Defines a **class** named `Car` as a **template** to create car objects.
* `String brand = "Toyota";` → Stores the car brand as a **property**.
* `void go() {}` → A function or **method** that shows the object’s behavior when executed.

---
