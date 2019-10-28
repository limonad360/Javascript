// однострочный комментарий
/*
многострочный
комментарий
*/

/*JavaScript - объектно-ориентирванный,
* интерпретируемый язык программирования
* со слабой динамической типизацией*/

// объявление переменных
var login = "qwerty";
let user_name = "Алексей";

// отладка, вывод в консоль
console.log(login, user_name);

//var и let отличаются обдастью видимости
/*var - глобальная область видимости
(может быть ограничена функцией)

let - область видимости на уровне блока*/
console.log(window);

// переопределение значения переменной
login = "asdfgh";
user_name = "Василий";
console.log(login, user_name);
// константы неизменны,
// значение нужно присваивать в момент объявления
const VERSION_CODE = 345;

// Объявление переменной
let some_data;
// присвоение переменной значения
some_data = "Данные";
// переопределение значения переменной
some_data = "Другие данные";
console.log(some_data);

// типы данных
// числа - тип number
let age = 18;
let temp = -32;
let zero = 0;
let width = 45.7;

// строки - тип string
let reg_info = "Регистрация пршла успешно";
let auth_info = 'Авторизация прошла успешно';

let greeting = 'Добро пожаловать в "МАГАЗИН"';
console.log(greeting);
greeting = "Добро пожаловать в \"МАГАЗИН\"";
console.log(greeting);

// логический - тип boolean
let active = true;
let stopped = false;

// значение неизвестно - null
let unknownValue = null;
console.log(unknownValue);
// значение не присвоено - undefined
let undefinedValue;
console.log(undefinedValue);

// определить тип данных
console.log(typeof active);
console.log(typeof age);
console.log(typeof login);


// операторы
// арифметические операторы
// + | - | * | / | %
// % - взятие остатка от деления

let height = 45;
height = height * 2;
console.log(height); // 90

console.log(3 + 8); // 11
console.log('3' + 8); // 38
console.log(+'3' + 8); // 11
console.log(+'String'); // NaN
console.log(+true); // 1

console.log(34 / '2');
console.log(34 * '2');
console.log(34 - '2');

console.log(34 / 'string'); // NaN

// проверка на NaN
console.log(isNaN("string")); // true
console.log(isNaN("23")); // false
console.log(isNaN("23px")); // true
console.log(isNaN(45)); // false
console.log(isNaN(false)); // false
console.log(isNaN(true)); // false

console.log(34 / 0);
console.log(-34 / 0);

//взятие остатка от деления
console.log(9%2);
console.log(8%2);
console.log(546%10);
console.log(6%3);
console.log(6%5);

// операторы присваивания
// = | += | -= | *= | /= | %=
let num = 10;
num = num + 10; // num += 10;
num = num - 10; // num -= 10;
num = num * 10; // num *= 10;
num = num / 10; // num /= 10;
num = num % 10; // num %= 10;
console.log(num);

// операторы сравнения
// > | < | >= | <= |
// == (равенство)
// != (неравенство)
// === (строгое равенство)
// !== (строгое неравенство)

height = 140;
width = '140';
num = 500;

login = "qwerty";
let login2 = "asdfghjkl";

console.log(height == width); // true
console.log(height === width); // false

console.log(num > width); // true
console.log(height > width); // false
console.log(height >= width); // true

console.log(login2 > login); // false

// инкремент и декремент
// инкремент - увеличивает значение на 1
// префиксная форма ++i
num = 2;
console.log(++num); // 3
console.log(num); // 3
// постфиксная форма i++
num = 2;
console.log(num++); // 2
console.log(num); // 3

// декремент - уменьшает значение на 1
// префиксная форма --i
num = 2;
console.log(--num); // 1
console.log(num); // 1
// постфиксная форма i--
num = 2;
console.log(num--); // 2
console.log(num); // 1

num = 7;
let result = num++ - num++ + num++ - --num;
// 7 - 8 + 9 - 9
console.log(result); // -1

// операторы || - или
// && - И
// ! - НЕ

// (height < width) && (height > 100)
// (height < width) || (height > 100)
// (!height)

// тернарный оператор ?
// result = (условие) ? значение1 : значение2;
width = 450;
height = 300;

result = (height < width) ? "высота больше ширины" :
    "ширина больше высоты";
console.log(result);

// преобразование строки в число
// в целое число
age = '13 5 лет 1';
width = '1.5em 4.5em';

age = parseInt(age);
console.log(typeof age, age); // 13

width = parseFloat(width);
console.log(typeof width, width); // 1.5
































