class Size {
    constructor(height, length) {
        this.height = height
        this.length = length
    }
}

class Pet {
    constructor(species, age, height, length, cry, gender) {
        this.species = species
        this.age = age
        this.size = new Size(height, length)
        this.cry = cry
        this.gender = gender
    }
    call() {
        return "The " + this.species + " makes " + this.cry
    }
    info() {
        return "The " + this.species + " is " + this.age + " years old. It's " + this.size.height + " centimenters big and " + this.size.length + " centimeters long. It's gender is " + this.gender + ". " + this.call()
    }
}

const dog = new Pet("dog", 7, 50, 42, "Wuff", "male")
console.log(dog.info());
const cat = new Pet("cat", 3, 20, 30, "Miau", "female")
console.log(cat.info())