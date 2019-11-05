/*TASK2. Допустим, пользователь вводит названия городов через пробел. Вы их присваиваете переменной.
Переставьте названия так, чтобы они были упорядочены по алфавиту
 */
/*
let cities = prompt("Введите название городов через пробел", "Москва Санкт-Петербург Ростов");
console.log(cities);

let LowIndex = cities.toLowerCase()
let arr = LowIndex.split(" ");
console.log(arr.sort());

for (let i = 0; i < arr.length; i++){
    let UpIndex = arr[i].toString();
    let slice = UpIndex.slice(0, 1);
    let UpInd = slice.toUpperCase()
    let NewStr = UpIndex.replace(slice, UpInd);
    console.log(NewStr);
}


 */

//TASK3.Найти все вхождения подстроки в строку. Строку и подстроку вводит пользователь
/*
let sentence = prompt("Введите предложение","я буду руки твои целовать");
let substring = prompt ("Введите подстроку", "у");

console.log(sentence);
console.log(substring);

for (let i = 0; i < sentence.length; i++){
    let str = sentence[i];
    if (str === substring){
        console.log(i);
    }
}

 */

/*TASK4.Написать функцию, которая проверяет, является ли строка палиндромом (использовать стандартные методы)!
Палиндром — это слово или фраза, которые одинаково читаются по буквам или по словам как слева направо, так и справа налево.
 */
/*
let sentence = "А роза упала на лапу Азора";


palindrome = sentence => {
    let str = sentence.replace(/\s+/g, '').toLowerCase();
    console.log(str);
    let strReverse = str.split('').reverse().join('');
    console.log(strReverse);

    if (strReverse === str) {
        console.log("yes");
    } else {
        console.log("no");
    }
};

palindrome(sentence);

 */







