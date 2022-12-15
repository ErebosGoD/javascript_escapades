//@ts-check
import assert from "node:assert/strict";

function formatDecimalToOctal(decimalValue) {
    let value = decimalValue
    let str = ""
    while (value > 0) {
        str = value % 8 + str
        value = Math.floor(value / 8)
    }
    return str

}



/*function formatDecimalToOctal(decimalValue) {
    let value = decimalValue
    let str = ""
    while (value > 0) {
        if (value % 8 === 7) {
            str = "7" + str
        } else if (value % 8 === 6) {
            str = "6" + str
        } else if (value % 8 === 5) {
            str = "5" + str
        } else if (value % 8 === 4) {
            str = "4" + str
        } else if (value % 8 === 3) {
            str = "3" + str
        } else if (value % 8 === 2) {
            str = "2" + str
        } else if (value % 8 === 1) {
            str = "1" + str
        } else {
            str = "0" + str
        }
        value = Math.floor(value / 8)

    }
    return str
}*/


assert.equal(formatDecimalToOctal(12), "14")
assert.equal(formatDecimalToOctal(213), "325")
assert.equal(formatDecimalToOctal(2740), "5264")
assert.equal(formatDecimalToOctal(42), "52")
assert.equal(formatDecimalToOctal(485), "745")
assert.equal(formatDecimalToOctal(777), "1411")