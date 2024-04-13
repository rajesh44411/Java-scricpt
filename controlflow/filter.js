const Numbers = [1,2,3,4,5,6,7,8,9,10]

const NewNumbers = Numbers.filter((num)=> num > 7  )
console.log(NewNumbers);

const myNewnumbers = []

Numbers.forEach(num => {
    if (num > 4){
        myNewnumbers.push(num)
    }
});
console.log(myNewnumbers);

const Books = [
    {title:"Book1" ,genere:"History" ,publish: "1997", edition:"2007"},
    {title:"Book2" ,genere:"non-History" ,publish: "2001", edition:"2009"},
    {title:"Book3" ,genere:"Thrill" ,publish: "1999", edition:"2001"},
    {title:"Book4" ,genere:"Comic" ,publish: "2004", edition:"2010"},
    {title:"Book5" ,genere:"History" ,publish: "1989", edition:"1997"},
    {title:"Book6" ,genere:"Thrill" ,publish: "1993", edition:"1995"},
    {title:"Book7" ,genere:"Comic" ,publish: "2005", edition:"2020"},
]

let UserBook = Books.filter((bk)=>bk.genere === "History")

UserBook = Books.filter((bk)=> { return bk.publish >= 1990 && bk.genere == "History" })


console.log(UserBook);