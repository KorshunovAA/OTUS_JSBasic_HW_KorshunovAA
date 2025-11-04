
// ДЗ 9.1
//Даны длины трёх сторон треугольника. Определить, является ли треугольник прямоугольным.

function myTriangle (AB, BC, AC) {

    const maxEl = Math.max(AB, BC, AC);
    const minEl = Math.min(AB, BC, AC);
    const midEl = AB + BC + AC - maxEl - minEl;
    let MyErrFlag = false;

    console.log("ДЗ №9.1");

    if (AB === 0 || BC === 0 || AC === 0) {
        console.log(`   Одна из сторон (или стороны) равна нулю AB = ${AB}, BC = ${BC}, AC = ${AC}`);
        MyErrFlag = false;
        return MyErrFlag;
    }

    if ( (maxEl - (minEl + midEl)) > 0) {
        console.log(`   Из этих отрезков нельзя сформировать треугольник AB = ${AB}, BC = ${BC}, AC = ${AC}`);
        MyErrFlag = false;
        return MyErrFlag;
    }

    if (Math.round(Math.pow(maxEl, 2)) === Math.round(Math.pow(minEl, 2)) + Math.round(Math.pow(midEl, 2))) {
        console.log(`   Это прямоугольный треугольник со сторонами AB = ${AB}, BC = ${BC}, AC = ${AC}`);
        MyErrFlag = true;
    } else {
        console.log(`   Это НЕпрямоугольный треугольник со сторонами AB = ${AB}, BC = ${BC}, AC = ${AC}`);
        MyErrFlag = false;
    }

    return MyErrFlag;
}


myTriangle(4, 3, 5);
myTriangle(1.41, 1, 1);
myTriangle(1, 1, 1.4142135624);
myTriangle(5, 5, 5);
myTriangle(0, 0, 0);
myTriangle(5, 0, 0);
myTriangle(3, 7, 3);


// ДЗ 9.2
//Пользователь вводит число R. Написать программу, которая выведет в консоль длину окружности и площадь круга с радиусом R.


console.log("ДЗ №9.2");

const myRadius = prompt("Введите Радиус");
const circumference = 2 * Math.PI * myRadius;
const areaOfCircle = Math.PI * Math.pow(myRadius, 2);

console.log("   Длина окружности = ", circumference);
console.log("   Площадь круга = ", areaOfCircle);
console.log(Math.PI);



// ДЗ 9.3
//Пользователь вводит числа a, b и c. Написать программу, выводящую корни квадратного уравнения с коэффициентами a, b и c.

console.log("ДЗ №9.3");

function findRoots (coefA, coefB, coefC) {

    let otvet = "";
    let firstRoot = 0;
    let SecondRoot = 0;
// Найдем дискриминант

const discrim = coefB * coefB - 4 * coefA * coefC;

if (discrim < 0) {
    otvet = `   У этого уровнения ${coefA}x^2 +/- ${coefB} +/- ${coefC} нет корней"`;
} else if (discrim === 0) {
    firstRoot = (-1) * coefB / 2 * coefA;
    otvet = `   Найден один корень ${firstRoot}`;
} else {
    firstRoot = ((-1) * coefB + Math.sqrt(discrim)) / (2 * coefA);
    SecondRoot = ((-1) * coefB - Math.sqrt(discrim)) / (2 * coefA);
    otvet = `   Найдено два корня ${firstRoot} и ${SecondRoot}`;
}

return otvet;

}

const coefA = prompt("Введите коэффициент квадратного уравнения a");
const coefB = prompt("Введите коэффициент квадратного уравнения b");
const coefC = prompt("Введите коэффициент квадратного уравнения c");

console.log(findRoots(coefA, coefB, coefC));

console.log(findRoots(1, 4, 3)); // должен вернуть -1 и -3
console.log(findRoots(5, 2, -7)); // должен вернуть 1 и -1.4
console.log(findRoots(1, -6, 9)); // должен вернуть один корень 3