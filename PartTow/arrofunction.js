 const user = {
    username: "Sunil",
    price: 593,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`)
        // console.log(this)
         
    }

 }
//  user.welcomeMessage()
//  user.username = "hari"
//  user.welcomeMessage()
// console.log(this)

// function chai(){
//     let user = "ram"
//     console.log(this.user)
// }
// chai()

// arrow function 

// const chai = function(){
//     let user = "ram"
//     console.log(this.user)
// }

const chai = () => {
    let user = "ram"
    console.log(this)
}

// chai()


// arrofunction basic
// const addTwo =(n1,n2) => {
//     return n1 + n2
// }

// impleset return
const addTwo =(n1,n2) => (n1 + n2)

console.log(addTwo(4,7))
 

