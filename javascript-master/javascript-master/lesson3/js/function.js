

let a = 3;
let b = 5;

let res = a + b;

let n = 8;
let m = 12;

res = n + m;

// именованые функции
// объявление функции
function sum(num1, num2){ // num1, num2 - аргументы функции
    // тело функции
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
    // часть кода после return выполнена не будет
}
a = 3;
b = 5;
// вызов функции
res = sum(a, b);
console.log(res);

n = 8;
m = 12;
res = sum(n, m);
console.log(res);

function sum2(num1, num2){
    // данная функция выведет результат сложения в консоль,
    // и вернет undefined, тк нет return Значение;
    console.log(num1 + num2);
    // так делать нельзя!!!
    // return console.log(num1 + num2);
}

n = 8;
m = 12;
res = sum2(n, m);
console.log(res);

// значение аргументов по умолчанию
function greeting(userName="Гость") { // es6
    //userName = userName || "Гость"; // до es6
    console.log("Добро пожаловать, " + userName);
}

let name = "Tim";
greeting(name);
greeting();

// даны 2 числа
// написать ф-ию, которая принимает на вход 2 числа
// и возвращает наименьшее из них
function getMin(num1, num2){
    if (!num1 || !num2){
        console.log("Данные не переданы");
        return; // прерываем работу функции
    }
    if (typeof num1 !== "number" ||
                        typeof num2 !== "number"){
        console.log("Данные не числа");
        return; // прерываем работу функции
    }
    return (num1 < num2) ? num1 : num2;
}
res = getMin("Hello", 3);
console.log(res);
res = getMin(3);
console.log(res);
res = getMin(3, 3);
console.log(res);
res = getMin(5, 6);
console.log(res);

// функция принимает на вход массив целых чисел
// и возвращает сумму (значений) его элементов

let arr = [3, 78, 12, -90];
function getArrSum(someArr) {
    let sum = 0;
    for (let i = 0; i < someArr.length; i++) {
        sum += someArr[i];
    }
    return sum;
}

console.log(getArrSum(arr));

function changeStr(someStr){
    someStr += " продолжение строки";
}
function changeArr(someArr) {
    for (let i = 0; i < someArr.length; i++) {
        someArr[i] += 3;
    }
}
let str = "Строка";
arr = [2, 3, 4, 1];

changeStr(str);
changeArr(arr);
console.log(str);
console.log(arr);

let numVar1 = 3;
let numVar2 = numVar1;
console.log(numVar1, numVar2);
numVar1 = 4;
numVar2 = 89;
console.log(numVar1, numVar2);

let arr1 = [1, 2, 3];
let arr2 = arr1;

// объекты нельзя сравнивать через === или ==

arr1[0] = 90;
console.log(arr1, arr2);

// создать копию массива
arr = [4, 7, 8];
let copyArr = arr.slice();

// функция должна выводить числа от 0 до num
// в обратном порядке

function printNums(num) {
    let i = num;
    while (i >= 0){
        console.log(i);
        i--;
    }
}
printNums(3);

function printNums2(num) {
    if (num >= 0){
        console.log(num);
        // рекурсивный вызов функции
        printNums2(num - 1);
    }
}
printNums2(3);


// переменное количество аргументов
function printInfo(){
    // arguments - хранит все аргументы
    console.log(arguments);
    console.log(arguments[0]);

    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
printInfo("Mike", 31, "+79999999999");

// оператор spread (...) es6
function printUserInfo(login, pwd, ...other) {
    console.log(login);
    console.log(pwd);
    console.log(other); //массив
}
printUserInfo("qwe", "gfr3456", "Tim", 26)

function sum3(a, b, c) {
    return a + b + c;
}
arr = [1, 5, 9];
arr1 = ["Раз", "Два", "Три"];
res = sum3(...arr);
console.log(res);
res = sum3(...arr2);
console.log(res);


// анонимные функции

let subtractionNums = function (num1, num2) {
    return num1 - num2;
};
// вызов анонимной функции
res = subtractionNums(a, b);
console.log(res);

//стрелочные функции (es6)
subtractionNums = (num1, num2) => num1 - num2;
subtractionNums = (num1, num2) => {
    // инструкция 1
    // инструкция 2
    // инструкция 3
    return num1 - num2;
};
res = subtractionNums(a, b);
console.log(res);

arr = [2, 0, 3];
// function sqrt(num) {
//     return num * num;
// }
let sqrt = (num) => num * num;
// написать функцию,
// которая принимает на вход функцию и массив
// и обрабатывает каждый элемент массива переданной функцией

function arrFunc(func, someArr) {
    let localArr = [];
    for (let i = 0; i < someArr.length; i++) {
        localArr[i] = func(someArr[i]);
    }
    return localArr;
}
console.log(arrFunc(sqrt, arr));


/*Напишите функцию range, принимающую три аргумента,
    два обязательных:
    начало и конец диапазона,
    третий аргумент - необязательный
(если он не задан, шаг равен единице) –
шаг для построения массива.
    Функция возвращает массив,
    который содержит все числа из него,
    включая начальное и конечное.
    Например, вызов функции range(1, 10, 2)
должен будет вернуть [1, 3, 5, 7, 9].*/

function range(start, end, step = 1) {
    let arr = [];
    for (let i = 0; start <= end; i++, start+=step) {
        arr[i] = start;
    }
    return arr;
}

console.log(range(1, 10, 2));
console.log(range(6, 10));

// замыкание
function multi(n) {
    let x = n;
    return function (m) {
        return x * m;
    }
}

let multiSix = multi(6);
res = multiSix(5);
console.log(res);
res = multiSix(10);
console.log(res);

// Самовызывающаяся функция
console.log("Самовызывающаяся функция");
(function () {
    console.log("Самовызывающаяся функция");
}());

// методы для работы с массивами
arr = [12, -56, 0, -2, 34, 67, -7];
// forEach позволяет изменять элементы массива
arr.forEach(function (elem, index, array) {
    console.log("Элемент #" + index + " = " + elem);
    array[index] *= 2; // изменение элементов массива
});
console.log(arr);

// filter() - возвращает новый массив, состоящий
// из элементов, прошедших проверку переденной функцией

arr = [12, -56, 0, -2, 34, 67, -7];

let lessZero = (elem, index, array) => elem < 0;
let newArr = arr.filter(lessZero);
console.log(newArr);

//map() возвращает новый массив, состоящий
// из элементов, преобразованных переданной функцией
arr = [12, -56, 0, -2, 34, 67, -7];
let sqr = (elem, index, array) => elem * elem;

newArr = arr.map(sqr);
console.log(newArr);

// some()
arr = [12, -56, 0, -2, 34, 67, -7];
lessZero = (elem, index, array) => elem < 0;
res = arr.some(lessZero);
console.log(res);

// every()
arr = [12, -56, 0, -2, 34, 67, -7];
lessZero = (elem, index, array) => elem < 0;
res = arr.every(lessZero);
console.log(res);


