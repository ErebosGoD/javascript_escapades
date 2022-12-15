//@ts-check
import assert from "node:assert/strict";

function formatBinaryToDecimal(binaryValue) {
    const binaryString = binaryValue.split("").reverse()
    let result = 0
    for (let index = 0; index < binaryString.length; index++) {
        result += binaryString[index] === "1" ? Math.pow(2, index) : 0
    }
    return result
}







assert.equal(formatBinaryToDecimal("1100"), 12)
assert.equal(formatBinaryToDecimal("11010101"), 213)
assert.equal(formatBinaryToDecimal("101010110100"), 2740)
assert.equal(formatBinaryToDecimal("101010"), 42)
assert.equal(formatBinaryToDecimal("111100101"), 485)
assert.equal(formatBinaryToDecimal("1100001001"), 777)