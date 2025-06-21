---
sidebar_position: 1
---

# Introductions to dart

## Hello Word

First code dart

```jsx
void main(){

  print("Hello Word");

}
```
Example explained

```void main(){}``` This code main functions place is a whare code dart to run

```print();``` and this is code to display something on the screen

## Variable

What variable: is variable place to save data example String, Integeer, Dooble,

```jsx
void main (){

String name = 'Wildan';

int age = 170;

dooble width = 70.5;

print("Hello my name is: $name, i'm: $age cm, and my body: $width kg);

}
```
Example explained

``` String name = ''; ``` this code is variable string to save data string example alfabet with use ''

``` int age = 170; ``` This code is variable to save data number

``` double width = 70.5; ``` This code is variable to save data number desimal

## Operator

In code example operator aritmatematika

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
In the code program language dart support operator aritmatematika example ``` Multiplication *,   Division /, Addition +, subtraction -, ```


In code example operator equality and relationals operators
``` jsx
void main (){

var a = 1;

var b = 1;

print (a = b);

print (a != b );

print (a > b );

print (a < b );

print (a >= b );

print (a <= b );

}
```

In the code programe dart also support aquality and rational operators
example Equal =, Not equal !=,


## List
List in dart programming language is a data stack

``` jsx
void main (){

List <String> person=['Kholili', 'Yazid', 'Gufron', 'Wildan', 'Putra', 'Dafa'];

print(person);

print(person[1]);
print(person.length);

person[0] = 'Farhan'
print(person[0]);


person.removeAt(1);
print(person);

}

```

``` List<String> person = []; ``` This is code create data list with name person which type string.

``` print(person); ``` Take data and display to screen from list.

``` print(person[1]); ``` Take data certain and display to screen from list.

``` print(person.length) ``` take list for count length data then display to screen length from data.

``` person[1] = 'Farhan' ``` This code update data certain from list.

``` person.removeAt[1]; ``` delete data certain from list.

## Map

Map similar to list, but in map determined by key and value

``` jsx
void main() {
  Map<String, String> person = {};

  person['first'] = 'Wildan';
  person['midle'] = "Firmani";
  person['last'] = "Quraisi";

  print(person);
  print(person.length);

  print(person['first']);

  person['last'] = 'Bahrul';
  print(person['last']);

  person.remove('midle');
  print(person);
}

```

``` Map<String, String> person={} ``` Create map empety person with key string and value string.

``` person['first'] = 'Wildan'; ``` Create data in map person with key string first and value string wildan.

``` print(person['first']); ``` Take data in map person and display to screen.

``` perosn.remove('midle'); ``` delete data in with key to map person in key midle.

## Inspect

else if is code for check

``` jsx
void main() {
  var a = 5;

  if (a >= 10) {
    print("Is number big");
  } else {
    print("Number is litle");
  }
}
```
``` if (a >= b/10){}``` the is code for instpect value from variable a.
``` else {} ``` if execution fail so in this execution bloc in code.