//@ts-check
import assert from "node:assert/strict";

function formatDecimalToBinary(decimalValue) {
    let value = decimalValue // einer Variable den Eingabe Wert zugewiesen
    let str = "" //leeren String definiert
    while (value > 0) { //while Schleife die prüft, solange value > 0 ist
        str = value % 2 + str // Str aktualisieren mit modulo und vorhandenem String
        value = Math.floor(value / 2)//aktuelle value durch 2 teilen und abrunden
    }
    return str

}

function formatDecimalToBinary(decimalValue) {
    let value = decimalValue
    let str = ""
    while (value > 0) {
        if (value % 2 === 1) { //wenn value modulo 2 Rest 1 hat
            str = "1" + str
        } else { // also kein Rest
            str = "0" + str
        }
        value = Math.floor(value / 2)

    }
    return str
}

//toString() konvertiert eine angegebene Zahl im Zahlensystem der angegeben Basis (2 = binär)
/*function formatDecimalToBinary(decimalValue) {
    return decimalValue.toString(2)
 
}*/



assert.equal(formatDecimalToBinary(12), "1100")
assert.equal(formatDecimalToBinary(213), "11010101")
assert.equal(formatDecimalToBinary(2740), "101010110100")
assert.equal(formatDecimalToBinary(42), "101010")
assert.equal(formatDecimalToBinary(485), "111100101")
assert.equal(formatDecimalToBinary(777), "1100001001")



