import assert from "node:assert/strict";
import { findUserById, findPostsByUserId, findUserByFirstName, getUsers, checkZipcode, checkUserData, checkPostData } from "./apidataprocessing.mjs"
import { User, Post } from "./dataclasses.mjs"

// test users for asserts
const testUser1 = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

//test users for checkUserData
const userWithInvalidUsername = {
    "id": 1,
    "name": "Leanne Graham",
    "username": 551385,
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

const userWithInvalidId = {
    "id": "a",
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

const userWithInvalidName = {
    "id": 1,
    "name": "",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
const userWithInvalidName2 = {
    "id": 1,
    "name": "Leanne",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

const userWithInvalidEmail = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincereapril.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
const userWithInvalidAddress = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

const userWithInvalidStreet = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": 981,
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
const userWithInvalidSuite = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": 556,
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
const userWithInvalidCity = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
const userWithInvalidZipcode = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": -92998 - 3874,
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
const userWithInvalidZipcode2 = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "12abc-sdef234",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
const userWithInvalidPhone = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
const userWithInvalidWebsite = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": 5111,
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}
const userWithInvalidCompanyName = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

//valid user list for asserts
const validUserList = [
    new User(1,
        "Leanne",
        "Graham",
        "Bret",
        "Sincere@april.biz",
        'Kulas Light',
        'Apt. 556',
        'Gwenborough',
        '92998-3874',
        '1-770-736-8031 x56442',
        'hildegard.org',
        'Romaguera-Crona'),
    new User(2,
        'Ervin',
        'Howell',
        'Antonette',
        'Shanna@melissa.tv',
        'Victor Plains',
        'Suite 879',
        'Wisokyburgh',
        '90566-7771',
        '010-692-6593 x09125',
        'anastasia.net',
        'Deckow-Crist'),
    new User(3,
        'Clementine',
        'Bauch',
        'Samantha',
        'Nathan@yesenia.net',
        'Douglas Extension',
        'Suite 847',
        'McKenziehaven',
        '59590-4157',
        '1-463-123-4447',
        'ramiro.info',
        'Romaguera-Jacobson'),
    new User(4,
        'Patricia',
        'Lebsack',
        'Karianne',
        'Julianne.OConner@kory.org',
        'Hoeger Mall',
        'Apt. 692',
        'South Elvis',
        '53919-4257',
        '493-170-9623 x156',
        'kale.biz',
        'Robel-Corkery'),
    new User(5,
        'Chelsey',
        'Dietrich',
        'Kamren',
        'Lucio_Hettinger@annie.ca',
        'Skiles Walks',
        'Suite 351',
        'Roscoeview',
        '33263',
        '(254)954-1289',
        'demarco.info',
        'Keebler LLC'),
    new User(6,
        'Dennis',
        'Schulist',
        'Leopoldo_Corkery',
        'Karley_Dach@jasper.info',
        'Norberto Crossing',
        'Apt. 950',
        'South Christy',
        '23505-1337',
        '1-477-935-8478 x6430',
        'ola.org',
        'Considine-Lockman'),
    new User(7,
        'Kurtis',
        'Weissnat',
        'Elwyn.Skiles',
        'Telly.Hoeger@billy.biz',
        'Rex Trail',
        'Suite 280',
        'Howemouth',
        '58804-1099',
        '210.067.6132',
        'elvis.io',
        'Johns Group'),
    new User(8,
        'Nicholas',
        'Runolfsdottir V',
        'Maxime_Nienow',
        'Sherwood@rosamond.me',
        'Ellsworth Summit',
        'Suite 729',
        'Aliyaview',
        '45169',
        '586.493.6943 x140',
        'jacynthe.com',
        'Abernathy Group'),
    new User(9,
        'Glenna',
        'Reichert',
        'Delphine',
        'Chaim_McDermott@dana.io',
        'Dayna Park',
        'Suite 449',
        'Bartholomebury',
        '76495-3109',
        '(775)976-6794 x41206',
        'conrad.com',
        'Yost and Sons'),
    new User(10,
        'Clementina',
        'DuBuque',
        'Moriah.Stanton',
        'Rey.Padberg@karina.biz',
        'Kattie Turnpike',
        'Suite 198',
        'Lebsackbury',
        '31428-2261',
        '024-648-3804',
        'ambrose.net',
        'Hoeger LLC')
]

//test user list for asserts for findUserByFirstName
const testUserList = [new User(3,
    "Clementine",
    "Bauch",
    "Samantha",
    "Nathan@yesenia.net",
    "Douglas Extension",
    "Suite 847",
    "McKenziehaven",
    "59590-4157",
    "1-463-123-4447",
    "ramiro.info",
    "Romaguera-Jacobson"
)]

//test posts for asserts

const testPosts = [
    new Post(2, 11, 'et ea vero quia laudantium autem',
        'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\n' +
        'accusamus in eum beatae sit\n' +
        'vel qui neque voluptates ut commodi qui incidunt\n' +
        'ut animi commodi'),
    new Post(2, 12, 'in quibusdam tempore odit est dolorem',
        'itaque id aut magnam\n' +
        'praesentium quia et ea odit et ea voluptas et\n' +
        'sapiente quia nihil amet occaecati quia id voluptatem\n' +
        'incidunt ea est distinctio odio'),
    new Post(2, 13, 'dolorum ut in voluptas mollitia et saepe quo animi',
        'aut dicta possimus sint mollitia voluptas commodi quo doloremque\n' +
        'iste corrupti reiciendis voluptatem eius rerum\n' +
        'sit cumque quod eligendi laborum minima\n' +
        'perferendis recusandae assumenda consectetur porro architecto ipsum ipsam'),
    new Post(2, 14, 'voluptatem eligendi optio',
        'fuga et accusamus dolorum perferendis illo voluptas\n' +
        'non doloremque neque facere\n' +
        'ad qui dolorum molestiae beatae\n' +
        'sed aut voluptas totam sit illum'),
    new Post(2, 15, 'eveniet quod temporibus',
        'reprehenderit quos placeat\n' +
        'velit minima officia dolores impedit repudiandae molestiae nam\n' +
        'voluptas recusandae quis delectus\n' +
        'officiis harum fugiat vitae'),
    new Post(2, 16, 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio',
        'suscipit nam nisi quo aperiam aut\n' +
        'asperiores eos fugit maiores voluptatibus quia\n' +
        'voluptatem quis ullam qui in alias quia est\n' +
        'consequatur magni mollitia accusamus ea nisi voluptate dicta'),
    new Post(2, 17, 'fugit voluptas sed molestias voluptatem provident',
        'eos voluptas et aut odit natus earum\n' +
        'aspernatur fuga molestiae ullam\n' +
        'deserunt ratione qui eos\n' +
        'qui nihil ratione nemo velit ut aut id quo'),
    new Post(2, 18, 'voluptate et itaque vero tempora molestiae', 'eveniet quo quis\n' +
        'laborum totam consequatur non dolor\n' +
        'ut et est repudiandae\n' +
        'est voluptatem vel debitis et magnam'),
    new Post(2, 19, 'adipisci placeat illum aut reiciendis qui',
        'illum quis cupiditate provident sit magnam\n' +
        'ea sed aut omnis\n' +
        'veniam maiores ullam consequatur atque\n' +
        'adipisci quo iste expedita sit quos voluptas'),
    new Post(2, 20, 'doloribus ad provident suscipit at',
        'qui consequuntur ducimus possimus quisquam amet similique\n' +
        'suscipit porro ipsam amet\n' +
        'eos veritatis officiis exercitationem vel fugit aut necessitatibus totam\n' +
        'omnis rerum consequatur expedita quidem cumque explicabo')
]

//test posts for alternative way to find posts by user ID
const testPosts2 = [
    [
        {
            userId: 2,
            id: 11,
            title: 'et ea vero quia laudantium autem',
            body: 'delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\n' +
                'accusamus in eum beatae sit\n' +
                'vel qui neque voluptates ut commodi qui incidunt\n' +
                'ut animi commodi'
        },
        {
            userId: 2,
            id: 12,
            title: 'in quibusdam tempore odit est dolorem',
            body: 'itaque id aut magnam\n' +
                'praesentium quia et ea odit et ea voluptas et\n' +
                'sapiente quia nihil amet occaecati quia id voluptatem\n' +
                'incidunt ea est distinctio odio'
        },
        {
            userId: 2,
            id: 13,
            title: 'dolorum ut in voluptas mollitia et saepe quo animi',
            body: 'aut dicta possimus sint mollitia voluptas commodi quo doloremque\n' +
                'iste corrupti reiciendis voluptatem eius rerum\n' +
                'sit cumque quod eligendi laborum minima\n' +
                'perferendis recusandae assumenda consectetur porro architecto ipsum ipsam'
        },
        {
            userId: 2,
            id: 14,
            title: 'voluptatem eligendi optio',
            body: 'fuga et accusamus dolorum perferendis illo voluptas\n' +
                'non doloremque neque facere\n' +
                'ad qui dolorum molestiae beatae\n' +
                'sed aut voluptas totam sit illum'
        },
        {
            userId: 2,
            id: 15,
            title: 'eveniet quod temporibus',
            body: 'reprehenderit quos placeat\n' +
                'velit minima officia dolores impedit repudiandae molestiae nam\n' +
                'voluptas recusandae quis delectus\n' +
                'officiis harum fugiat vitae'
        },
        {
            userId: 2,
            id: 16,
            title: 'sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio',
            body: 'suscipit nam nisi quo aperiam aut\n' +
                'asperiores eos fugit maiores voluptatibus quia\n' +
                'voluptatem quis ullam qui in alias quia est\n' +
                'consequatur magni mollitia accusamus ea nisi voluptate dicta'
        },
        {
            userId: 2,
            id: 17,
            title: 'fugit voluptas sed molestias voluptatem provident',
            body: 'eos voluptas et aut odit natus earum\n' +
                'aspernatur fuga molestiae ullam\n' +
                'deserunt ratione qui eos\n' +
                'qui nihil ratione nemo velit ut aut id quo'
        },
        {
            userId: 2,
            id: 18,
            title: 'voluptate et itaque vero tempora molestiae',
            body: 'eveniet quo quis\n' +
                'laborum totam consequatur non dolor\n' +
                'ut et est repudiandae\n' +
                'est voluptatem vel debitis et magnam'
        },
        {
            userId: 2,
            id: 19,
            title: 'adipisci placeat illum aut reiciendis qui',
            body: 'illum quis cupiditate provident sit magnam\n' +
                'ea sed aut omnis\n' +
                'veniam maiores ullam consequatur atque\n' +
                'adipisci quo iste expedita sit quos voluptas'
        },
        {
            userId: 2,
            id: 20,
            title: 'doloribus ad provident suscipit at',
            body: 'qui consequuntur ducimus possimus quisquam amet similique\n' +
                'suscipit porro ipsam amet\n' +
                'eos veritatis officiis exercitationem vel fugit aut necessitatibus totam\n' +
                'omnis rerum consequatur expedita quidem cumque explicabo'
        }
    ]
]
//invalid posts
const postWithInvalidUserId = {
    "userId": "bla",
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
const postWithInvalidId = {
    "userId": 1,
    "id": "bla",
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
const postWithInvalidTitle = {
    "userId": 1,
    "id": 1,
    "title": "",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
const postWithInvalidBody = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": ""
}

//asserts for getUsers
assert.deepEqual(await getUsers(), validUserList)

//asserts for checkUserData
assert.throws(() => checkUserData(userWithInvalidId), new Error(`ID is not an integer`))
assert.throws(() => checkUserData(userWithInvalidName), new Error(`Name is not a string or empty`))
assert.throws(() => checkUserData(userWithInvalidName2), new Error(`Invalid name input`))
assert.throws(() => checkUserData(userWithInvalidUsername), new Error(`Username is not a string or empty`))
assert.throws(() => checkUserData(userWithInvalidEmail), new Error(`Email is not a string or empty or is invalid`))
assert.throws(() => checkUserData(userWithInvalidAddress), new Error(`Address is not an object or has an invalid number of properties`))
assert.throws(() => checkUserData(userWithInvalidStreet), new Error(`Street is not a string or empty`))
assert.throws(() => checkUserData(userWithInvalidSuite), new Error(`Suite is not a string or empty`))
assert.throws(() => checkUserData(userWithInvalidCity), new Error(`City is not a string or empty`))
assert.throws(() => checkUserData(userWithInvalidZipcode), new Error(`Zipcode is not a string or empty`))
assert.throws(() => checkUserData(userWithInvalidZipcode2), new Error(`Zipcode is empty or contains invalid character`))
assert.throws(() => checkUserData(userWithInvalidPhone), new Error(`Phone number is not a string or empty at user`))
assert.throws(() => checkUserData(userWithInvalidWebsite), new Error(`Website is not a string or empty or invalid at user`))
assert.throws(() => checkUserData(userWithInvalidCompanyName), new Error(`Company name is not a string or empty at user`))

//asserts for checkZipcode
assert.equal(checkZipcode("1234-5678"), true)
assert.equal(checkZipcode("12a4-bzaokdm"), false)
assert.equal(checkZipcode(""), false)
assert.equal(checkZipcode("-.,)(/$"), false)
assert.equal(checkZipcode("1234"), true)
assert.equal(checkZipcode("12-34-56-78-9"), true)
assert.equal(checkZipcode("1a-3b-5c"), false)
assert.equal(checkZipcode("-123-456"), false)
assert.equal(checkZipcode("123-456-"), false)

//asserts for checkPostData
assert.throws(() => checkPostData(postWithInvalidUserId), new Error("User ID is not a number"))
assert.throws(() => checkPostData(postWithInvalidId), new Error("ID is not a number"))
assert.throws(() => checkPostData(postWithInvalidTitle), new Error("Title is not a string or empty"))
assert.throws(() => checkPostData(postWithInvalidBody), new Error("Body is not a string or empty"))

//asserts for findUserById function
assert.deepEqual(await findUserById(1), testUser1)
assert.deepEqual(await findUserById("a"), undefined)
assert.deepEqual(await findUserById(11), `Bad response, error code : ${404}`)

//asserts for findPostsByUserId
assert.deepEqual(await findPostsByUserId(2), testPosts2)
assert.deepEqual(await findPostsByUserId("a"), [])
assert.deepEqual(await findPostsByUserId(99), [[]])


//asserts for findUserByFirstName function
assert.deepEqual(await findUserByFirstName("Clementine"), testUserList)
assert.deepEqual(await findUserByFirstName(4), [])