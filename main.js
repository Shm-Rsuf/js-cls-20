"use strict";
/* FOR-EACH METHOD */

/* const movements = [1000, -700, 1200, -650, 1550, -590, 2100, -1350];

movements.forEach((move) => {
  console.log(`${move / 2}`);
});

const footballPlayers = ['Messi', 'Neymar', 'Mbappe', 'Ramous', 'Donaroma', 'Hakimi', 'Varetti'];

footballPlayers.forEach((player, i) => console.log(`${i + 1}: ${player}`)); */

/* MAP METHOD */

/* const favColors = [
  "red",
  "green",
  "tomato",
  "pink",
  "crimson",
  "black",
  "blue",
  "purple",
];

const favColorsUpperCase = favColors.map(
  (color) => color[0].toUpperCase() + color.slice(1)
);

console.log(favColorsUpperCase);

const numbers = [55, 77, 99, 111, 44, 88, 100];

const newNumbers = numbers.map((num) => num - 10);
console.log(newNumbers); */

/* FILTER METHODS */

/* const favColorP = favColors.filter((color) => color.startsWith("p"));
console.log(favColorP);

const newTransection = movements.filter((mov) => mov > 0 && mov);
console.log(newTransection); */

/* REDUCE METHODS */

/* const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 99];

const addArr1 = arr.reduce((acc, value) => acc + value, 0);
console.log(addArr1);

const mulArr = arr.reduce((acc, el) => acc * el, 1);
console.log(mulArr);

const maxValue = arr.reduce(
  (acc, vlue) => (acc > vlue ? acc : vlue),
  arr.flat(0)
);
console.log(maxValue);

const minValue = arr.reduce(
  (acc, value) => (acc < value ? acc : value),
  arr.flat(0)
);
console.log(minValue); */

/* DATA TRANSFORMATION PIPELINE */

/* const movements2 = [1000, -700, 1200, -650, 1550, -590, 2100, -1350];

const totalDeposit = movements2
  .filter((move) => move > 0)
  .map((deposit) => deposit * 1.2)
  .reduce((acc, value) => acc + value, 0);

console.log(totalDeposit);

const moneyRobbed = [15000, 25000, 35000, 14000, 25000, 7500];

const totalMoney = moneyRobbed
  .filter((money) => money > 10000)
  .map((money) => money / 2)
  .filter((money) => money > 10000)
  .reduce((acc, money) => acc + money, 0); 
  console.log(totalMoney);
  */

/* FIND METHODS
******************
এই মেথডটি নিদ্দিষ্ট একটা শর্তের উপর ভিত্তি করে শুধুমাত্র একটা ভালু রিটার্ন করে।
*/

/* const students = [
  { name: "Arif", id: 11 },
  { name: "Usuf", id: 12 },
  { name: "Jony", id: 13 },
  { name: "Atik", id: 14 },
  { name: "Nafiul", id: 15 },
  { name: "Tozam", id: 16 },
];

// console.log(students.at(0).name);

const id15 = students.find((student) => student.id === 12);
console.log(id15.name);

const nameWithN = students.find((student) => student.name.startsWith("N"));
console.log(nameWithN); */

/* SOME AND EVERY METHODS
****************************
(SOME AND EVERY) মেথড মুলুত বুলিয়ান ভালু রিটার্ন করে। কোনো একটা শর্তও যদি পুরুন করে তবে সেক্ষেত্রে সাম(SOME) মেথড (TRUE) রিটার্ন করবে।
আর যদি সবগুলো শর্তই যদি সত্য হয় তাহলে এভরি (EVERY) মেথড (TRUE) রিটার্ন করবে।
*/

/* const someEveryArr = [10, 15, 63, 35, 73, 83, 93, 67, 99];

const someArr = someEveryArr.some((number) => number > 95);
const someArr2 = someEveryArr.some((number) => number > 195);

console.log(someArr);
console.log(someArr2);

const everyArr = someEveryArr.every((num) => num >= 10);
const everyArr2 = someEveryArr.every((num) => num > 10);

console.log(everyArr);
console.log(everyArr2); */

/*FLAT AND FLAPMAP METHODS
******************************
একাধিক লেভেলের অ্যারেকে একটা লেভেলে নিয়ে আসার জন্য ফ্লাট (FLAT) মেথড ব্যবহার করতে হয়।

*/
/* const arr2 = [10, 15, [20, 25], 30, [35, 40, [45, 50, [100]]], 55, 60];

console.log(arr2.flat(3)); */

/* SOME STRING METHODS IN JAVASCRIPT */
/* --------------------------------- */
/* const str = "Hello, world!";
const strLength = str.length;
// console.log(strLength);
const strUpperCase = str.toUpperCase();
const strLowerCase = str.toLowerCase();
// console.log(strUpperCase);
// console.log(strLowerCase); */

/* const str = "Hello";
const firstLetter = str.charAt(0);
const lastLetter = str.charAt(str.length - 1);
// console.log(`lastLetter:${firstLetter}, firstLetter:${lastLetter}`);

const str1 = "Hello";
const str2 = " World!";
const joinStr = str1.concat(str2);
console.log(joinStr); */
