class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`)
    }

    static createId(){
        return `123`
    }
}

const Mrin = new User("Mrinal")

console.log(Mrin.createId())

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const samsung = new Teacher("M11", "samMobile@.com")
console.log(samsung.createId())