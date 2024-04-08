
let a = 300
if(true){
    let a =10
    // console.log(a)
    const b = 20
    var c = 30
}

// console.log(a)
// console.log(b)
// console.log(c)
// in this condision we can't get value of a,b beacuse these are block scope
// var is global scope  and let and const are block scope

function first(){
    const username ="rajesh"
    function second(){
        const userid = 450
        // console.log(username)
        // console.log(userid)


    }

    // console.log(userid)
    second()
}

first()

if(true){
    const username ="Mukesh"
    if(username == "Mukesh") {
        const web = "yourube"
        console.log(username)

    }
    // console.log(web)
}

// console.log(username)

// ======= important===========




console.log(addone(5))

function addone(num){
    return num + 1
}

