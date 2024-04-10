

const isUaerLogined = true
const temperature = 43

// if(temperature >= 40) {
//     console.log("Temperature is less than 50")
// }

// else {
//     console.log("Temperature is more than 50")
// }

// ++++++++++++++++++++++++
// const score = 200

// if(score > 100) {
//     const user = "fly"
//     console.log(`User Power: ${user}`)
// }
// console.log(`User Power: ${user}`)  this line will give error bcz we trying to acess block element outside block
// ===============================

// short hand Notation

// if (true) console.log("user name is rajesh kumar mahato")

// =======Neting=====

// const Balance = 800

// if (Balance < 500 ) {
//     console.log("Balance is less than 500")
// } else if (Balance <750) {
//     console.log("Balance is less than 750")

// } else if (Balance < 900) {
//     console.log("Balance is less than 900")

// } else {
//     console.log("Balance is greater than 900")
    
// }

// real life if else condision==============++++++++++++##

const userLoggedIN =  true
const debitCard = true
const isLoggedInfromGoogle = false
const userLoggedInfromEmail = true

if (userLoggedIN && debitCard) {
    console.log("Allow to buy items")
}

if( isLoggedInfromGoogle || userLoggedInfromEmail ) {
    console.log("Allow to Login")

}




