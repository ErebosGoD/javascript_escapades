//@ts-check
import assert from "node:assert/strict";

//periphery parent class
class Periphery {
    constructor(brand, hasBluetooth) {
        this.brand = brand
        this.hasBluetooth = hasBluetooth
    }
}

//furniture parent class
class Furniture {
    constructor(length, width, height, material) {
        this.length = length
        this.width = width
        this.height = height
        this.material = material
    }
}

//table child class to furniture parent class
class Table extends Furniture {
    #increasedHeight = false
    constructor(length, width, height, material, legCount) {
        super(length, width, height, material)
        this.legCount = legCount
    }
    increaseHeight() {
        if (this.#increasedHeight == false) {
            this.#increasedHeight = true
            this.height += 60
            return this.height
        } else {
            return "Height has already been increased"
        }
    }
    decreaseHeight() {
        if (this.#increasedHeight == true) {
            this.#increasedHeight = false
            this.height -= 60
            return this.height;
        } else {
            return "Height has already been decreased"
        }
    }
    info() {
        return "This table is " + this.length + " centimeters long, " + this.width + " centimeters wide and " + this.height + " centimeters tall. It is made out of " + this.material + " and has " + this.legCount + " legs."
    }
}

//door child class to furniture parent class
class Door extends Furniture {
    #isDoorClosed = false;
    constructor(length, width, height, material) {
        super(length, width, height, material)
    }
    openDoor() {
        if (this.#isDoorClosed == false) {
            this.#isDoorClosed = true
            return "The door is open now"
        } else
            return "The door is open already"
    }
    closeDoor() {
        if (this.#isDoorClosed == true) {
            this.#isDoorClosed = false
            return "The door is closed now"
        } else {
            return "The door is closed already"
        }
    }
    info() {
        return "This door is " + this.length + " centimeters long, " + this.width + " centimeters wide and " + this.height + " centimeters tall. It is made out of " + this.material
    }
}

//Office chair child class to furniture parent class
class OfficeChair extends Furniture {
    #changedBackrestAngle = false
    constructor(length, width, height, material, casters, backrestAngle) {
        super(length, width, height, material)
        this.casters = casters
        this.backrestAngle = backrestAngle
    }
    flattenBackrestAngle() {
        if (this.#changedBackrestAngle == false) {
            this.#changedBackrestAngle = true
            return this.backrestAngle = 160
        } else {
            return "The backrest angle has already been flattened"
        }
    }
    straightenBackrestAngle() {
        if (this.#changedBackrestAngle == true) {
            this.#changedBackrestAngle = false
            return this.backrestAngle = 90
        } else {
            return "The backrest angle has already been straightened"
        }
    }
    info() {
        return "This office chair is " + this.length + " centimeters long, " + this.width + " centimeters wide and " + this.height + " centimeters tall. It is made out of " + this.material + " , has " + this.casters + " caster and a backrestangle of " + this.backrestAngle + " degrees"
    }
}

// shelf child class to furniture parent class
class Shelf extends Furniture {
    #maxSpaces
    constructor(length, width, height, material, spaces) {
        super(length, width, height, material)
        this.spaces = spaces
        this.#maxSpaces = spaces
    }
    store() {
        if (this.spaces > 0) {
            this.spaces -= 1
            return "You filled a space in the shelf"
        } else {
            return "The shelf is already full"
        }
    }
    takeOut() {
        if (this.spaces == 0 || this.spaces < this.#maxSpaces) {
            this.spaces += 1
            return "You took something out of the shelf"
        } else {
            return "The shelf is already empty"
        }
    }
    howManySpaces() {
        return "The shelf has " + this.spaces + " spaces left"
    }
    info() {
        return "This shelf is " + this.length + " centimeters long, " + this.width + " centimeters wide and " + this.height + " centimeters tall. It is made out of " + this.material + " and has " + this.spaces + " spaces."
    }
}

class NotebookStand extends Furniture {
    constructor(length, width, height, material, color) {
        super(length, width, height, material)
        this.color = color
    }
    info() {
        return "This notebookstand is " + this.length + " centimeters long, " + this.width + " centimeters wide and " + this.height + " centimeters tall. It is made out of " + this.material + " and has the color " + this.color
    }
}

// monitor parent class
class Monitor {
    constructor(brand, screenSize) {
        this.brand = brand
        this.screenSize = screenSize
    }
    info() {
        return "This monitor is of the " + this.brand + " brand and has a screen size of " + this.screenSize + " inches diagonally"
    }
}

// notebook parent class
class Notebook {
    #isOperational = false
    constructor(brand, model, operatingSystem, screenSize) {
        this.brand = brand
        this.model = model
        this.operatingSystem = operatingSystem
        this.screenSize = screenSize
    }
    bootUp() {
        if (this.#isOperational == false) {
            this.#isOperational = true
            return "Your " + this.brand + " " + this.model + " is now operational"
        } else {
            return "Your " + this.brand + " " + this.model + " is already operational"
        }

    }
    shutDown() {
        if (this.#isOperational == true) {
            this.#isOperational = false
            return "Shutting down your " + this.brand + " " + this.model
        } else {
            return "Your " + this.brand + this.model + " " + " is already shut down"
        }

    }
    info() {
        return "This notebook is of the " + this.brand + " brand and is the model " + this.model + ". It runs " + this.operatingSystem + " with a screen size of " + this.screenSize + " inches diagonally."
    }
}

