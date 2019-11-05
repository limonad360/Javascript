let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

/*TASK1. Написать функцию со следующими аргументами: объект, from (значение от), to (значение до).
Функция должна вернуть объект с товарами, цены которых лежат в диапазоне от значения from до значения to.
Пример вызова функции getGoods(goods, 2000, 3000); в данном случае функция должна вернуть все товары,
у которых цена в диапазоне от 2000 до 3000. Для проверки функции используйте объект! goods из файла forHw.js.
 */


/*
function getGoods(object, from, to){
    let resArr = [];
    for (let prop in object) {
        console.log(prop);
        if (goods[prop].price >= from && goods[prop].price <= to){
            resArr.push(goods[prop].title);
        }

    }
    return resArr;
}

console.log(getGoods(goods, 2000,3000));

 */

/*TASK2. Написать функцию addToCart(obj, title, countToCart) {} , где obj - объект, title - название товара,
count - количество товара, которое нужно добавить в корзину. Функция ищет товар с указанным названием,
если количество позволяет, то уменьшает количество товара на countToCart, если не позволяет,
то выводит информацию об этом в консоль и завершает работу. Для проверки функции используйте объект! goods из файла forHw.js.
 */

