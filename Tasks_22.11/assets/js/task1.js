'use strict';


function factorial(number) {
    if (number < 1) {
        // alert("Невозможно вычислить факториал");//Это лишнее. Мы пишем функцию без "побочных эффектов" https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%B1%D0%BE%D1%87%D0%BD%D1%8B%D0%B9_%D1%8D%D1%84%D1%84%D0%B5%D0%BA%D1%82_(%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)
    }
    //else if(number==1){ нестрогое равенство не использовать
    else if (number === 1) {
        return 1;
    }
    //else{ если есть return выше конструкция "else" безполезна
    //return number*factorial(number - 1); справа и слева от оператора (любого) пробелы
    return number * factorial(number - 1);
    // }


}

//console.log(factorial(5));//вызовы в коде не делать. Нужно было просто написать API задания

function front(first, second) {
    if (first > second) {
        /*let temp = first;
        first = second;
        second = temp;*/
        return; // пусть пользователь учится параметры передавать
    }
    /*if (first === second) {
        console.log(first);
        return;
    } else {
        console.log(first);
        front(first + 1, second);
    }*/
    //[from, to) или [from, to] <=
    if (first < second) {
        console.log(first);
        front(first + 1, second);
    }
}

//можно еще фокус с параметрами по умолчанию проделать
function getRangeArray(first, second, arr = []) {
    if (first > second) {
        return
    }

    if (first < second) {
        arr.push(first);
        getRangeArray(first + 1, second, arr);
        return arr;
    }
}

function back(first, second) {
    if (first > second) {
        let temp = first;
        first = second;
        second = temp;
    }
    if (first === second) {
        console.log(second);
        return;
    } else {
        console.log(second);
        back(first, second - 1);
    }

}

/*front(5, 15);
back(5, 15);*/

function turnNumber(number) {

    /* let result = number % 10;//вычисление один раз
     console.log(result);

     if (number >= 10) {
         turnNumber((number - number % 10 /!*вычисление второй раз*!/) / 10);
     }*/

    if (number < 10) {
        return number;
    }

    const lastDigit = number % 10; // сохраняем результат

    return Number(`${lastDigit}${turnNumber((number - lastDigit) / 10)}`);

}

//turnNumber(1234);


function sumNum(number) {
    /* let sum = 0;
     sum += number % 10;
     if (number >= 10) {
         sum += sumNum((number - number % 10) / 10);
     }
     return sum;*/

    if (number < 10) {
        return number;
    }
    const lastDigit = number % 10;

    return lastDigit + sumNum((number - lastDigit) / 10);
}

//console.log(sumNum(1234));

function brackets(number) {
    /*    document.write("(");//не спешите =)
        if (number > 1) {
            brackets(number - 1);
        }
      document.write(")");*/

    if (number === 1) {
        return '()';
    }

    return `(${brackets(number - 1)})`;

}

//brackets(4);





