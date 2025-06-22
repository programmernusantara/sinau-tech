---
sidebar_position: 1
---

# 🚀 Introduction to Dart

Welcome to the Dart programming language! Dart is an easy-to-learn, scalable language used for building mobile, web, and server applications. In this guide, you'll learn the basics of Dart with clear examples.

---

## 👋 Hello World

This is your first Dart program:

```jsx
void main() {
  print("Hello World");
}
```

📘 Explanation

* `void main() {}`: Entry point of every Dart app.
* `print()`: Prints text to the console.

---

## 🧺 Variables

Variables are containers for storing data values.

```jsx
void main() {
  String name = 'Wildan';
  int height = 170;
  double weight = 70.5;

  print("Hello, my name is $name. I'm $height cm tall and weigh $weight kg.");
}
```

📘 Explanation

* `String`: For text values.
* `int`: For integer numbers.
* `double`: For decimal numbers.

---

## ➕ Operators

🔢 Arithmetic Operators

```jsx
void main() {
  var a = 10;
  var b = 5;

  print(a * b);
  print(a / b);
  print(a + b);
  print(a - b);
}
```

* `*` Multiply
* `/` Divide
* `+` Add
* `-` Subtract

🔍 Comparison Operators

```jsx
void main() {
  var a = 1;
  var b = 1;

  print(a == b);
  print(a != b);
  print(a > b);
  print(a < b);
  print(a >= b);
  print(a <= b);
}
```

* `==` Equal
* `!=` Not Equal
* `>` Greater than
* `<` Less than
* `>=` Greater or equal
* `<=` Less or equal

---

## 📦 Lists

A `List` is an ordered group of items.

```jsx
void main() {
  List<String> people = ['Kholili', 'Yazid', 'Gufron', 'Wildan', 'Putra', 'Dafa'];

  print(people);
  print(people[1]);
  print(people.length);

  people[0] = 'Farhan';
  print(people[0]);

  people.removeAt(1);
  print(people);
}
```

📘 Explanation

* `List<String>`: A list of strings.
* `people[1]`: Access item at index 1.
* `people.length`: Total items in the list.
* `removeAt(index)`: Removes item at a position.

---

## 🗺️ Maps

Maps store data in key-value pairs.

```jsx
void main() {
  Map<String, String> person = {};

  person['first'] = 'Wildan';
  person['middle'] = "Firmani";
  person['last'] = "Quraisi";

  print(person);
  print(person.length);
  print(person['first']);

  person['last'] = 'Bahrul';
  print(person['last']);

  person.remove('middle');
  print(person);
}
```

📘 Explanation

* `Map<Key, Value>`: Defines a map.
* `person['key']`: Access a value.
* `remove('key')`: Deletes the key-value pair.

---

## 🔎 Conditionals

✅ if - else

```jsx
void main() {
  var a = 5;

  if (a >= 10) {
    print("The number is big.");
  } else {
    print("The number is small.");
  }
}
```

📘 Explanation

* `if` tests a condition.
* `else` runs if `if` is false.

---

## 🎛️ Switch Case

Used to simplify multiple condition checks.

```jsx
void main() {
  var grade = 'A';

  switch (grade) {
    case 'A':
      print('You graduated with good grades.');
      break;
    default:
      print('You need to repeat the semester.');
  }
}
```

📘 Explanation

* `switch(variable)` starts the check.
* `case` defines values to check.
* `break` ends the block.
* `default` runs if nothing matches.

---

## 🔁 For Loop

Repeats code multiple times.

```jsx
void main() {
  for (int i = 0; i <= 10; i++) {
    print("Repetition number $i");
  }
}
```

📘 Explanation

* `for(init; condition; update)` creates a loop.
* `i++` increases the counter.

---

## 🧩 Functions

Functions help reuse code efficiently.

```jsx
void hello() {
  print('Hello World');
}

void greet(String name) {
  print('Hi, $name!');
}

void main() {
  hello();
  greet('Wildan');
}
```

📘 Explanation

* `void hello()` defines a function.
* `greet(String name)` takes input.
* `main()` calls both functions.

---

✅ You’ve reached the end of the Dart basics documentation. Keep experimenting and happy coding with Dart! 💙