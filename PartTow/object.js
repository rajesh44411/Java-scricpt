// singletone
// Object.create

// object literals
const mySymbol = Symbol("key1")

const myUaer = {
    name: "Rajesh Kumar Mahato",
    age: 23,
    email: "rajesh@gmail.com",
    [mySymbol]: "mysymbol",
    location:"Nepal",
    isLogin: false
}

// console.log(myUaer["email"])
// console.log(myUaer["location"])
// console.log(myUaer[mySymbol])

myUaer.email = "singhrajesh@gmail.com"
// console.log(myUaer)
// Object.freeze(myUaer)
myUaer.age = 42
// console.log(myUaer)

myUaer.greeting = function(){
    console.log("hello my user")

}
myUaer.greetingTwo = function(){
console.log(`hello js user, ${this.name}`)

}

console.log(myUaer.greetingTwo())



