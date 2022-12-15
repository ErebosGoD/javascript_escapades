//@ts-check
import assert from "node:assert/strict";


function validateInputParameter(numericValue, sourceArray, targetArray) {
    if (numericValue === "") {
        throw new Error("String is empty")
    }
    if (typeof numericValue !== "string") {
        throw new Error("Input is not a string")
    }
    if (!Array.isArray(sourceArray)) {
        throw new Error("Input alphabet is of the wrong datatype")
    }
    if (!Array.isArray(targetArray)) {
        throw new Error("Output alphabet is of the wrong datatype")
    }
    if (sourceArray.length === 0) {
        throw new Error("Empty input alphabet")
    }
    if (targetArray.length === 0) {
        throw new Error("Empty output alphabet")
    }
    if (sourceArray.includes("")) {
        throw new Error("Input alphabet consists of empty string")
    }
    if (targetArray.includes("")) {
        throw new Error("Output alphabet consists of empty string")
    }
}

function isNumericValueInSourceArray(numericValue, sourceArray) {
    const numericArray = numericValue.split("")
    numericArray.forEach(character => {
        if (!sourceArray.includes(character)) {
            throw new Error("Input contains invalid character")
        }
    })
}

function convertCustomNumericSystems(numericValue, sourceArray, targetArray) { // Eingabe-Wert als String, Eingabe-Alphabet und Ausgabe-Alphabet als Array
    validateInputParameter(numericValue, sourceArray, targetArray)
    isNumericValueInSourceArray(numericValue, sourceArray)
    //console.log(isNumericValueInSourceArray(numericValue, sourceArray))
    const numericString = numericValue.split("").reverse().join("")
    //Da bei Zahlensystemen von rechts nach links der Index gezählt wird muss der Eingabe-String vorher umgekehrt werden
    let decimalResult = 0
    //Variable für Schritt 1 Source zu Dezimal deklarieren
    let str = ""
    //Leeren String für Ausgabe deklarieren
    for (let index = 0; index < numericString.length; index++) {
        decimalResult += Math.pow(sourceArray.length, index) * sourceArray.indexOf(numericString[index])
        //Dezimal-Variable mit aktuellem Index des numericStrings * mal die Länge des SourceArrays (auch Base) hoch dem aktuellen Index updaten
    }
    while (decimalResult > 0) {
        str = targetArray.at((decimalResult % targetArray.length)) + str
        //Dem String für jeden Schritt das für den Rest passende Zeichen des Ausgabe-Alphabets hinzufügen
        decimalResult = Math.floor(decimalResult / targetArray.length)
        //in jedem Schritt das Dezimal-Ergebnis durch die Länge des Ausgabe-Alphabets (Base) teilen
    }
    return str
}

/*function convertCustomNumericSystems(numericValue, sourceArray, targetArray) {
    return convertDecimalToTarget(convertSourceToDecimal(numericValue, sourceArray), targetArray)
 
}
function convertSourceToDecimal(numericValue, sourceArray) {
    let numericString = numericValue.split("").reverse().join("")
    let resultNumber = 0
    let sourceLength = sourceArray.length
    for (let index = 0; index < numericString.length; index++) {
        resultNumber += Math.pow(sourceLength, index) * sourceArray.indexOf(numericString[index])
    }
    return resultNumber
}
function convertDecimalToTarget(decimalResult, targetArray) {
    let resultString = ""
    while (decimalResult > 0) {
        resultString = targetArray.at((decimalResult % targetArray.length)) + resultString
        decimalResult = Math.floor(decimalResult / targetArray.length)
    }
    return resultString
}*/

const base2 = ["0", "1"]
const base3 = ["0", "1", "2"]
const base4 = ["0", "1", "2", "3"]
const base5 = ["0", "1", "2", "3", "4"]
const base6 = ["0", "1", "2", "3", "4", "5"]
const base7 = ["0", "1", "2", "3", "4", "5", "6"]
const base8 = ["0", "1", "2", "3", "4", "5", "6", "7"]
const base9 = ["0", "1", "2", "3", "4", "5", "6", "7", "8"]
const base10 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const base16 = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
const customBase2 = [":-)", ":-("]
const customBase3 = ["X", "Y", "Z"]
const customBase8 = ["0", "2", "4", "6", "8", "A", "C", "E"]
const base8C = ["", "", "", "", "", "", "", ""]
const base2C = ["", ""]

/*assert.equal(convertCustomNumericSystems("22101", base3, customBase3), "ZZYXY")
assert.equal(convertCustomNumericSystems("160", base10, base3), "12221")
assert.equal(convertCustomNumericSystems("4610036", base7, base10), "573866")
assert.equal(convertCustomNumericSystems("AAD01B", base16, base4), "222231000123")
assert.equal(convertCustomNumericSystems("4331400", base5, base9), "122424")
assert.equal(convertCustomNumericSystems("1101100101", base2, base16), "365")
assert.equal(convertCustomNumericSystems("XXZXY", customBase3, base2), "10011")
assert.equal(convertCustomNumericSystems("XXZYX", customBase3, customBase8), "4A")
assert.equal(convertCustomNumericSystems("7403", base8, customBase8), "E806")
assert.equal(convertCustomNumericSystems("110101", base2, customBase2), ":-(:-(:-):-(:-):-(")
assert.equal(convertCustomNumericSystems("47", base8, customBase2), ":-(:-):-):-(:-(:-(")
assert.equal(convertCustomNumericSystems("AAD0", base16, customBase8), "24A640")
assert.equal(convertCustomNumericSystems("47291", base10, base10), "47291")

assert.throws(() => convertCustomNumericSystems("", base8, base2), new Error("String is empty"))*/
assert.throws(() => convertCustomNumericSystems(80017, base8, base2), new Error("Input is not a string"))
/*assert.throws(() => convertCustomNumericSystems("3057120", 8, base2), new Error("Input alphabet is of the wrong datatype"))
assert.throws(() => convertCustomNumericSystems("3057120", base8, 2), new Error("Output alphabet is of the wrong datatype"))
assert.throws(() => convertCustomNumericSystems("3057120", [], base2), new Error("Empty input alphabet"))
assert.throws(() => convertCustomNumericSystems("3057120", base8, []), new Error("Empty output alphabet"))
assert.throws(() => convertCustomNumericSystems("3057120", base8C, base2), new Error("Input alphabet consists of empty string"))
assert.throws(() => convertCustomNumericSystems("3057120", base8, base2C), new Error("Output alphabet consists of empty string"))
assert.throws(() => convertCustomNumericSystems("305a120", base8, base2), new Error("Input contains invalid character"))*/
