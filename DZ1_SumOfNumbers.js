// ДЗ №1.1
// Сумму и произведение двух чисел нужно найти

const a = 3;
const b = .5;
summa = a + b;
proizv = a * b;
console.log("ДЗ №1.1");
console.log("   Сумма чисел:", summa);
console.log("   Произведение чисел:", proizv);


// ДЗ №1.2
//в двух переменных хранятся строки символов. Написать программу, которая выведет в консоль суммарное количество символов в обоих строках. 

const word_1 = "Hello ";
const word_2 = "world!";
let allWords = word_1 + word_2;
console.log("ДЗ №1.2");
console.log("   Количество символов в двух строках:", allWords.length)

// ДЗ №1.3
//написать программу, которая запрашивает у пользователя ввод трёхзначного числа, а потом выводит в консоль сумму цифр введённого числа. 

const ThreeDigitNum = prompt("Введите трехзначное число");
let sum = Number(ThreeDigitNum.charAt(0)) + Number(ThreeDigitNum.charAt(1)) + Number(ThreeDigitNum.charAt(2));
console.log("ДЗ №1.3");
console.log("   Сумма чисел трехзначного числа равна:", sum);