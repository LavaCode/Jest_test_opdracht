/*--- Jest Unit Testing file: index.js ---*/

//// IMPORTS
const { retirementCalculator, basicCalculator } = require("./index");

//// RETIREMENT CALCULATOR TESTS

test('Geeft retirementCalculator een correcte waarde terug?', function () {
    const age = 30;

    const result = retirementCalculator(age);
    expect(result).toBe("You still have to work for 37 years. Sad!");
});

test('Geeft retirementCalculator een foutmelding terug bij negatieve age?', function () {
    const age = -30;

    const result = retirementCalculator(age);
    expect(result).toBe("You don't exist (yet)");
});

test('Geeft retirementCalculator een foutmelding terug bij te hoge age?', function () {
    const age = 250; //age should be 150 or above

    const result = retirementCalculator(age);
    expect(result).toBe("You should be dead. Big time.");
});

test('Geeft retirementCalculator een melding terug als je al met pensioen zou moeten zijn?', function () {
    const age = 70; //67 of hoger

    const result = retirementCalculator(age);
    expect(result).toBe("You should be retired already!");
});

test('Geeft retirementCalculator een melding terug als je een verkeerde waarde meegeeft?', function () {
    let a;
    const age = a;

    const result = retirementCalculator(age);
    expect(result).toBe("age is commonly written in numbers. Try again");
});

test('Geeft retirementCalculator een melding terug als je een tekst ipv nummer meegeeft?', function () {
    const age = "ik ben 30 jaar oud";

    const result = retirementCalculator(age);
    expect(result).toBe("age is commonly written in numbers. Try again");
});

//// BASIC CALCULATOR TESTS
test('Geeft basicCalculator de juist waarde bij een optelopdracht?', function () {
    const num1 = 1000;
    const operator = "+";
    const num2 = 100;

    const result = basicCalculator(num1, operator, num2);
    expect(result).toBe(1100);
});

test('Geeft basicCalculator de juist waarde bij een aftelopdracht?', function () {
    const num1 = 1000;
    const operator = "-";
    const num2 = 100;
    const result = basicCalculator(num1, operator, num2);

    expect(result).toBe(900);
});

test('Geeft basicCalculator de juist waarde bij een vermenigvuldingsopdracht?', function () {
    const num1 = 1000;
    const operator = "*";
    const num2 = 100;
    const result = basicCalculator(num1, operator, num2);

    expect(result).toBe(100000);
});

test('Geeft basicCalculator de juist waarde bij een verdeelopdracht?', function () {
    const num1 = 1000;
    const operator = "/";
    const num2 = 100;
    const result = basicCalculator(num1, operator, num2);

    expect(result).toBe(10);
});

test('Geeft basicCalculator een undefined bij verkeerde invoer van string bij waarde 1?', function () {
    const num1 = "3";
    const operator = "/";
    const num2 = 100;
    const result = basicCalculator(num1, operator, num2);

    expect(result).toBeUndefined();
});

test('Geeft basicCalculator een undefined bij invoer van nummer bij waarde 2?', function () {
    const num1 = 1000;
    const operator = 3;
    const num2 = 100;
    const result = basicCalculator(num1, operator, num2);

    expect(result).toBeUndefined();
});

test('Geeft basicCalculator een undefined bij invoer van nummer bij waarde 2?', function () {
    const num1 = 1000;
    const operator = 3;
    const num2 = 100;
    const result = basicCalculator(num1, operator, num2);

    expect(result).toBeUndefined();
});

test('Geeft basicCalculator een melding bij invoer van geen-operator bij waarde 2?', function () {
    const num1 = 1000;
    const operator = "3";
    const num2 = 100;
    const result = basicCalculator(num1, operator, num2);

    expect(result).toBe("Please correct value 2 to a basic operator (+, -, / or *)");
});


//// EINDE TESTS