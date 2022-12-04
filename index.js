// Home work 5: 
 
// NORMAL 

// Task 1. 

const colors = ['red', 'green', 'blue'];
console.log(colors.length);

// Task 2. 

// Way 1.
const animals = ['monkey', 'dog', 'cat'];
console.log(animals.pop());

// Way 2.
const animals = ['monkey', 'dog', 'cat'];
console.log(animals.at(-1));

// Way 3.
const animals = ['monkey', 'dog', 'cat'];
console.log(animals[animals.length-1]);

// Task 3.

// way 1.
const numbers = [5, 43, 63, 23, 90];
numbers.splice(0,5);
console.log(numbers);

// way 2.
const numbers = [5, 43, 63, 23, 90];
while (0<numbers.length){
numbers.pop();
}
console.log(numbers);

// Task 4.

const students = ['Polina', 'Dasha', 'Masha'];
students.pop();
students.push('Borya');
students.shift();
students.unshift('Andrey');
console.log(students);


// Task 5. 

// Way 1.
const cats = ['Gachito', 'Tom', 'Batman'];
for (i = 0; i < cats.length; i++) 
{ console.log(cats[i]); };


// Way 2.
const cats = ['Gachito', 'Tom', 'Batman'];

for (let names of cats) {
  console.log(names);
}

// Task 6. 

const evenNumbers = [2, 4, 6, 8, 10];
const oddNumbers = [1, 3, 5, 7, 9];

const allNumbers = evenNumbers.concat(oddNumbers);
console.log(allNumbers);
console.log(allNumbers.indexOf(8));

// Task 7.

const binary = [0, 0, 0, 0];
console.log(binary.join(1));

// ADVANCED

// Task 1.  

let word = prompt('Проверим, является ли ваше слово(предложение) палиндромом! Введите текст.');
function checkPalindrome(text) {
    text = text.toLowerCase()
	let textArray = text.split('')
	for (let i = 0; i < textArray.length; i++) {
		if (textArray[i] == textArray.reverse()[i]) {
            return 'Это палиндром';
		} else {
		    return 'Это не палиндром';
		}
	}
}
console.log(checkPalindrome(word));

// Task 2. 

const matrix = [
    [12, 98, 78, 65, 23],
    [54, 76, 98, 43, 65],
    [13, 324, 65, 312],
    [9092, 22, 45, 90000],
]
let newArr = matrix.flat();
function arraySum(a){
    let sum = null;
    for(let i = 0; i<a.length; i++){
        sum += a[i]/a.length;
    }
    return sum;
}
arraySum(newArr);

// Task 3.

const mixedNumbers = [-14, 24, -89, 43, 0 , -1, 412, 4];
function negativeNumbers(value) {
    return value <= 0;
  }
function positiveNumbers(numbers){
    return numbers > 0;
}
  console.log(mixedNumbers.filter(negativeNumbers));
  console.log(mixedNumbers.filter(positiveNumbers));

// Task 4.

let array = []
function getRandom(a) {
	for (let i = 0; i < 5; i++) {
		let randomNumber = Math.floor(Math.random() * 10);
        let newArray = null;
	    newArray = a.push(randomNumber);
	}
	return a;
}
function changeNum(a) {
	let newValue = [];
	for (let i = 0; i < a.length / 2; i++) {   
		let newArr = null;
        newArr = newValue.push(a[i] ** 3);
	}
	return newValue;
}
console.log(getRandom(array));
console.log(changeNum(getRandom(array)));