const User = {
    _email : 'Mrinal@gmail.com',
    _password: 'abc',
    username: "mrinal_0355",

    get email(){
        return this._email.toUpperCase
    },

    set email(val){
        this._email = val
    }
}

const tea = Object.create(User);
console.log(tea._email)