// ДЗ 10.1
//Пользователь вводит текстовую строку. Определить с помощьюрегулярного выражения, является ли введённая строка датой

function isItDate () {

    console.log("ДЗ №10.1");

    const stroka = prompt("Введите дату");
    // поддерживает формат дат типа 29/12/1978 с разделителями .-/
    const regexp = /(0[1-9]|[12]\d|3[01])+([\/]|[\.]|[\-])+(0[1-9]|1[12])+([\/]|[\.]|[\-])+([1-2]\d\d\d)/;

    if (regexp.test(stroka)) {
        console.log("   Это дата!");
        return true;
    } else {
        console.log("   Это НЕ дата");
        return false;
    }
}

isItDate();


// ДЗ 10.2
//Пользователь вводит текстовую строку. Определить с помощьюрегулярного выражения, является ли введённая строка email'ом

function isItEmail () {

    console.log("ДЗ №10.2");

    const stroka = prompt("Введите email");
    const regexp = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;

    if (regexp.test(stroka)) {
        console.log("   Это e-mail");
        return true;
    } else {
        console.log("   Это НЕ e-mail");
        return false;
    }
}

isItEmail();


// ДЗ 10.3
//Пользователь вводит текстовую строку. Определить с помощьюрегулярного выражения, является ли введённая строка телефоном

function isItNumberOfMobile () {

    console.log("ДЗ №10.3");

    const stroka = prompt("Введите номер телефона");
    const regexp = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

    if (regexp.test(stroka)) {
        console.log("   Это номер телефона!");
        return true;
    } else {
        console.log("   Это НЕ номер телефона");
        return false;
    }
}

isItNumberOfMobile();