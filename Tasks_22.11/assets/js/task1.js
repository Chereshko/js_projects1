'use strict'

function factorial(number){
    if(number < 1){
        alert("Невозможно вычислить факториал");
    }
    else if(number==1){
        return 1;
    }
    else{
        return number*factorial(number - 1);
    }


}

console.log(factorial(5));

function front(first, second){
    if(first > second){
        let temp = first;
        first = second;
        second = temp;
    }
    if(first === second){
        console.log(first);
        return;
    }
    else{
        console.log(first);
        front(first + 1, second);
    }

}

function back(first, second){
    if(first > second){
        let temp = first;
        first = second;
        second = temp;
    }
    if(first === second){
        console.log(second);
        return;
    }
    else{
        console.log(second);
        back(first, second - 1);
    }

}

front(5, 15);
back(5, 15);

function turnNumber(number) {

    let result = number % 10;
    console.log(result);

    if(number>=10){
        turnNumber((number - number%10)/10);
    }
}

turnNumber(1234);


 function sumNum(number){
     let sum = 0;
     sum += number % 10;
     if(number>=10){
         sum += sumNum((number - number%10)/10);
     }
     return sum;
 }

 console.log(sumNum(1234));

 function brackets(number){
     document.write("(");
     if(number > 1){
         brackets(number - 1);
     }
     document.write(")");
 }

 brackets(4);





