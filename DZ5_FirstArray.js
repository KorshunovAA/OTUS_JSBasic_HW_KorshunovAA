// ДЗ №5.1
//Выведите в консоль сумму всех элементов массива.

let firstArray = [1, -43, 56, 44, 12, 29, 101, 2345, 0, 99];

let i = 0;
let  summaElementsArr = 0;


while (i < firstArray.length) {
        
    summaElementsArr =  summaElementsArr + Number(firstArray[i]);
    i = i + 1;
}
console.log("ДЗ №5.1");
console.log("   Cумма всех элеиментов массива:",  summaElementsArr);

// ДЗ №5.2
// Создайте новый массив на основе исходного, в котором каждый элемент будет вдвое больше элемента исходного массива с таким же индексом.
//  (a[1] = 3, b[1] = 6, где a — исходный массив, b — новый массив).

let SecondArray = firstArray.map(function (el) {
    let NewValue = el * 2;
    return NewValue;
});
console.log("ДЗ №5.2");
console.log("   Элементы второго массива:",  SecondArray);

// ДЗ №5.3
// Найдите и выведите в консоль наибольший и наименьший элементы исходного массива.

let minEl = 0;
let maxEl = 0;
SecondArray.forEach(function (el) {
    if (el < minEl) {
        minEl = el;
    }
    if (el > maxEl) {
        maxEl = el;
    }
});
console.log("ДЗ №5.3");
console.log("   Минимальный элемент массива:",  minEl);
console.log("   Максимальный элемент массива:",  maxEl);
