'use strict';

/*
Дан объект numbers. 
Необходимо в консоль вывести все значения объекта, которые больше или равны 3.
*/

const numbers = {
  key1: 12,
  key2: 2,
  key3: 4,
  key4: 1,
  key5: -244,
  key6: 0,
  key7: 7,
};

const numbs = Object.values(numbers);
const newNumbers = numbs.filter((numb) => numb >= 3);
console.log(newNumbers);