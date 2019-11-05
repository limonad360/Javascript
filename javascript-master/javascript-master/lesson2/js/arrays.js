let arr = []; // пустой массив

let colors = ["red", "blue", "white", "green"];
console.log( colors);

// доступ к элементам массива осуществляется по индексу элемента
console.log(colors[0]);
console.log(colors[3]);
console.log(colors[6]);

// изменение элемента массива
colors[2] = "orange";
console.log(colors);

// добавление элемента в массив
colors[90] = "yellow";
console.log(colors);

// длина массива
let colorsLength = colors.length;
console.log(colorsLength);

colors = ["red", "blue", "white", "green"];

// пербрать массив
for (let i = 0; i < colors.length; i++) {
    console.log("Color: ", colors[i]);
}

// методы массива
colors = ["red", "blue", "white", "green"];

colors.pop(); // удаляет и возвращает последний элемент массива
colors.push("black", "pink"); // добавляет элемент(ы) в конец массива
console.log(colors);

colors.shift(); // удаляет и возвращает первый элемент массива
colors.unshift("brown", "grey"); // добавляет элемент(ы) в начало массива
console.log(colors);

// определяет, содержит массив указанный элемент или нет
console.log(colors.includes("orange"));

