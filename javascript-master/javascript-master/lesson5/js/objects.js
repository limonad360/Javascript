// объкты, как ассоциативные массивы

// символ - уникальный идентификатор
// создать символ
let symId = Symbol();
// символ с описанием
symId = Symbol("id");
let symId2 = Symbol("id");
// alert(symId.toString());
console.log(symId);
console.log(symId.description); // описание символа

// глобальный реестр символов
let globalSym = Symbol.for("идентификатор");
let globalSym2 = Symbol.for("идентификатор");
console.log(Symbol.keyFor(globalSym));

// объкты, как ассоциативные массивы
// для хранения данных в паре ключ-значение
let obj = {}; // пустой объект

let arr = ["JavaScript", "Текст статьи", "Алексей"];

// литеральный способ создания объкта
let article = {
    //[id]: 2,
    title: "JavaScript",
    text: "Текст статьи",
    author: "Алексей",
    date: null,
};
console.log(arr);
console.log(article);

// доступ к свойству
let title = article.title;
console.log(title);
title = article["title"];
console.log(title);

console.log(article.description); // undefined
console.log(article.date); // null

// изменить значение свойства
article.date = new Date().toDateString();
console.log(article);

// добавить новое свойство
let id = Symbol("article id");
article[id] = 1;
console.log(article);

article.description = "Описание статьи";

// проверка на наличие свойств в объекте
// 1 вариант
if (article.img === undefined){
    console.log("В объекте нет свойства img");
}
// 2 вариант
if(!("img" in article)){
    console.log("В объекте нет свойства img");
}
if("img" in article){
    console.log("В объекте есть свойство img");
}
// 3 вариант
console.log(article.hasOwnProperty("img"));

// доступ к свойству через переменную
let propName = "title";
console.log(article[propName]);
// console.log(article.propName); // вариант не подходит

let imgProp = "img";
article[imgProp] = "js.png";
// article["img"] = "js.png";
// article.img = "js.png";
// добавили свойство(ключ) img в значении "js.png"
console.log(article);

// перебор объекта for in
for (let propName in article){
    console.log(`значение propName = ${propName}`);
    console.log(`значение article[propName] = ${article[propName]}`);
}

console.log(Object.keys(article));
console.log(Object.getOwnPropertyNames(article));
console.log(Object.getOwnPropertySymbols(article));
/*
Написать функцию getData, которая принимает
на вход массив, имя свойства, значение свойства.
Функция возвращает массив со статьями
*/
/*
Например:
// вернет массив с 2 статьями
getData(articles, "author", "Виталий");
// вернет массив с 1 статьей
getData(articles, "title", "PHP");
*/
let articles = [
    {
        id: 1,
        title: "JS",
        text: "Статья про JS",
        author: "Александр"
    },
    {
        id: 2,
        title: "PHP",
        text: "Статья про PHP",
        author: "Виталий"
    },
    {
        id: 3,
        title: "Базы Данных",
        text: "Статья про Базы Данных",
        author: "Евгения"
    },
    {
        id: 4,
        title: "HTML",
        text: "Статья про HTML",
        author: "Виталий"
    }
];

function getData(arr, prop, value) {
    let resArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i][prop] === value){
            console.log(arr[i][prop]);
            resArr.push(arr[i]);
        }
    }
    return resArr;
}

let res = getData(articles, "author", "Виталий");
console.log(res);

article = {
    [id]: 2,
    title: "JavaScript",
    text: "Текст статьи",
    author: "Алексей",
    printInfo: function () { // метод
        console.log(`Статья: ${this.title}, автора ${this.author}`);
    }
};

// доступ к методам
// вызов метода
article.printInfo();

// добавить / переопределить метод
article.printObj = function () {
    console.log(article.author);
    console.log(this.author);
};
article.printObj();


let book = {
    [id]: 1,
    title: "Выразительный JavaScript"
};
console.log(book);

id = Symbol("someId");
book[id] = 34;
console.log(book[id]);

for (let prop in book){
    console.log(book[prop]);
}

// деструкторизация (es6)
let userInfo = {
    userId: 1,
    login: "qwe",
    name: "Григорий"
};
let {userId, name, login} = userInfo;
console.log(userId, name, login);

arr = [1, "qwe", "Григорий", 38];
let [uId, uLogin, ...other] = arr;
console.log(uId, uLogin, other);



