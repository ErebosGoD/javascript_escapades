//@ts-check
import assert from "node:assert/strict";

function formatDecimalToHexadecimal(decimalValue) {
    let value = decimalValue
    let str = ""
    while (value > 0) {
        if (value % 16 === 10) {
            str = "A" + str
        } else if (value % 16 === 11) {
            str = "B" + str
        } else if (value % 16 === 12) {
            str = "C" + str
        } else if (value % 16 === 13) {
            str = "D" + str
        } else if (value % 16 === 14) {
            str = "E" + str
        } else if (value % 16 === 15) {
            str = "F" + str
        } else {
            str = (value % 16) + str
        }
        value = Math.floor(value / 16)

    }
    return str
}

function formatDecimalToHexadecimal(decimalValue) {
    let value = decimalValue
    let str = ""
    while (value > 0) {
        str = ((value % 16 > 9) ? String.fromCharCode((value % 16) + 55) : (value % 16)) + str
        value = Math.floor(value / 16)
    }
    return str

}






assert.equal(formatDecimalToHexadecimal(313), "139")
assert.equal(formatDecimalToHexadecimal(1024), "400")
assert.equal(formatDecimalToHexadecimal(97), "61")
assert.equal(formatDecimalToHexadecimal(42), "2A")
assert.equal(formatDecimalToHexadecimal(666), "29A")
assert.equal(formatDecimalToHexadecimal(2705), "A91")
assert.equal(formatDecimalToHexadecimal(1047), "417")
assert.equal(formatDecimalToHexadecimal(2791), "AE7")
assert.equal(formatDecimalToHexadecimal(3410), "D52")
assert.equal(formatDecimalToHexadecimal(1493), "5D5")
assert.equal(formatDecimalToHexadecimal(4374), "1116")
assert.equal(formatDecimalToHexadecimal(8326), "2086")