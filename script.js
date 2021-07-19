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

//Compound Else IF

/*
var firstName = 'John ';
var age = 30;

if (age < 13) {
    console.log(firstName + 'is a boy');
} else if (age >= 13 && age < 18) {
    console.log(firstName + 'is a teenager');
} else {
    console.log(firstName + 'is a man');
}
*/

//Truthy and Falsy vales and equality operators

/*
var height;

height = 23;

if (height || height === '') {
    console.log("Variable is defined");
} else {
    console.log("Variable has not been defined");
}

// Equallity operator

if (height === '23') {
    console.log('The operator does type coercion');
}else{
    console.log('false');
}
*/

//COding Challegne 2
/*
var teamJohn1 = parseInt(prompt("Team John first score"));

var teamJohn2 = parseInt(prompt("Team John second score"));

var teamJohn3 = parseInt(prompt("Team John third score"));

var teamJohn = (teamJohn1 + teamJohn2 + teamJohn3)/3;


var teamMike1 = parseInt(prompt("Team Mike first score"));

var teamMike2 = parseInt(prompt("Team Mike second score"));

var teamMike3 = parseInt(prompt("Team Mike third score"));

var teamMike = (teamMike1 + teamMike2 + teamMike3)/3;


var teamMary1 = parseInt(prompt("Team Mary first score"));

var teamMary2 = parseInt(prompt("Team Mary second score"));

var teamMary3 = parseInt(prompt("Team Mary third score"));

var teamMary = (teamMary1 + teamMary2 + teamMary3)/3;


if (teamJohn > teamMike && teamJohn > teamMary ) {
    console.log("Team John Wins with an average of " + teamJohn);
} else if(teamMike > teamJohn && teamMike >  teamMary) {
    console.log("Team Mike Wins with an average of " + teamMike);
} else if(teamMary > teamMike && teamMary > teamJohn) {
    console.log("Team Mary Wins with an average of " + teamMary);
} else {
    console.log("We have a Draw! " + teamJohn + ' ' + teamMike + ' ' + teamMary);
}
*/

//Functions

/*
function calculateAge(birthYear) {
    return 2021 - birthYear;
}

function yearsUntilRetirement(year, firstName) {
    var age =  calculateAge(year)
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + "is " + age + " years old" + " retires in " + retirement + " years.");
    } else {
        console.log(firstName + "is " + age + " years old" + " is already retired!")
    }
}

var johnName = prompt("What is your name?");
var johnBirthYear = prompt("What is your birth year?");
var johnInfo = yearsUntilRetirement(johnBirthYear, johnName)

var mikeName = prompt("What is your name?");
var mikeBirthYear = prompt("What is your birth year?");
var mikeInfo = yearsUntilRetirement(mikeBirthYear, mikeName)

var janeName = prompt("What is your name?");
var janeBirthYear = prompt("What is your birth year?");
var janeInfo = yearsUntilRetirement(janeBirthYear, janeName)
*/

/////Function Statements and Expressions

//Declaratuion
/*
function whatDoYouDO(job, firstName){

}
*/

//Expression
var whatDoYouDo = function(job, firstName)
{
    switch (job) 
    {
        case 'teacher':
            return firstName + ' teaches kids how to code';

        case 'driver':
            return firstName + ' drives a cab in Lisbon';

        case 'designer': 
            return firstName + ' designs beautiful websites';
    
        default:
            return firstName + ' does something else';
    }

}

var fName = prompt("What is your name?")
var job = prompt("What do you do for a living?")

console.log(whatDoYouDo(job, fName));


