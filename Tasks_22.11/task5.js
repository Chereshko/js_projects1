'use strict'

let string1 = "happy New Year!";
let string2 = "Happy birsday!"

function compare(str1, str2){
    if(str1.length > str2.length){
        return 1;
    }
    else if(str1.length === str2.length){
        return 0;
    }
    else{
        return -1;
    }

}

console.log(compare(string1, string2));

function firstToUpper(str) {
    return str[0].toUpperCase() + str.slice(1);
}

console.log(firstToUpper(string1));

function vowelsCount(str){
    let letters = str.split("");
    let vowels = "aeiouAEIOU";
    let vowells = vowels.split("");

    let count = 0;
    for(let letter of letters){
        if(vowells.includes(letter)){
            count += 1;
        }
    }
    return count;
}

console.log(vowelsCount(string1));

function reduceSpam(str){
    let spam = ["100% бесплатно", "увеличение продаж", "только сегодня", "не удаляйте"];
    let el;
    let string = str.toLowerCase();
    for(let elem of spam) {


        if (string.includes(elem)){
            console.log("Это СПАМ!");
            break;
        }
    }
}

reduceSpam("только сегодня супер скидки");
reduceSpam("ТОЛЬКо сегодня супер скидки");
reduceSpam(string1);

function cutString(str, max){
	let str2;
	if(str.length > max){
		let arr1 = [];
		let arr2 = [];
		arr1 = str.split("");
		for(let i=0; i<max; i++){
			arr2.push(arr1[i]);
		}
		arr2.push("...");
		str2 = arr2.join("");
	}
	console.log(str2);
	
}

cutString(string1, 10);

function checkPalindrome(str){
	str = str.replace(/[^A-Za-zА-Яа-я]/g, "");
	return str.split("").reverse().join("").toLowerCase() === str.toLowerCase();
	
}

console.log(checkPalindrome("Иди, Сеня, не сиди!"));

function wordsQuantity(str){
	let str1 = str.replace(/[^A-Za-zА-Яа-я]/g, " ");
	//console.log(str1);
	let arr= str1.split(" ");
	for(let i=0;i<arr.length; i++){
		if(arr[i]===""){
			arr.splice(i, 1);
		}
	}
	console.log("Words quantity is " + arr.length);
}

wordsQuantity("Иди, Сеня, не сиди!");

function longWord(str){
	let str1 = str.replace(/[^A-Za-zА-Яа-я]/g, " ");
	
	let arr= str1.split(" ");
	let max = arr[0].length;
	let index = 0;
	
	for(let i=1; i<arr.length; i++){
		
		if (arr[i].length > max){
			
			max = arr[i].length;
			index = i;
		}
	}
	console.log("The longest word is " + arr[index]);
}

longWord(string2);

function averageLength(str){
	let str1 = str.replace(/[^A-Za-zА-Яа-я]/g, " ");
	//console.log(str1);
	let arr= str1.split(" ");
	
	let sum = 0;
	for(let i=0;i<arr.length; i++){
		if(arr[i]===""){
			arr.splice(i, 1);
		}
		
	}
	for(let word of arr){
		sum += word.length;
	}
	console.log(sum);
	console.log("Average length of words in the sentence is " + sum/arr.length);
}

averageLength("Иди, Сеня, не сиди!");


function findCoincidence(str, symbol){
	let indexes = [];
	str = str.toLowerCase();
	symbol = symbol.toLowerCase();
	
	let arr = str.split("");
	while(arr.includes(symbol)){
		
		indexes.push(arr.indexOf(symbol));
		arr.splice(arr.indexOf(symbol), 1, "^    ");
		
	}
	console.log("Indexes of coincidence: " + indexes);
	console.log("number of coincidences: " + indexes.length);
}

findCoincidence("Иди, Сеня, не сиди!", "и");


