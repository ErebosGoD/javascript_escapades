class Size {
    constructor(height, length) {
        this.height = height
        this.length = length
    }
}

class Pet {
    constructor(age, height, length, gender, cry, species) {
        this.age = age
        this.size = new Size(height, length)
        this.cry = cry
        this.gender = gender
        this.species = species
    }
    call() {
        return "The " + this.species + " makes " + this.cry
    }
    info() {
        return "The " + this.species + " is " + this.age + " years old. It's " + this.size.height + " centimenters big and " + this.size.length + " centimeters long. It's gender is " + this.gender + ". " + this.call()
    }
}

class Dog extends Pet {
    constructor(age, height, length, gender) {
        super(age, height, length, gender, "Wuff", "dog")
    }
}

class Cat extends Pet {
    constructor(age, height, length, gender) {
        super(age, height, length, gender, "Miau", "cat")
    }
}
const dog = new Dog(7, 50, 62, "male")
console.log(dog.info());
const cat = new Cat(2, 20, 33, "female")
console.log(cat.info())
const dog1 = new Dog(8, 55, 68, "male")
console.log(dog1.info());
const cat1 = new Cat(3, 23, 34, "female")
console.log(cat1.info())