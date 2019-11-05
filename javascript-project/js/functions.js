//1 задача. Дано натуральное число N. Вычислите сумму его цифр, используя рекурсию (строки, массивы и циклы использовать запрещено).
/*
function printSum(num) {
    if (num == 0) {
        console.log("zero");
        return;
    } else{
        result += num;
        console.log(result);
        printSum(num - 1);
    }
}

let result = 0;
printSum(10);

 */

/*2 задача. Напишите функцию range, принимающую три аргумента, два обязательных: начало и конец диапазона, третий аргумент -
необязательный (если он не задан, шаг равен единице) – шаг для построения массива. Функция возвращает массив, который содержит
все числа из него, включая начальное и конечное. Например, вызов функции range(1, 10, 2) должен будет вернуть [1, 3, 5, 7, 9].
 */
/*
function range(start, end, step) {
    if (isNaN(start) || isNaN(end) || isNaN(step) || start > end) {
        return false;
    } else {
        for (let i = start; i <= end; i = i + step) {
            ARR.push(i);
        }
        console.log(ARR);
    }
}
ARR = [];
let i = range(1,10,2);
console.log(i);

 */

/*TASK 3. Напишите функцию, которая в зависимости от переданного в нее целочисленного аргумента count,
будет возвращать слово «день» в нужной форме («12 дней», но «22 дня» и тд).
 */
/*function days(count){
    if (count % 10  === 0){
        console.log(count, "дней");
    }else if(count % 10  === 1){
        console.log(count, "день");
    }else if(count % 10  >= 2 && count % 10  <= 4){
        console.log(count, "дня");
    }else if(count % 10  >= 5 && count % 10  <= 9){
        console.log(count, "дней");
    }
}

let n = prompt("","");
console.log(days(n));
 */

/*TASK 4.Сгенерировать 5 массивов из случайных чисел (самостоятельно посмотреть про рандом). Вывести массивы и сумму их элементов на экран.
Найти массив с максимальной суммой элементов. Вывести его на экран еще раз. Генерация массива и подсчет суммы - разные функции
 */
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)+1);
}


/*
function getRandomArrays(value){
    M1 = Array.from({length: value}, () => Math.floor(Math.random() * value))
    //console.log(M1);
}
*/

function getSumArrays2(Arr){
    let reducer = (accumulator, currentValue) => accumulator + currentValue;
    //console.log(Arr.reduce(reducer));
}
let M1 = [];
M1 = getRandomInt(5);
console.log(M1);



/*
let reducer = (accumulator, currentValue) => accumulator + currentValue;
let M2 = Array.from({length: value}, () => Math.floor(Math.random() * value));
    console.log (M2);
    console.log(M2.reduce(reducer));
    let M3 = Array.from({length: value}, () => Math.floor(Math.random() * value));
    console.log (M3);
    console.log(M3.reduce(reducer));
    let M4 = Array.from({length: value}, () => Math.floor(Math.random() * value));
    console.log (M4);
    console.log(M4.reduce(reducer));
    let M5 = Array.from({length: value}, () => Math.floor(Math.random() * value));
    console.log (M5);
    console.log(M5.reduce(reducer));
 */



