//@ts-check
import assert from "node:assert/strict";

//check parameters for the triangle generation function to see
//if they are a number and a positive integer
function checkParamsForGeneration(rowCount) {
    if (typeof rowCount != "number") {
        throw new Error("Input is not a number")
    }
    if (rowCount < 0) {
        throw new Error("Input can't be negative")
    }
}

//check if input parameters for SpecificValue function fit the criteria being a number and not higher
//than the length of the array

function checkParamsforSpecificValue(targetRow, targetColumn, pascalsTriangle) {
    if (typeof targetRow != "number") {
        throw new Error("target row needs to be a number")
    }
    if (typeof targetColumn != "number") {
        throw new Error("target column needs to be a number")
    }
    if (targetRow >= pascalsTriangle.length) {//changed operator because of hint in weekly review
        throw new Error("target row outside calculated area")
    }
    if (targetColumn > targetRow - 1) {
        throw new Error("target column outside calculated area")
    }
    if (targetRow < 0) {
        throw new Error("target row can't be negative")
    }
    if (targetColumn < 0) {
        throw new Error("target column can't be negative")
    }
}

//generate function
function generatePascalsTriangle(rowCount) {
    checkParamsForGeneration(rowCount)
    if (rowCount === 0) { //if rowCount equals 0, an empty array gets returned
        return []
    }
    if (rowCount === 1) { //if rowCount equals 1, only a 1 at the top gets returned
        return [[1]]
    }
    const result = [] //initializing the result array
    for (let row = 0; row < rowCount; row++) { //initializing a new array for each row
        let currentRow = []
        for (let column = 0; column <= row; column++) {
            if (column === 0 || column === row) { // the 1st and last position are always 1
                currentRow.push(1)
            } else {
                currentRow.push((result[row - 1][column - 1] + result[row - 1][column]))
                //calculating the value at current position by adding the top left and top right values together
                // row-1 because we start at row 1 but result array is 0-based
            }
        }
        result.push(currentRow) //pushing each array for each row into the result array
    }
    return result
}

//function which prints the generated pascalsTriangle
//makes it visually more appealing through adding x-amount of whitespaces infront of the individual numbers
function printPascalsTriangle(pascalsTriangle) {
    let output = "" // define empty string
    const largestCharCount = getLargestCharCount(pascalsTriangle)
    for (let row = 1; row <= pascalsTriangle.length; row++) { //loop through each row starting at the 1st
        for (let column = 0; column < pascalsTriangle.length - row; column++) { //adding whitespace
            output += " ".repeat(largestCharCount)
        }
        for (let index = 0; index < row; index++) {
            let charCount = pascalsTriangle[row - 1][index].toString().length
            //console.log(charCount)
            let spaceAmount = largestCharCount - charCount
            //console.log(spaceAmount)
            let currentValue = " ".repeat(spaceAmount) + pascalsTriangle[row - 1][index].toString() + " ".repeat(largestCharCount)
            //output += pascalsTriangle[row - 1][index] + " " //first element is index 0 not index 1
            output += currentValue
        }
        output += "\n"
    }
    console.log(output)
}

//function which returns the character count of the highest integer in the calculated triangle
//could be used to better format the triangle in terms of spaces before each integer
function getLargestCharCount(pascalsTriangle) {
    return pascalsTriangle[pascalsTriangle.length - 1][Math.floor(pascalsTriangle.length / 2)].toString().length
}

//function which returns any value in the calculated triangle given the right row and column
function getSpecificValue(targetRow, targetColumn, pascalsTriangle) {
    checkParamsforSpecificValue(targetRow, targetColumn, pascalsTriangle)
    return pascalsTriangle[targetRow][targetColumn] // -1 passt nicht
}

//function which returns the highest value between row-column-pairs
//testing which combination of rows and columns results in the highest number
function getHighestValue(row1, row2, column1, column2, pascalsTriangle) {
    const maxArray = []
    maxArray.push(
        getSpecificValue(row1, column1, pascalsTriangle),
        getSpecificValue(row2, column2, pascalsTriangle),
        getSpecificValue(row1, column2, pascalsTriangle),
        getSpecificValue(row2, column1, pascalsTriangle))
    return Math.max(...maxArray)
}
//function call with 20 generated rows
let pascalsTriangle = generatePascalsTriangle(15)
//console.log(pascalsTriangle)

printPascalsTriangle(pascalsTriangle)

//asserts for generatePascalsTriangle
assert.deepEqual(generatePascalsTriangle(5), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]])
assert.deepEqual(generatePascalsTriangle(1), [[1]])
assert.deepEqual(generatePascalsTriangle(10), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1], [1, 7, 21, 35, 35, 21, 7, 1], [1, 8, 28, 56, 70, 56, 28, 8, 1], [1, 9, 36, 84, 126, 126, 84, 36, 9, 1]])
assert.deepEqual(generatePascalsTriangle(2), [[1], [1, 1]])
assert.deepEqual(generatePascalsTriangle(1), [[1]])
assert.deepEqual(generatePascalsTriangle(7), [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1]])

//asserts for specificValue
assert.deepEqual(getSpecificValue(5, 0, pascalsTriangle), 1)
assert.deepEqual(getSpecificValue(9, 3, pascalsTriangle), 84)
assert.deepEqual(getSpecificValue(11, 7, pascalsTriangle), 330)
assert.deepEqual(getSpecificValue(14, 4, pascalsTriangle), 1001)
assert.deepEqual(getSpecificValue(1, 0, pascalsTriangle), 1)

//asserts for highestValue
assert.equal(getHighestValue(7, 6, 2, 2, pascalsTriangle), 21)
assert.equal(getHighestValue(6, 9, 4, 5, pascalsTriangle), 126)
assert.equal(getHighestValue(3, 2, 0, 1, pascalsTriangle), 3)

//asserts for exception handling
assert.throws(() => generatePascalsTriangle(true), new Error("Input is not a number"))
assert.throws(() => generatePascalsTriangle(-1), new Error("Input can't be negative"))
assert.throws(() => getSpecificValue(3, 4, pascalsTriangle), new Error("target column outside calculated area"))
assert.throws(() => getSpecificValue("a", 4, pascalsTriangle), new Error("target row needs to be a number"))
assert.throws(() => getSpecificValue(3, "a", pascalsTriangle), new Error("target column needs to be a number"))
assert.throws(() => getSpecificValue(21, 4, pascalsTriangle), new Error("target row outside calculated area"))