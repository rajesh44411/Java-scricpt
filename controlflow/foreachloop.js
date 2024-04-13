// for of looop

let myArr = [1, 2, 3, 4, 5]

for (const arr of myArr) {
    // console.log(arr);
}

// map map only show unique values

let map = new Map()
map.set("IN", "India")
map.set("NP", "Nepal")
map.set("CH", "Chaina")
map.set("IN", "India")
// console.log(map);
for (const [key, value] of map) {
    // console.log(key, "->",value);

}


// for each loop

let files = ["audio", "video", "images", "codes", "python"]


// files.forEach(items => console.log(items));

// function printMe(f) {
//     console.log(f);
// }

// files.forEach(printMe)

let myFriends = [
    {
    Rajesh: "chutiya",
    Sunil: "gaandu",
    Ram: "laude",
    Javu: "Love"

    },
    {
    Rajesh: "chutiya",
    Sunil: "gaandu",
    Ram: "laude",
    Javu: "Love"

    },
    {
    Rajesh: "chutiya",
    Sunil: "gaandu",
    Ram: "laude",
    Javu: "Love"

    },
    {
    Rajesh: "chutiya",
    Sunil: "gaandu",
    Ram: "laude",
    Javu: "Love"

}]

myFriends.forEach(items => {
    console.log(items.Javu);
})