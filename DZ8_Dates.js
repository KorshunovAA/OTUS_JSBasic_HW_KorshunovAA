
//ДЗ №8.1
//Запросите у пользователя дату в формате ДД.ММ.ГГГГ. Напишите программу, выводящую день недели по введённой дате.

/*
const input = prompt('Введите дату в формате ДД.ММ.ГГГГ:');
const [day, month, year] = input.split('.');
const needDate = new Date(`${year}-${month}-${day}`); */

const input = prompt('Введите дату в формате ДД.ММ.ГГГГ:');
const arr = input.split('.') //Объявили массив
const needDate = new Date(`${arr[2]}-${arr[1]}-${arr[0]}`)

let myDay = needDate.getDay();
console.log("ДЗ №8.1");
switch (myDay) {
    case 0:
        console.log("   Воскресенье");
        break;
    case 1:
        console.log("   Понедельник");
        break;
    case 2:
        console.log("   Вторник");
        break;
    case 3:
        console.log("   Среда");
        break;
    case 4:
        console.log("   Четверг");
        break;
    case 5:
        console.log("   Пятница");
        break;
    case 6:
        console.log("   Суббота");
        break;
   
    default:
        console.log("   Неверно указана дата");
        break;
}

//ДЗ №8.2
//Написать программу, которая выводит в консоль количество минут, прошедшее с начала сегодняшнего дня.

const now = new Date();

const hrs = now.getHours();
const mins = now.getMinutes();

const minPass = (hrs * 60) + mins;

console.log("ДЗ №8.2");
console.log("   Вот столько минут прошло с начала сегодняшнего дня: ", minPass);


//ДЗ №8.3
//В двух переменных хранятся даты рождения двух пользователей в формате ДД.ММ.ГГГГ. Написать программу, которая определяет более молодого пользователя.

const drUser1 = '29.12.1978';
const drUser2 = '27.09.1982';

const date1 = GetNeedFormatDate(drUser1);
const date2 = GetNeedFormatDate(drUser2);

console.log("ДЗ №8.3");
if (date1 < date2) {
    console.log("   Пользователь №1 старше");
}
if (date1 > date2) {
    console.log("   Пользователь №2 старше");
}
if (drUser1 === drUser2){
    console.log("   Тот редкий случай когда абсолютно незнакомые люди родились в один день!");
}

function GetNeedFormatDate(str) {

const arrDate = str.split('.') //Объявили массив
const needFormat = new Date(`${arrDate[2]}-${arrDate[1]}-${arrDate[0]}`)

return needFormat;
}