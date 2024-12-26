// Primitive 

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// Refernce or Non-primitive 

// Array, Objects, Functions

// const nums=[12,45,78]
// console.log(nums)

// let greet = function(){
//     console.log("Hello remiss!")
// }
// console.log(typeof nums)


//Memory

//  Primitive ---> stack
let val1=10
let val2=val1
val2=30

console.log(val1)
console.log(val2)

// Refernce/non-primitive ---> heap

let user1 = {
    email: "b@gmail.com",
    upi: 1245
}

let user2=user1
user2.email="s@gmail.com"

console.log(user1.email)
console.log(user2.email)

