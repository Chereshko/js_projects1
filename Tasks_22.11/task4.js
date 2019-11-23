'use strict'

let fruits =["apple", "banana", "plum", "appricot", "berry", "strawberry", "orrange", "pineapple", "watermelon"]

fruits.sort();

function print(arr){
    document.write('<ul>');
    for(let elem of arr){
        document.write('<li>' + elem + '</li>')
    }
    document.write('</ul>');
}

print(fruits);

function equal(arr) {
    let fruit = prompt("Введите название фрукта");
    fruit = fruit.toLowerCase();
    return arr.indexOf(fruit);
}

console.log(equal(fruits));