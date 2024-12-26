//+++++++++++++getting handson+++++++++++++++++

/*function yolo(){
    console.log("inside yolo");
}

// setTimeout(yolo,4000);

// console.log("wrote after timeout");

function setTimeoutPromisified(ms){
    const p = new Promise(resolve=> setTimeout(resolve,ms))
    return p;
}

let res = setTimeoutPromisified(5000).then(yolo);
console.log(res);
*/


/*

//++++++basic understanding+++++++++++++++

function waitFor3secs(resolve){
    setTimeout(resolve,3000)
}

function func(){
    console.log("func is called");
}
console.log("waitng intialized");

waitFor3secs(func);

*/


//++++++++++promises+++++++++++++
/*
function random(resolve){
    setTimeout(resolve,3000);
}

function callback(){
    console.log("promise succeded");
}

let p = new Promise(random);
p.then(callback)
// console.log(p);
*/
//+++++++ more complex code ++++++++++

// const fs = require("fs")

// function readTheFile(resolve){
//     fs.readFile("a.txt","utf-8",function(err,data){
//         resolve(data);
//     })
// }

// const p = new Promise(readTheFile);
// console.log(p);

// function callback(data){
//     console.log(data);
// }
// p.then(callback)



function setTimeoutPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    });
}

// function callback(){
//     console.log("seconds have passed");
    
// }

// setTimeoutPromisified(5000).then(callback);


// normal complexly written function
/*
setTimeoutPromisified(1000).then(function(){
    console.log("HI");
    return setTimeoutPromisified(3000)
}).then(function(){
    console.log("Hello after 1+3 seconds");
    return setTimeoutPromisified(5000)
}).then(function(){
    console.log("hmm, again after 1+3+4 second");
});
*/

// use of async await

async function solve(){
    await setTimeoutPromisified(1000);
    console.log("helio");
    await setTimeoutPromisified(3000);
    console.log("hi after 4 seconds");
    await setTimeoutPromisified(5000);
    console.log("heyy after 9 seconds");
}
solve();