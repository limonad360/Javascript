function sum(num) {
    if(num >= 1) {
        return (num % 10) + sum(Math.floor(num / 10));
    }
}

console.log(sum(321));

/*
Написать функцию - конвертер строки.
Принимает на вход строку и флаг.
Возвращает пребразованную строку
Возможности (в зависимости от флага):
1. перевод всех символов в нижний регистр
2. перевод всех символов в верхний регистр
3. перевод всех символов в нижний регистр,
и первых букв слов в верхний
*/
let a = "CEtroka1";

function lower(str, flag) {
    if (flag !== 1 && flag !== 2){
        return str;
    }

    if (flag === 1) {
        return str.toLowerCase();
    }
    if (flag === 2) {
        return str.toUpperCase();
    }
}
console.log(lower(a,1));
console.log(lower(a,2));
console.log(lower(a,78));

function isSpam(str, ...words) {
    for (let i = 0; i < words.length; i++){
        if(str.includes(words[i])) {
            console.log(i);
            console.log(words[i]);
            return true;
        }
    }
    return false;
}

console.log(isSpam("проверяемый на спам текст",
    "на", "спам",
    "слово"));