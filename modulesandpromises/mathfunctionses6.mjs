//export wird direkt vor functions geschrieben die man exportieren möchte

export function multiplication(number) {
    return number * number
}
export function division(numberA, numberB) {
    return numberA / numberB
}
export function addition(number) {
    return number + number
}
//um Objekte zu exportieren, werden diese erst angelegt
const mathFunctions = {
    multiplication,
    addition
}
//dem default export kann immer nur eine function/ein Objekt/ ein array zugewiesen werden
export default mathFunctions