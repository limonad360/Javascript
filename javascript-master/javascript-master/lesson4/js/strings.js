let str1 = 'Строка в одинарных кавычках';
let str2 = "Строка в двойных кавычках";

str1 = 'Строка с "текстом в кавычках"';
str2 = "Строка с \"текстом в кавычках\"";

console.log(str1, str2);

let lower = str1.toLowerCase(); // К нижнему регистру
console.log(lower);

let upper = str1.toUpperCase(); // к верхнему регистру
console.log(upper);

console.log(str1.startsWith("Ст"));
console.log(str1.endsWith("erw"));

str1 = "YBC";
str2 = "FGTREW";

console.log(str1.localeCompare(str2));
// 0 - если равны
// -1 - если первая(str1) меньше
// 1 - если вторая(str2) меньше


let age = 34;
let name = "Tom";
// ${}
console.log(`Имя пользователя: ${name}, возраст ${age} года`);

str2 = "Чаще всего операторы и" +
    " функции автоматически приводят переданные ";
console.log(str2.includes("ции авт"));













