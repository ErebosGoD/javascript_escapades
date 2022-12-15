import fetch from "node-fetch";
import { User, Post } from "./dataclasses.mjs";


const blacklist = ["Mr.", "Mrs.", "Ms.", "Prof.", "Dr."]
const digitList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

export function checkZipcode(zipcode) {
    if (zipcode == "") { //check if zipcode is not an empty string
        return false
    }
    const splitZipcode = zipcode.split("-") //split zipcode at -

    for (let index = 0; index < splitZipcode.length; index++) {
        if (splitZipcode[index] == "") { // check if splitted zipcode has at least 1 entry
            return false
        }
        const splittedDigits = splitZipcode[index].split("") //split each entry into its characters
        for (let index = 0; index < splittedDigits.length; index++) {
            if (!digitList.includes(splittedDigits[index])) { // for each character, check if its not included in digitList
                return false
            }
        }
    }
    return true
}

export function checkUserData(currentUser) {
    if (!Number.isInteger(currentUser.id)) {
        throw new Error(`ID is not an integer`);
    }
    if (typeof currentUser.name != "string" || currentUser.name == "") {
        throw new Error(`Name is not a string or empty`)
    }
    const filteredSplitName = currentUser.name.split(" ").filter((namePart) => {
        return !blacklist.includes(namePart)
    })
    if (filteredSplitName.length < 2) {
        throw new Error(`Invalid name input`)
    }
    if (typeof currentUser.username != "string" || currentUser.username == "") {
        throw new Error(`Username is not a string or empty`)
    }
    if ((typeof currentUser.email != "string" || currentUser.email == "") || !currentUser.email.includes("@")) {
        throw new Error(`Email is not a string or empty or is invalid`)
    }
    if (typeof currentUser.address != "object" || Object.keys(currentUser.address).length != 5) {
        throw new Error(`Address is not an object or has an invalid number of properties`)
    }
    if (typeof currentUser.address.street != "string" || currentUser.address.street == "") {
        throw new Error(`Street is not a string or empty`)
    }
    if (typeof currentUser.address.suite != "string" || currentUser.address.suite == "") {
        throw new Error(`Suite is not a string or empty`)
    }
    if (typeof currentUser.address.city != "string" || currentUser.address.city == "") {
        throw new Error(`City is not a string or empty`)
    }
    if (typeof currentUser.address.zipcode != "string" || currentUser.address.zipcode == "") {
        throw new Error(`Zipcode is not a string or empty`)
    }
    if (!checkZipcode(currentUser.address.zipcode)) {
        throw new Error(`Zipcode is empty or contains invalid character`)
    }
    if (typeof currentUser.phone != "string" || currentUser.phone == "") {
        throw new Error(`Phone number is not a string or empty at user`)
    }
    if (typeof currentUser.website != "string" || !currentUser.website.includes(".")) {
        throw new Error(`Website is not a string or empty or invalid at user`)
    }
    if (typeof currentUser.company.name != "string" || currentUser.company.name == "") {
        throw new Error(`Company name is not a string or empty at user`)
    }
    return true
}

export function checkPostData(currentPost) {
    if (!Number.isInteger(currentPost.userId)) {
        throw new Error("User ID is not a number")
    }
    if (!Number.isInteger(currentPost.id)) {
        throw new Error("ID is not a number")
    }
    if (typeof currentPost.title != "string" || currentPost.title == "") {
        throw new Error("Title is not a string or empty")
    }
    if (typeof currentPost.body != "string" || currentPost.body == "") {
        throw new Error("Body is not a string or empty")
    }
    return true
}

export async function getPosts() {
    const posts = []
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    if (response.ok) {
        const responseData = await response.json()
        for (let index = 0; index < responseData.length; index++) {
            try {
                const currentPost = responseData[index]
                if (checkPostData(currentPost)) {
                    posts.push(new Post(currentPost.userId, currentPost.id, currentPost.title, currentPost.body))
                }
            } catch (error) {
                console.log(`Missing data at post ${responseData[index]} : ${error}`)
            }
        }
        return posts
    } else {
        return response.status
    }
}

export async function getUsers() {
    const users = []
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    if (response.ok) {
        const responseData = await response.json()
        for (let index = 0; index < responseData.length; index++) {
            try {
                const currentUser = responseData[index]
                if (checkUserData(currentUser)) {
                    const filteredSplitName = currentUser.name.split(" ").filter((namePart) => {
                        return !blacklist.includes(namePart)
                    })
                    let firstName = filteredSplitName[0]
                    let lastName = filteredSplitName.slice(1).join(" ")
                    users.push(new User(currentUser.id, firstName, lastName, currentUser.username,
                        currentUser.email, currentUser.address.street, currentUser.address.suite,
                        currentUser.address.city, currentUser.address.zipcode, currentUser.phone,
                        currentUser.website, currentUser.company.name))
                }
            } catch (error) {
                console.log(`Missing or invalid data at user ${responseData[index]} : ${error}`);
            }
        }
        return users
    } else {
        return response.status
    }
}

//alternative variant to find a user by ID

// export async function findUserById(Id) {
//     const users = await getUsers()
//     if (Number.isInteger(Id)) {
//         for (let index = 0; index < users.length; index++) {
//             if (Id === users[index].id) {
//                 return (users[index]);
//             } else {
//                 return "Couldn't find matching User"
//             }
//         }
//     } else {
//         console.log("Invalid ID")
//         return undefined
//     }
// }

export async function findUserById(id) {
    if (Number.isInteger(id)) {
        const idString = id.toString()
        const response = await fetch("https://jsonplaceholder.typicode.com/users" + "/" + idString)
        if (response.ok) {
            const responseData = await response.json()
            if (Object.keys(responseData).length != 0) {
                return responseData
            } else {
                return "Couldn't find user with matching ID"
            }
        } else {
            return `Bad response, error code : ${response.status}`
        }
    } else {
        console.log("Invalid ID");
        return undefined
    }
}

// export async function findPostsByUserId(userId) {
//     const posts = await getPosts()
//     const matchingPosts = []
//     if (Number.isInteger(userId)) {
//         for (let index = 0; index < posts.length; index++) {
//             if (userId === posts[index].userId) {
//                 matchingPosts.push(posts[index])
//             }
//         }
//         return matchingPosts
//     } else {
//         console.log("Invalid User ID");
//         return undefined
//     }
// }



// alternative way to find posts by user ID
export async function findPostsByUserId(userId) {
    const matchingPosts = []
    if (Number.isInteger(userId)) {
        const userIdString = userId.toString()
        const response = await fetch("https://jsonplaceholder.typicode.com/posts?userId=" + userIdString)
        if (response.ok) {
            const responseData = await response.json()
            matchingPosts.push(responseData)
        } else {
            console.log(`Didn't get a valid response : response code ${response.status} `);
        }
        return matchingPosts
    } else {
        console.log("Invalid user ID")
        return matchingPosts
    }
}

export async function findUserByFirstName(firstName) {
    const users = await getUsers()
    const matchingUsers = []
    for (let index = 0; index < users.length; index++) {
        if (users[index].firstName == firstName) {
            matchingUsers.push(users[index])
        }
    }
    if (matchingUsers == []) {
        console.log("Couldn't find any user with that first name");
    }
    return matchingUsers
}

