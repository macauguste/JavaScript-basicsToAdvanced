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

//COding Challegne 1
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

/*
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
*/

////Arrays

/*
//Initialize new array
var names = ['John','Mark','Jane']
var years = new Array(1990, 1969, 1948);

console.log(names[2])
console.log(names.length);

//Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

//Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue')
john.unshift('Mr.');
console.log(john);

john.pop()
john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/

//Coding Challenge 2
/*
function tipCalculator(bill) 
{
    var percentage;
    if (bill < 50) 
        {
            percentage = .2
        }
        else if (bill >= 50 && bill < 200)
        {
            percentage = .15
        }
        else
        {
            percentage = .1
        }
    return percentage * bill;
}

var eachBill = [];
var tips = [];
var total = [];

var firstBill = eachBill.push(prompt("How much was your first bill?"));
console.log(firstBill)
var secondBill = eachBill.push(prompt("How much was your second bill?"));
var thirdBill = eachBill.push(prompt("How much was your third bill?"));

var fbTip = tips.push(tipCalculator(eachBill[0]));
console.log(fbTip);
var sbTip = tips.push(tipCalculator(eachBill[1]));
var tbTip = tips.push(tipCalculator(eachBill[2]));

var total = [eachBill[0] + tips[0], eachBill[1] + tips[1], eachBill[2] + tips[2]]

console.log(eachBill);
console.log(tips);
console.log(total);

*/

///Objects and properties
/*
var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: "teacher",
    isMarried: false
};

console.log(john)
console.log(john['lastName'])

var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith'
console.log(jane);
*/

///Objescts and methods
/*
var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: "teacher",
    isMarried: false,
    calcAge: function()
    {
        this.age = 2021 - this.birthYear;
    }
};

john.age = john.calcAge();
john.calcAge();
console.log(john);
*/

///COding Challenge 4
/*
var john = {
    fullName: "John Bond",
    mass: 300,
    height: 1.96,
   
    calcBMI: function()
    {
        this.Bmi = this.mass / (this.height * this.height)
        return this.Bmi;
    }
};

var mark = {
    fullName: "Mark Bond",
    mass: 150,
    height: 1.66,
   
    calcBMI: function()
    {
        this.Bmi = this.mass / (this.height * this.height)
        return this.Bmi;
    }
};

if (john.calcBMI() > mark.calcBMI()){
    console.log(john.fullName +"("+ john.Bmi +") Has Higher BMI");
} else if(mark.Bmi > john.Bmi){
    console.log(mark.fullName +"("+ mark.Bmi +") Has Higher BMI");
} else{
    console.log("John and Mark have the same BMI");
}

console.log(john);
console.log(mark);
*/

///Loops and Iterations
//for
/*
for (var i = 0; i < 10; i++) {
    console.log(i);
}

for (var i = 0; i < 10; i+= 2) {
    console.log(i);
}

var john = ['John', 'Smith', 1990, 'designer', false];

for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//while
var i = 0;
while (i < john.length) {
    console.log(john[i]);
    i++
}

//continue and break statements
var john = ['John', 'Smith', 1990, 'designer', false, "blue"];

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue; 
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break; 
    console.log(john[i]);
}

//Looping backwards
for (var i = john.length - 1; i >= 0 ; i--) {
    if (typeof john[i] !== 'string') break; 
    console.log(john[i]);
}
*/

///Coding challenge 5

var john = {
    fullName: 'John Smith',
    bills: [],
    calcTips: function()
    {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            // determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

                if (bill < 50) 
                    {
                        percentage = .2;
                    }
                    else if (bill >= 50 && bill < 200)
                    {
                        percentage = .15;
                    }
                    else
                    {
                        percentage = .1;
                    }
                
            //Add results to correspoinding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
};

for (i = 0; i < 5; i++) {
    john.bills.push(prompt("Enter Bill " + [i+1]))
}

john.calcTips();


var mark = {
    fullName: 'Mark Smith',
    bills: [],
    calcTips: function()
    {
        this.tips = [];
        this.finalValues = [];

        for (var i = 0; i < this.bills.length; i++)
        {
            // determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

                if (bill < 100) 
                    {
                        percentage = .2;
                    }
                    else if (bill >= 100 && bill < 300)
                    {
                        percentage = .1;
                    }
                    else
                    {
                        percentage = .25;
                    }
                
            //Add results to correspoinding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
};

for (i = 0; i < 5; i++) {
    mark.bills.push(prompt("Enter Bill " + [i+1]))
}

function calcAcerage(tips){
    
}



mark.calcTips();
john.calcTips();
console.log(john, mark)