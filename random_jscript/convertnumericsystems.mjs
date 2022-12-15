//@ts-check
import assert from "node:assert/strict";

function convertNumericSystems(numericValue, currentBase, targetBase) { //Eingabe als String, Eingabe-Base, Ausgabe-Base
    const numericString = numericValue.split("").reverse().join("")
    //Da in Zahlensystemen von rechts nach links sich der Index angeschaut wird muss der Eingabe String reversed werden um wieder die richtigen Indices zu haben
    let decimalResult = 0
    //Variable für Schritt 1 Umrechnung von currentBase in Base10
    let str = ""
    //Leeren String für Ausgabe deklarieren
    for (let index = 0; index < numericString.length; index++) {
        decimalResult += ((numericString[index] < 10) ? numericString[index] : (numericString.charCodeAt(index) - 55)) * Math.pow(currentBase, index)
        //Für jeden Wert des Indexes der Eingabe Strings prüfen, < 10 ? Wenn ja, einfach den Index mit der currentBase hoch dem aktuellen Index multiplzieren
        //Wenn nein mit Hilfe von charCodeAt Umwandlung des aktuellen Indexwertes in ASCII Code und von diesem dann 55 subtrahieren um den richtigen Wert zu kommen
        //BSPL: A in hex = 10 in dezimal, da dezimal aber nur die Ziffern 0-9 besitzt macht man sich die ASCII-Tabelle zu nutze 
    }
    while (decimalResult > 0) {
        str = ((decimalResult % targetBase > 9) ? String.fromCharCode((decimalResult % targetBase) + 55) : (decimalResult % targetBase)) + str
        //Ergebnis-String updaten, ist Rest größer als 9? Wenn Ja, mithilfe der Addition von 55 zum Rest Umwandlung in ASCII-Zeichen
        //Wenn Nein 
        decimalResult = Math.floor(decimalResult / targetBase)
        //Dezimal-Result nach jedem Schritt durch die targetBase teilen
    }
    return str
}
assert.equal(convertNumericSystems("3057120", 8, 2), "11000101111001010000")
assert.equal(convertNumericSystems("160", 10, 3), "12221")
assert.equal(convertNumericSystems("4610036", 7, 10), "573866")
assert.equal(convertNumericSystems("AAD01B", 16, 4), "222231000123")
assert.equal(convertNumericSystems("4331400", 5, 9), "122424")
assert.equal(convertNumericSystems("1101100101", 2, 16), "365")