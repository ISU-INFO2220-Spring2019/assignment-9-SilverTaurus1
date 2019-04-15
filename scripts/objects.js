


var personHolder;
var characters;


function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
    this.age;
    this.stepsToTake;
    this.steps = function () {
        var StepsTaken = "";
        for (var index = 1; index < this.stepsToTake; index++) {
            StepsTaken += index + " ";
        }
        return StepsTaken;
    }

    this.Age = function () {
        var sum = 0;
        for (var index = 1; index < this.age; index++) {
            if (!(index % 2)) {
                sum += index;
            }         
        }
        return sum;
    }
    

}


function Converter() {
    this.FtoC = function (Fahrenheit) {
        // Source: https://www.rapidtables.com/convert/temperature/fahrenheit-to-celsius.html
        return ((Fahrenheit - 32) * (5 / 9));
    }

    this.CtoF = function () {
        // Source: https://www.rapidtables.com/convert/temperature/how-celsius-to-fahrenheit.html
        return (arguments[0] * (9 / 5) + 32);
    }
}

function sayHello() {
    var name = prompt("What is your name?");
    alert("Hello, " + name);
}

function greet(salutation) {
    var name = prompt("What is your name?");
    alert(salutation + ", " + name);
}

function doMaths(firstNumber, secondNumber) {
    var con = "" + firstNumber + secondNumber;
    var add = firstNumber + secondNumber;
    var subtract = firstNumber - secondNumber;
    var mult = firstNumber * secondNumber;
    var div = firstNumber / secondNumber;
    alert(con + '\n'
        + add + '\n'
        + subtract + '\n'
        + mult + '\n'
        + div );
}

function createPerson() {
    
    var fName = prompt("What is your first Name? ");
    var lName = prompt("What is your last Name? ");
    var age;
    while (true){
        this.age = prompt("What is your age in years from 1 - 120?");
        if (this.age >= 1 && this.age <= 120) {            
            break;
        } else {
            alert("That age is not in the valid range. Please try again.");
        }
    }
   
    personHolder = new Person(fName, lName);
    personHolder.age = this.age;
 
    
}

function showSteps() {
    if (typeof personHolder === "undefined") {
        alert("object does not exist; please click the Fill Object button first.")
    } else {
        alert(personHolder.age);
        alert(personHolder.firstName);
        personHolder.stepsToTake = 10;
        var steps = personHolder.steps();     
        alert(personHolder.firstName + " " + personHolder.lastName + " took steps " + "\n" + steps);
    }
}

function getDegreesInC(Fahrenheit) {
    var Convert = new Converter();
    alert(Convert.FtoC(Fahrenheit));
}

function getDegreesInF(Celsius) {
    var Convert = new Converter();
    alert(Convert.CtoF(Celsius));
}

function fillCharacterArray() {
    var fNames = ["Fred", "Wilma", "Pebbles","Barney","Betty","BamBam"];
    var lNames = ["Flintstone","Flintstone","Flinstone","Rubble","Rubble","Rubble"];
    var ages = [36, 34, 7, 34, 32, 8];
    characters = [];

    for (var index = 0; index < fNames.length; index++) {
        var person = new Person(fNames[index], lNames[index]);
      
        var Character = Object.create(person);
        Character.age = ages[index];
        characters[index] = Character;
    }

}

function getCharacterAt(index) {
    if (typeof characters === "undefined") {
        alert("Array has not been filled. Please click the 'Fill characters array' button.");
    } else {
        var character = characters[index];
        alert(character.firstName + " your odd age sum is " + character.Age())
    }
}