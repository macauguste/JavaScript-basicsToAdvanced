/**********************************
Variables
*/

/*
var firstName = 'John';
console.log(firstName)

var lastName = 'Smith';
console.log(firstName +' '+ lastName)

var age = 25;
var fullAge = true;
console.log(fullAge)

var job, isMarried;
job = 'Teacher';
isMarried = false;
console.log(job+' '+isMarried)

console.log(firstName +' '+ lastName +' is '+ age +' years old');

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' +age+ ' year old ' + job + 
'. Is he married?' + isMarried)

var lastName = prompt('What is his last Name?')
console.log(firstName + ' ' +lastName)
*/

/************************************ 
Basic Operators
*/
/*
var year, yearJohn, yearMark;
year = 2018;
ageJohn = 28;
ageMark = 33;

//Math Operators
var year = 2018;
var yearJohn = year - 29
var yearMark = year - 29

console.log(yearJohn + ' ' + yearMark);
console.log(year + 2);
console.log(year * 2);
console.log(year / 2);


//Logical Operator 
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);

//typeOf operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than john');
var x;
console.log(typeof x);
*/

/************************************ 
Operator Precedence
*/

/*
var now = 2018;
var yearJohn = 1989;
var fullAge = 18;

//Multiple operators
var isFullAge = now - yearJohn >= fullAge;
console.log(isFullAge)

//Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple Assignments 
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 x 4 - 6// 32 - 6 //26
console.log(x, y)

//More Operators
//x=x *2;

x *= 2;

console.log(x);

x +=10;

console.log(x);

x++;

console.log(x);

x--;

console.log(x);
*/

//CodingChallenge

/*
var heightOfMark = prompt("What is Mark's height?");
var massOfMark = prompt("What is Mark's mass?");

var heightOfJohn = prompt("What is John's height");
var massOfJohn = prompt("What is John's mass?");

markBMI = massOfMark / (heightOfMark * heightOfMark);
johnBMI = massOfJohn / (heightOfJohn * heightOfJohn);

var higherBMI = markBMI > johnBMI;
console.log("Is Mark's BMI higher than John's? " + higherBMI);
*/

//If ELSE statements
/*
var firstName = 'John';
var civilStatus = 'single';
if (civilStatus === 'married') {
    console.log(firstName + ' is married')
} else {
    console.log(firstName + ' is single and might marry soon')
}

var isMarried = false;
if (isMarried) {
    console.log('John is Married. ' + isMarried)
} else {
    console.log('John is Married. ' + isMarried)
}

var heightOfMark = prompt("What is Mark's height?");
var massOfMark = prompt("What is Mark's mass?");
10

var heightOfJohn = prompt("What is John's height");
var massOfJohn = prompt("What is John's mass?");

markBMI = massOfMark / (heightOfMark * heightOfMark);
johnBMI = massOfJohn / (heightOfJohn * heightOfJohn);

var higherBMI = markBMI > johnBMI;
if (markBMI > johnBMI) {
    console.log("Marks BMI is higher");
} else {
    console.log("John's BMI is higher");
}
*/