class AirFilter {
    #isTurnedOn = false
    constructor(brand, hasUVLight, color) {
        this.brand = brand
        this.hasUVLight = hasUVLight
        this.color = color
    }
    turnOn(number) {
        if (this.#isTurnedOn == false) {
            this.#isTurnedOn = true
            if (number <= 3) {
                return "The filter runs on setting " + number
            } else {
                return "The filter doesn't have this setting"
            }
        }

    }
    turnOff() {
        if (this.#isTurnedOn == true) {
            this.#isTurnedOn = false
            return "The airfilter is turned off"
        }
    }
    info() {
        return "This airfilter is of the brand " + this.brand + " and has the color " + this.color + ". Does it have a UV light? " + this.hasUVLight
    }
}

//initializing office array
const office = []

//creating object instances

const door = new Door(100, 4, 200, "wood")
const maftunasTable = new Table(180, 80, 100, "wood", 2)
const pascalsTable = new Table(180, 80, 100, "wood", 2)
const ricardosTable = new Table(180, 80, 100, "wood", 2)
const maftunasChair = new OfficeChair(40, 40, 150, "plastic/metal", 5, 90)
const pascalsChair = new OfficeChair(40, 40, 150, "plastic/metal", 5, 90)
const ricardosChair = new OfficeChair(40, 40, 150, "plastic/metal", 5, 90)
const shelf = new Shelf(200, 30, 50, "wood", 8)
const airfilter = new AirFilter("TruSens", "yes", "white")
const maftunasMonitor = new Monitor("BenQ", 32)
const pascalsMonitor = new Monitor("Philips", 32)
const ricardosMonitor = new Monitor("Philips", 32)
const pascalsNotebookStand = new NotebookStand(20, 30, 17, "metal", "white")
const ricardosNotebookStand = new NotebookStand(20, 30, 17, "metal", "white")
const pascalsNotebook = new Notebook("Lenovo", "ThinkPad T14s", "Linux", 14)
const ricardosNotebook = new Notebook("Lenovo", "ThinkPad T14s", "Linux", 14)

//pushing all generated objects into array
office.push(door, maftunasTable, pascalsTable, ricardosTable, maftunasChair, pascalsChair, ricardosChair, shelf, airfilter, maftunasMonitor, pascalsMonitor, ricardosMonitor, pascalsNotebookStand, ricardosNotebookStand, pascalsNotebook, ricardosNotebook)

//iterating over the array and printing the info method to the console
for (let index = 0; index < office.length; index++) {
    //console.log(office[index].info())
}


assert.equal(door.openDoor(), "The door is open now")
assert.equal(door.closeDoor(), "The door is closed now")
assert.equal(door.info(), "This door is " + door.length + " centimeters long, " + door.width + " centimeters wide and " + door.height + " centimeters tall. It is made out of " + door.material)
assert.equal(pascalsTable.increaseHeight(), pascalsTable.height)
assert.equal(pascalsTable.decreaseHeight(), pascalsTable.height)
assert.equal(pascalsTable.info(), "This table is " + pascalsTable.length + " centimeters long, " + pascalsTable.width + " centimeters wide and " + pascalsTable.height + " centimeters tall. It is made out of " + pascalsTable.material + " and has " + pascalsTable.legCount + " legs.")
assert.equal(pascalsChair.flattenBackrestAngle(), pascalsChair.backrestAngle)
assert.equal(pascalsChair.straightenBackrestAngle(), pascalsChair.backrestAngle)
assert.equal(pascalsChair.info(), "This office chair is " + pascalsChair.length + " centimeters long, " + pascalsChair.width + " centimeters wide and " + pascalsChair.height + " centimeters tall. It is made out of " + pascalsChair.material + " , has " + pascalsChair.casters + " caster and a backrestangle of " + pascalsChair.backrestAngle + " degrees")
assert.equal(shelf.store(), "You filled a space in the shelf")
assert.equal(shelf.takeOut(), "You took something out of the shelf")
assert.equal(shelf.howManySpaces(), "The shelf has " + shelf.spaces + " spaces left")
assert.equal(shelf.info(), "This shelf is " + shelf.length + " centimeters long, " + shelf.width + " centimeters wide and " + shelf.height + " centimeters tall. It is made out of " + shelf.material + " and has " + shelf.spaces + " spaces.")
assert.equal(pascalsNotebookStand.info(), "This notebookstand is " + pascalsNotebookStand.length + " centimeters long, " + pascalsNotebookStand.width + " centimeters wide and " + pascalsNotebookStand.height + " centimeters tall. It is made out of " + pascalsNotebookStand.material + " and has the color " + pascalsNotebookStand.color)
assert.equal(pascalsMonitor.info(), "This monitor is of the " + pascalsMonitor.brand + " brand and has a screen size of " + pascalsMonitor.screenSize + " inches diagonally")
assert.equal(pascalsNotebook.bootUp(), "Your " + pascalsNotebook.brand + " " + pascalsNotebook.model + " is now operational")
assert.equal(pascalsNotebook.shutDown(), "Shutting down your " + pascalsNotebook.brand + " " + pascalsNotebook.model)
assert.equal(pascalsNotebook.info(), "This notebook is of the " + pascalsNotebook.brand + " brand and is the model " + pascalsNotebook.model + ". It runs " + pascalsNotebook.operatingSystem + " with a screen size of " + pascalsNotebook.screenSize + " inches diagonally.")
assert.equal(airfilter.turnOn(2), "The filter runs on setting " + 2)
assert.equal(airfilter.turnOff(), "The airfilter is turned off")
assert.equal(airfilter.info(), "This airfilter is of the brand " + airfilter.brand + " and has the color " + airfilter.color + ". Does it have a UV light? " + airfilter.hasUVLight)

