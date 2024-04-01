let myDate = new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toTimeString())

// let myCreatedDate = new Date(2024, 0, 22, 5)
let myCreatedDate = new Date("01-21-2021")

// console.log(myCreatedDate.toDateString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)

// to convert in second

// console.log(Math.floor(Date.now() /1000));

console.log(myDate.getMonth());
console.log(myDate.getDay());

console.log(myDate.toLocaleString('default', {
    weekday:''
}))