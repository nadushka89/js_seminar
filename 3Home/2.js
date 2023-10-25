"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

const numUser = Number(prompt("Введите число:"));

function numAnalize(num) {
    if (isNaN(num)) {
        console.log("Значение задано неверно");
    } else {
        const money = num - num * 0.13;
        console.log(`Размер заработной платы за вычетом налогов равен ${money}`);
    }
}

numAnalize(numUser);
