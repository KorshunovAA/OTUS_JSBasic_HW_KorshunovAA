// ДЗ 3.1
//Вывести в консоль сумму всех целых чисел от 50 до 100.

let sumNumbers = 0;
let i = 50;
while (i <= 100) {
    
    sumNumbers = sumNumbers + i;

    i = i + 1;
}
console.log("ДЗ №3.1");
console.log("   Сумма целых чисел от 50 до 100 = ", sumNumbers);

// ДЗ 3.2
//Вывести в консоль таблицу умножения на 7

let j = 1;
let resultOfMulti = 0;
console.log("ДЗ №3.2");
while (j <= 9) {
    
    resultOfMulti = 0;
    resultOfMulti = 7 * j;
    console.log("   7 *", j , " = " , resultOfMulti);
    j = j + 1;
}



// ДЗ 3.3
//Запросить у пользователя ввод числа N. Вывести в консоль среднее арифметическое всех нечётных чисел от 1 до N

let sumOddNumbers = 0; // Сумма всех нечетных чисел
let k = 1; 
let colOdd = 0; // Количество всех нечетных чисел в ряду
let anyNumber = prompt("Введите любое число: ");
while (k <= anyNumber) {
    
    if (k % 2 !== 0) {
        sumOddNumbers = sumOddNumbers + k;
        colOdd = colOdd + 1;
    }

    k = k + 1;
}

console.log("ДЗ №3.3");
console.log("   Среднее арифметическое всех нечетных чисел от 1 до " , anyNumber , " = ", sumOddNumbers / colOdd);