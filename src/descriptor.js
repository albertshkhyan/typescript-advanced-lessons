//# example 1 - Оба вызова выше добавляют в объект user обычное (удаляемое, изменяемое, перечисляемое) свойство.

var user = {};

// 1. простое присваивание
user.name = "Вася";

// 2. указание значения через дескриптор
Object.defineProperty(user, "name", { value: "Вася", configurable: true, writable: true, enumerable: true });


//# example 2

"use strict";

var user = {};

Object.defineProperty(user, "name", {
    value: "Вася",
    writable: false, // запретить присвоение "user.name="
    configurable: false // запретить удаление "delete user.name"
});

// Теперь попытаемся изменить это свойство.

// в strict mode присвоение "user.name=" вызовет ошибку
user.name = "Петя";


//#example 4

var user = {
    name: "Вася",
    toString: function () { return this.name; }
};

// помечаем toString как не подлежащий перебору в for..in
Object.defineProperty(user, "toString", { enumerable: false });

for (var key in user) alert(key);  // name