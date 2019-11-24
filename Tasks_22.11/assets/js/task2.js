'use strict';

let arr1 = [];
for (let i = 0; i < 20; i++) {
    arr1[i] = Math.floor(Math.random() * 100);
}

/*
* 1. Функция принимает массив и выводит его на экран.
* */

//имя функции должно описывать ее работу. Контекста может и не быть. print на принтере или где? печать чего? logArray или даже logArrayElems
function print(arr) {
    //console.log(arr);
    if (Array.isArray(arr)) {
        arr.forEach(
            currentElem => {

                console.log(currentElem);

            }
        )
    }
}

//print(arr1);

function findEven(arr)/*logEvenArrayElems*/ {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            console.log(arr[i]);
        }
    }

    /* if (Array.isArray(arr)) {
         arr.forEach(
             currentElem => {
                 if (currentElem % 2 === 0) {

                     console.log(currentElem);

                 }
             }
         )
     }*/

}

//findEven(arr1);
/*
    3. Функция принимает массив и возвращает сумму всех элементов массива.
*/
function getSumOfArrayElems(arr) {

    if (Array.isArray(arr)) {
        let sum = 0;
        arr.forEach(
            (currentElem) => {

                sum += currentElem;

            }
        );
        return sum;
    }


    /*for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }*/


//    console.log(sum);


}

//sum(arr1);

function maxElement(arr) {

    let max = arr[0];
    // arr.forEach =)
    for (let i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }

    }
   // console.log(max);
    return max;
}

//maxElement(arr1);

//привычный порядок elem, index, arr

function addElement(arr, element, index) {
    arr.splice(index, 0, element);
    console.log(arr);
    return arr;
}

//addElement(arr1, 444, 5);

function minusElement(arr, index) {
    arr.splice(index, 1);
    console.log(arr);
    return arr;
}

//minusElement(arr1, 4);


