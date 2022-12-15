function addition(numberA, numberB) {
    return numberA + numberB
}

function division(numberA, numberB) {
    return numberA / numberB
}
const pi = 3.14
//syntax for exporting
module.exports.pi = pi
module.exports.addition = addition
module.exports.division = division
//longer version because of bad readability
module.exports.multiplication = function multiplication(numberA, numberB) {
    return numberA * numberB
}