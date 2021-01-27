function retirementCalculator(age) {
    if(!Number.isInteger(age)){
        return "age is commonly written in numbers. Try again";
    }
    else if(age < 0) {
        return "You don't exist (yet)";
    }
    else if(age >= 67 && age < 150) {
        return "You should be retired already!";
    }
    else if(age > 150) {
        return "You should be dead. Big time.";
    } else {
        const yearsLeft = 67 - age;
        return "You still have to work for " + yearsLeft + " years. Sad!";
    }
}

function basicCalculator(stringValue1, stringValue2, stringValue3) {
    if(!Number.isInteger(stringValue1) || Number.isInteger(stringValue2) || !Number.isInteger(stringValue3)) {
        console.log("Wrong input, make sure your first value is a number, your second value is a operator(as string defined), your third value is a number");
    }
    else if(stringValue2 === "+") {
        const result = stringValue1 + stringValue3;
        return result;
    }
    else if (stringValue2 === "-") {
        const result = stringValue1 - stringValue3;
        return result;
    }
    else if (stringValue2 === "/") {
        const result = stringValue1 / stringValue3;
        return result;
    }
    else if (stringValue2 === "*") {
        const result = stringValue1 * stringValue3;
        return result;
    }
    else {
        return "Please correct value 2 to a basic operator (+, -, / or *)";
    }
}

//exports
module.exports = {
    retirementCalculator : retirementCalculator,
    basicCalculator : basicCalculator,
};


let a;
console.log(retirementCalculator(a));
// console.log("---------------------------");
// console.log("The result of your calculation is : " + basicCalculator("a", "+", 3));

