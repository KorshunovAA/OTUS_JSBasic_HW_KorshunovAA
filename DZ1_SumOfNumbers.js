// ДЗ №1.1
// Сумму и произведение двух чисел нужно найти

console.log("ДЗ №1.1");
console.log("Сумма чисел:", SumAndMulti(12.45, -1.81));

export function SumAndMulti(arg1, arg2) {
    // функция toFixed() возвращает стринг, поэтому впереди стоит "+", чтобы обратно преобразовать в число
    const summa = +(arg1 + arg2).toFixed(2);
    const proizv = +(arg1 * arg2).toFixed(2);
    return [summa, proizv];
}
//ДЗ №1.2
// В дыух переменных хранятся строки символов, нужно написать программу которая посчитает количество символов в обоих строках

console.log("ДЗ №1.2");
console.log("Количество символов в двух строках:", CountsNumberOfCharacters("Hello ", "world!"));
function CountsNumberOfCharacters (word_1, word_2) {return (word_1 + word_2).length;}

// ДЗ №1.3
// Написать программу, которая запрашивает у пользователя вводтрех значного числа, а потом выводит в консоль сумму цифр введённого числа

console.log("ДЗ №1.3");
console.log("   Сумма чисел трехзначного числа равна:", SumThreeDigitNumber(567));

function SumThreeDigitNumber (ThreeDigitNum) {
    //const ThreeDigitNum = prompt("Введите трехзначное число");
    //let sum = Number(ThreeDigitNum.charAt(0)) + Number(ThreeDigitNum.charAt(1)) + Number(ThreeDigitNum.charAt(2));
    const sum = String(ThreeDigitNum).split('').reduce((acc, digit) => acc + Number(digit), 0);

return sum;
}
