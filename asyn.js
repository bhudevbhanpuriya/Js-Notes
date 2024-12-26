/*

const fs = require("fs");

// const contents = fs.readFileSync("a.txt","utf8");
// console.log(contents)
// const data = fs.readFile("a.txt","utf8");
// // const data = fs.readFileSync("a.txt");
// console.log(data)

function print(err,data){
    console.log(data)
}

fs.readFile("a.txt","utf-8",print)
fs.readFile("b.txt","utf-8",print)
console.log("Done");

*/

console.log("hi")

function timeout(){
    console.log("Click the button");
}

console.log("Welcome to loupe")

setTimeout(timeout,2000)

let c=0;

for(let i=0;i<1000000000;i++) c++;

console.log(`${c} is the value, program writing done`)