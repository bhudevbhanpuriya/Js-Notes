const user = {
    name : "remiss",
    email : "b@gmail.com",

    yolo: function(){
        console.log(`${this.name} is the user`);
        console.log(this);
        
    }
}

// user.yolo()
user.name = "bhudev"
// user.yolo()

// this is used only with objects
// with function its undefined , and gives a lotts of lines

function yolo(){
    let username = "remiss"
    //console.log(this);
    console.log(this.username);
}

// yolo()

const fun = () => {
    let username = "bhudev"
    console.log(this);
    console.log(this.username);
}
// fun()


const add = (n1,n2) => {
    return n1+n2
}

// console.log(add(5,2));

// we can also omitt curly braces and return for single line inside the arrow fun

const mul = (n1,n2) => n1*n2
// console.log(mul(3,4));


// Immediately innvoked functions expressions (IIFE)

// (pura function)(empty brackets);

(function greet (){
    console.log("db connected");
})();

//arrow functions can also be used

(() => {
    console.log("db connected inside arrow");
})();


((name) => {
    console.log(`Hello, ${name}!`);
})("Remiss");
