//alternative solution without the use of classes

// const namesList = []

// const person1 = {
//     age: 37,
//     gender: "male",
//     ["origin"]: "Bochum"
// }

// const person2 = {
//     age: 19,
//     gender: "female",
//     ["origin"]: "Oldenburg"
// }
// let name1 = {
//     firstName: "Max",
//     lastName: "Mustermann",
//     info() {
//         return (this.firstName + " " + this.lastName);
//     }
// }
// let name2 = {
//     firstName: "Lisa",
//     lastName: "Ludwigs",
//     info() {
//         return (this.firstName + " " + this.lastName);
//     }
// }
// person1.name = name1
// person2.name = name2

// namesList.push(person1, person2)

// //console.log(namesList);

// // namesList.forEach((person) => {
// //     console.log("Hi, my name is " + person.name.info() +
// //         " and I'm " + person.age + " years old. I'm " + person.gender +
// //         " and I'm from " + person.origin)
// // })

// // const names = {
// //     firstName,
// //     lastName
// //
// const person = {
//     _age: 10,
//     _gender: "",
//     ["_origin"]: "",
//     get age() {
//         return this._age
//     },
//     set age(number) {
//         this._age = number
//     },
//     get gender() {
//         return this._gender
//     },
//     set gender(string) {
//         this._gender = string
//     },
//     get ["origin"]() {
//         return this["_origin"]
//     },
//     set ["origin"](town) {
//         this["_origin"] = town
//     }
// }
// let personA = person
// personA.age = 37
// personA.gender = "male"
// console.log(personA.gender);

class FullName {
    constructor(firstName, lastName) {
        this.firstName = firstName
        this.lastName = lastName
    }
    info() {
        return this.firstName + " " + this.lastName
    }
}

class Person {
    constructor(firstName, lastName, age, gender, origin) {
        this.fullName = new FullName(firstName, lastName)
        this.age = age
        this.gender = gender
        this.origin = origin

    }
}


const person1 = new Person("Max", "Mustermann", 37, "male", "Bochum")
const person2 = new Person("Lisa", "Ludwigs", 19, "female", "Oldenburg")
console.log(person1.fullName.info())