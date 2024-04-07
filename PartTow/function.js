function addTwoNumbers(number1, number2) {

    return number1 + number2

}
//console.log(addTwoNumbers(3,4))

function userName(user) {
    return`${user} is user`
}

//console.log(userName("Rajesh"))

function userName(user) {
    if(!user){
        console.log("Please enter a user name")
        return
    }
    return`${user} is user`
}

// console.log(userName(""))

function calculateCartPrice(...numbers){

    return numbers

}
// console.log(calculateCartPrice(300,500,900,200))

// aiising in values

function calculateCartPrice1( val1, val2, ...numbers){

    return numbers

}
// console.log(calculateCartPrice1(300,500,900,200))

// to pass the object in function

const user ={
    username:"Rajesh",
    userId:5332
}

function handleObject(user){

    console.log(`User name is ${user.username} and userId is ${user.userId}`)

}
// console.log(handleObject(user))
handleObject({
    username:"Hari",
    userId:400
})

// to pass array

// const myNewArray = [ 534,300,200,340,550]

function handleMyarray(getArrray){
    return getArrray[1]

}
console.log(handleMyarray([300,301,302,303,307]))
