const test = function multiplication(numberA, numberB) {
    return numberA * numberB
};
console.log(test);

//importing the mathfunctions from mathfunctionsNode.js
const mathfunctions = require("./mathfunctionsNode")
//only accessing the division function from the imported math functions
const { division } = require("./mathfunctionsNode")
//logging the result of the imported addition function with 2 as the argument
console.log(mathfunctions.addition(2, 3))
//logging the result of the imported division function with 4 and 2 as arguments 
console.log(division(4, 2));
//logging the imported module which contains only the division function
console.log({ division });
//logging the mathfunctions module to the console to see which functions are imported
console.log(mathfunctions);
//showcasing that the multiplication doesnt work if only the division function has been imported
console.log(multiplication(2))