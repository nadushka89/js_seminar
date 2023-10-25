"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const num1 = Number(prompt("Введите 1 число:"));
const num2 = Number(prompt("Введите 2 число:"));
const num3 = Number(prompt("Введите 3 число:"));

function findMax(num1, num2, num3) {
    return Math.max(num1, num2, num3);
}

function findMax2(num1, num2, num3){
    if (num1>num2 && num1>num3){
        return num1;
    } else if (num2>num1 && num2>num3){
        return num2;
    } return num3;
}

console.log(`Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${findMax(num1, num2, num3)}`);

console.log(`Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${findMax2(num1, num2, num3)}`);