//TASK 1
/*
Дан массив целых чисел. Числа не отсортированы и могут повторяться. Необходимо найти в данном массиве такие два числа M и N,
чтобы их сумма была равна 7. Например, 3 + 4 = 7 или 0 + 7 = 7 или -2 + 9 = 7 и тд. Для решения достаточно найти хотя бы одну подходящую пару чисел M и N.
 */
/*
let array = [0, 1, 2, 3, 4, 5, 6, 7, 3, -2, 5, -6];
let num = 7;
let lengthArray = array.length;
console.log("Длина массива: ", lengthArray);

for (let i = 0; i <= lengthArray; i ++ ){
    let k = array[i];
    //console.log("TEST: ", k);
        for (let j = 0; j <= lengthArray; j++){
            let K  = array[j];
            console.log("TEST1: ", K);
            if (k + K === num) {
                console.log("Первое число: ", k);
                console.log("Второе число: ", j);
            }else {

            }
        }
}


 */

//TASK 2
/*
Вывести через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Three’,
а для чисел, делящихся на 5 (но не на 3) – ‘Five’. Измените код так, чтобы она выводила «ThreeFive» для всех чисел, которые делятся и на 3 и на 5.
 */
/*
let l;
for (l = 1; l <= 100; l++){
    if (l%3 === 0 && l%5 === 0){
        console.log("ThreeFive - ", l)
        l = l + 1;
    }else if (l%5 === 0){
        console.log("Five - ", l)
        l = l + 1;
    }else if (l%3 === 0) {
        console.log("Three - ", l)
        l = l + 1;
    }

    if (l === 100){
        console.log("Five - ", l)
        l = l + 1;
    }else{
        console.log(l);
    }
}


 */


//TASK 3
/*Задать количество тарелок и количество моющего средства. Моющее средство расходуется из расчета 0,5 на одну тарелку.
В цикле выводить сколько моющего средства осталось после мытья каждой тарелки.
В конце вывести, сколько тарелок осталось, когда моющее средство закончилось или наоборот.
 */
/*
let soap = 6;
let plate = 15;
let spend = 0.5;
let Plate_1;

for (let k = 1; k <= plate; k++){
    if (soap <= 0.4){
        break;
    }else {
        soap = soap - 0.5;
        Plate_1 = plate - k;
    }

    console.log("Тарелок осталось: ", Plate_1);
    console.log("Мыла осталось: ", soap);
}

 */

//TASK 4
/*
Создайте 2 массива равной длины, выведите массивы на экран. Посчитайте среднее арифметическое элементов каждого массива и сообщите,
для какого из массивов это значение оказалось больше (либо сообщите, что их средние арифметические равны).
 */
/*
let M = [1, 2, 3, 4, 5, 6];
let MLen = M.length;
let N = [7, 8, 9, 2, 1, 5];
let NLen = N.length;
let n1 = 0;

console.log("M: ", M);
console.log("Длина массива: ", MLen);
console.log("N: ", N);
console.log("Длина массива: ", NLen);

for (let i = 0; i <= MLen; i++){
   n1 += M[i];
}

console.log(n1);
*/

//TEST5-1
//Пользователь вводит число, создать массив заданного размера, вывести элементы массива в обратном порядке
/*
let num = prompt("Please enter length", "")
let foo = [];
let foo2 = [];
for (let i = 0; i <= num; i++) {
    foo.push(i);
}
console.log("Массив ", foo);
foo2 = foo.reverse();
console.log("Массив ", foo2);

 */

//TEST5-2
/*
Создайте программу, выводящую на экран первые 20 элементов последовательности 2 4 8 16 32 64 128
 */
let n = 2;
let count = 20;
let array = [];
for (let i = 0; i < count; i++){
    let k = Math.pow(n,i);
    array.push(k);
}
console.log(array);

//TEST 5-3
/*
Напишите цикл, который выводит в консоль треугольник из символов #, высотой 10 символов
 */
/*
for(let i =0; i < 10; i++){
    switch(i){
        case 0:console.log('*');break;
        case 1:console.log('**');break;
        case 2:console.log('***');break;
        case 3:console.log('****');break;
        case 4:console.log('*****');break;
        case 5:console.log('******');break;
        case 6:console.log('*******');break;
        case 7:console.log('********');break;
        case 8:console.log('*********');break;
        case 9:console.log('**********');break;
        case 10:console.log('**********');break;
    }
}
*/
