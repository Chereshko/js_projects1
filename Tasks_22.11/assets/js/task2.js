'use strict'

let arr1 = [];
for(let i= 0; i<20; i++){
    arr1[i] = Math.floor(Math.random()*100);
}


function print(arr){
    console.log(arr);
}

print(arr1);

function findEven(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2 === 0){
            console.log(arr[i]);
        }
    }
}

findEven(arr1);

function sum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];
    }
    console.log(sum);
}

sum(arr1);

function maxElement(arr){
    let max= arr[0];
    for(let i=1; i<arr.length; i++){
        if(max < arr[i]){
            max = arr[i];
        }

    }
    console.log(max);
}

maxElement(arr1);

function addElement(arr, element, index){
    arr.splice(index, 0, element);
    console.log(arr);
}

addElement(arr1, 444, 5);

function minusElement(arr, index){
    arr.splice(index, 1);
    console.log(arr);
}
minusElement(arr1, 4);


