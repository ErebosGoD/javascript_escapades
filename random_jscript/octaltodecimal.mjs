//@ts-check
import assert from "node:assert/strict";

function formatOctalToDecimal(octalValue) {
    const octalString = octalValue.split("").reverse()
    let result = 0
    for (let index = 0; index < octalString.length; index++) {
        result += octalString[index] * Math.pow(8, index)
    }
    return result
}

/*function formatOctalToDecimal(octalValue) {
    const octalString = octalValue.split("").reverse()
    let result = 0
    for (let index = 0; index < octalString.length; index++) {
        if (octalString[index] < "8") {
            result += Math.pow(8, index)
        } else {
            result += 0
        }
    }
    return result
}*/







assert.equal(formatOctalToDecimal("14"), 12)
assert.equal(formatOctalToDecimal("325"), 213)
assert.equal(formatOctalToDecimal("5264"), 2740)
assert.equal(formatOctalToDecimal("52"), 42)
assert.equal(formatOctalToDecimal("745"), 485)
assert.equal(formatOctalToDecimal("1411"), 777)