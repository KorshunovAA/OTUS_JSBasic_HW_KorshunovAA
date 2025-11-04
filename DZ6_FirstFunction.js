
// ДЗ №6.1
// Напишите функцию diff, которая получает в качестве параметров 2 числа и возвращает разницу между наибольшим и наименьшим.

function diff(a, b) {
    let c = 0;
    if (a > b) {
        c = a - b;
    } else {
        c = b - a;
    }
    return c;
}

console.log("ДЗ №6.1");
console.log("   Разница двух чисел",  diff(-1, 5));

// ДЗ №6.2
// Напишите функцию isWord, которая принимает на вход текстовую строку. Функция возвращает true, если строка состоит из одного слова и false, если из нескольких.

function isWord(text) {

    let haveSpace;
    if (text.indexOf(' ') === -1) {
        haveSpace = false;
    } else {
        haveSpace = true;
    }
return haveSpace;
}

console.log("ДЗ №6.2");
console.log("   Наличие нескольких слов в строке \"Hi, people! I\'m there\"",  isWord("Hi, people! I\'m there"));
console.log("   Наличие нескольких слов в строке \"Hi,people!I\'mthere\"",  isWord("Hi,people!I\'mthere"));

// ДЗ №6.3
// Напишите функцию pow(a, x), которая вернёт значение числа a, возведённого в степень x.

function pow(a, x) {

    let i = 1;
    let powerOfNumder;

    if (x === 0) {
        powerOfNumder = 1;
    }
    if (x > 0) {
        powerOfNumder = 1;
        while (i <= x) {
        
        powerOfNumder = powerOfNumder * a;
        i = i + 1;
        }    
    }

    if (x < 0) {
        powerOfNumder = 1;
        x = x * (-1);
        while (i <= x) {
        
        powerOfNumder = powerOfNumder * a;
        i = i + 1;
        }
        powerOfNumder = 1 / powerOfNumder;
    }
    
return powerOfNumder;
}

console.log("ДЗ №6.3");
console.log("   12 в степени 2 =",  pow(12, 2));
console.log("   3 в степени 3 =",  pow(3, 3));
console.log("   256 в степени 1 =",  pow(256, 1));
console.log("   29 в степени 0 =",  pow(29, 0));
console.log("   2 в степени -1 =",  pow(2, -1));
console.log("   2 в степени -2 =",  pow(2, -2));