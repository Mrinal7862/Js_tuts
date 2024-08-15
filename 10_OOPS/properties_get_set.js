function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function(){return this._email.toUpperCase()},
        
        set: function(val){this.email = val}
    })

    Object.defineProperty(this, 'password', {
        get: function(){return this._password.toUpperCase()},

        set: function(val){this.password = val}
    })
}

const maxter = new User("Mrin@email.com", "max")

console.log(maxter.email)