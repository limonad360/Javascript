let age = 12;

if (age >= 18) {
    // блок кода выполнится, если условие true
    console.log("Добро пожаловать на сайт")
} else { // дополнительный блок else
    // блок кода выполнится, если условие false
    console.log("Вы не можете попасть на сайт");
}

// дополнительные условия - else if
let season = 'summer';

if (season === 'summer') {
    document.body.style.background = 'green';
} else if (season === 'winter') {
    document.body.style.background = 'blue';
} else if (season === 'autumn') {
    document.body.style.background = 'orange';
} else if (season === 'spring') {
    document.body.style.background = 'yellow';
} else {
    console.log("Введено что-то не то");
}

let day = 'воскресенье';
if (day === 'суббота' || day === 'воскресенье') {
    console.log("Выходные дни");
}


let ticketNumber = "222222";


switch (ticketNumber) {
    case '111111':
        alert('большой приз');
        break;
    case '222222':
    case '333333':
        alert('средний приз');
        break;
    case '444444':
    case '555555':
    case '666666':
        alert('мелкий приз');
        break;
    default:
        alert('попробуйте еще');

}

// циклы позволяют выполнить однотипное действие много раз

// цикл с предусловием while
// while (условие) {
//     тело цикла
// }

let key = null;

while (key !== 'admin') {
    key = prompt("Введите пароль");
}


// цикл с постусловием do...while
// do {
//     тело цикла
// } while (условие);

a = 5;
do {
    console.log("a = ", a);
    a--;
} while (a);

// цикл for

// for (начало/инициализация; проверка условия; шаг) {
//     тело цикла
// }
// есть 5 попыток, чтобы угадать число
let attemptCount = 5;
let answer = 456;
for (let i = 1; i <= attemptCount; i++) {

    let data = prompt("Введите код");
    if (parseInt(data) === answer) {
        alert("Вы угадали");
        break; // директива break - выход из цикла
    }
    alert("Осталось попыток " + (attemptCount - i));
    // директива continue прерывает текущую итерацию
}




