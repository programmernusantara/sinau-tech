---

sidebar_position: 1

---

# 🚀 Flutter Framework

Framework adalah alat bantu yang memudahkan kita dalam membuat aplikasi.
Daripada membangun semuanya dari nol, framework sudah menyediakan struktur, aturan, dan fitur dasar, sehingga kita bisa fokus pada bagian penting dari aplikasi.

Bayangkan framework seperti **kerangka rumah yang sudah jadi**:
Kita tidak perlu membangun pondasi dan tembok dari awal — cukup mengisi, mengecat, dan menghiasnya.

**Flutter** adalah **framework open-source** buatan **Google** yang menggunakan bahasa pemrograman **Dart**.

Dengan Flutter, kamu bisa membuat aplikasi **multi-platform** (Android, iOS, Web, dan Desktop) dari **satu basis kode** yang sama dan dikompilasi secara native.

---

## 💡 Contoh Kode Flutter Sederhana

Berikut contoh aplikasi Flutter sederhana yang menampilkan tombol untuk menambahkan angka:

```jsx
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});
  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  void _incrementCounter() {
    setState(() {
      _counter++;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text('You have pushed the button this many times:'),
            Text(
              '$_counter',
              style: Theme.of(context).textTheme.headlineMedium,
            ),
          ],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: _incrementCounter,
        tooltip: 'Tambah',
        child: const Icon(Icons.add),
      ),
    );
  }
}
```
---