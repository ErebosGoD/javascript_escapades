//@ts-check
import assert from "node:assert/strict";

function formatHexadecimalToDecimal(hexValue) {
    let value = hexValue.split("").reverse().join("")
    let result = 0
    for (let index = 0; index < value.length; index++) {
        result += ((value[index] < 10) ? value[index] : (value.charCodeAt(index) - 55)) * Math.pow(16, index)
        /*if (value[index] === "A") {
            result += (value.charCodeAt(index) - 55) * Math.pow(16, index)
        } else if (value[index] === "B") {
            result += (value.charCodeAt(index) - 55) * Math.pow(16, index)
        } else if (value[index] === "C") {
            result += (value.charCodeAt(index) - 55) * Math.pow(16, index)
        } else if (value[index] === "D") {
            result += (value.charCodeAt(index) - 55) * Math.pow(16, index)
        } else if (value[index] === "E") {
            result += (value.charCodeAt(index) - 55) * Math.pow(16, index)
        } else if (value[index] === "F") {
            result += (value.charCodeAt(index) - 55) * Math.pow(16, index)
        } else {
            result += (value[index] * Math.pow(16, index))
        }*/
    }
    return result
}












assert.equal(formatHexadecimalToDecimal("A91"), 2705)
assert.equal(formatHexadecimalToDecimal("139"), 313)
assert.equal(formatHexadecimalToDecimal("400"), 1024)
assert.equal(formatHexadecimalToDecimal("61"), 97)
assert.equal(formatHexadecimalToDecimal("2A"), 42)
assert.equal(formatHexadecimalToDecimal("29A"), 666)
assert.equal(formatHexadecimalToDecimal("417"), 1047)
assert.equal(formatHexadecimalToDecimal("AE7"), 2791)
assert.equal(formatHexadecimalToDecimal("D52"), 3410)
assert.equal(formatHexadecimalToDecimal("5D5"), 1493)
assert.equal(formatHexadecimalToDecimal("1116"), 4374)
assert.equal(formatHexadecimalToDecimal("2086"), 8326)