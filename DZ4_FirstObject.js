// ДЗ 4.1
// Создайте объект user, содержащий поле name со значением ‘John’.
// Запросить у пользователя ввод числа. Записать введенное значение в поле age объекта user.

const user = {
    name: 'John'    
}

user.age = prompt("Введите число:");
console.log("ДЗ №4.1");
console.log("   Значение поля user.age = ", user.age);

// ДЗ 4.2
// Создать копию объекта user с именем admin. Добавить новому объекту поле role со значением ‘admin’.

const admin = Object.assign({}, user, {role: "admin"})

console.log("ДЗ №4.2");
console.log("   Значения объекта admin:", admin);


// ДЗ 4.3
// Записать все значения полей объекта admin в отдельные переменные. Имена переменных должны совпадать с названиями полей.

let {name, age, role} = admin;

console.log("ДЗ №4.3");
console.log("   Значения переменной name:", name);
console.log("   Значения переменной age:", age);
console.log("   Значения переменной role:", role);