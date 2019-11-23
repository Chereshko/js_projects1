'use strict'

let arr1 = [];
for(let i= 0; i<10; i++){
    arr1[i] = Math.floor(Math.random()*100);
}
let arr2 = [];
for(let i= 0; i<5; i++){
    arr2[i] = Math.floor(Math.random()*100);
}

console.log(arr1);
console.log(arr2);

function joinArrays(arr1, arr2){
    let result1 = []
    let result2 = []
    for(let elem of arr1){
        if(!result1.includes(elem)){
            result1.push(elem);
        }
    }
    for(let elem of arr2){
        if(!result2.includes(elem) && !result1.includes(elem)){
            result2.push(elem);
        }
    }
    console.log(result1.concat(result2));
}

joinArrays(arr1, arr2);

function totalElements(arr1, arr2) {
    let result = [];
    for(let elem of arr1){
        if(arr2.includes(elem) && !result.includes(elem)){
            result.push(elem);
        }
    }

    console.log(result);
}

totalElements(arr1, arr2);

function uniqueElements(arr1, arr2) {
    let result = [];
    for(let elem of arr1){
        if(!arr2.includes(elem)){
            result.push(elem);
        }
    }

    console.log(result);
}

uniqueElements(arr1, arr2);

