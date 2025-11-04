
//ДЗ 2.1
//В переменных a и b хранятся числа. Вывести в консоль наибольшее из них

const a1 = 56;
const a2 = 4

console.log("ДЗ №2.1");
if (a1 > a2) {
   console.log("   Большее число:", a1);
} else {
   console.log("   Большее число:", a2);
}

//ДЗ 2.2
//Запросить у пользователя ввод числа от 1 до 12. Вывести в консоль название месяца, соответствующее этому числу (1 — январь, 2 — февраль и т.д.).

const monthNumber = Number(prompt("Введите номер месяца от 1 до 12:"));
console.log("ДЗ №2.2");
switch (monthNumber) {
    case 1:
        console.log("   Январь");
        break;
    case 2:
        console.log("   Февраль");
        break;
    case 3:
        console.log("   Март");
        break;
    case 4:
        console.log("   Апрель");
        break;
    case 5:
        console.log("   Май");
        break;
    case 6:
        console.log("   Июнь");
        break;
    case 7:
        console.log("Июль");
        break;
    case 8:
        console.log("   Август");
        break;
    case 9:
        console.log("   Сентябрь");
        break;
    case 10:
        console.log("   Октябрь");
        break;
    case 11:
        console.log("   Ноябрь");
        break;
    case 12:
        console.log("   Декабрь");
        break;

    default:
        console.log("   There are 12 months in a year");
        break;
}


// ДЗ 2.3
//В переменных circle и square хранятся площади круга и квадрата соответственно. Написать программу, которая определяет, поместится ли круг в квадрат.

const circle = 20;
const square = 50;
const pi = 3.14;

let lengthSideSquare = Math.sqrt(square);
let diameterCircle = 2*Math.sqrt(circle/pi);
console.log("ДЗ №2.3");
if (diameterCircle <= lengthSideSquare) {
    console.log("   Круг вписан в квадрат. Диаметр круга ", diameterCircle, " <= длины стороны квадрата ", lengthSideSquare);
} else {
    console.log("   Круг не вписался в квадрат. Диаметр круга ", diameterCircle, " > длины стороны квадрата ", lengthSideSquare);
}