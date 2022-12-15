export class Post {
    constructor(userId, id, title, body) {
        this.userId = userId
        this.id = id
        this.title = title
        this.body = body
    }
}

export class Comment {
    constructor(postId, id, name, email, body) {
        this.postId = postId
        this.id = id
        this.name = name
        this.email = email
        this.body = body
    }
}

export class Album {
    constructor(userId, id, title) {
        this.userId = userId
        this.id = id
        this.title = title
    }
}

export class Photo {
    constructor(albumId, id, title, url, thumbnailUrl) {
        this.albumId = albumId
        this.id = id
        this.title = title
        this.url = url
        this.thumbnailUrl = thumbnailUrl
    }
}

export class Todo {
    constructor(userId, id, title, completed) {
        this.userId = userId
        this.id = id
        this.title = title
        this.completed = completed
    }
}

export class User {
    constructor(id, firstName, lastName, username, email, street, suite, city, zipcode, phone, website, company) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.username = username
        this.email = email
        this.street = street
        this.suite = suite
        this.city = city
        this.zipcode = zipcode
        this.phone = phone
        this.website = website
        this.company = company
    }
}