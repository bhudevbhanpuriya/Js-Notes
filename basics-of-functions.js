// basic
function mul(n1,n2){
    console.log(n1*n2);
}
// mul(3,4)

function multiply(n1,n2){
    return (n1*n2);
}
 
const ans = multiply(5,4)
// console.log(ans);

function confirmation(username = "unknown user"){
    console.log(`${username}, logged in successfully.`);
}

// confirmation("remiss")
// confirmation()


//--------------------------------------
function whatsInCart(item1){
    return item1
}

// console.log(whatsInCart("honey"));
//here we can only display 1 item
// console.log(whatsInCart("honey","sugar","shampoo"));

// if we use spread(...) operator problem can be resolved
function whatsInCartProMax(...item){
    return item
}
// console.log(whatsInCartProMax("honey","sugar","shampoo"));


//objects for fr function

const user = {
    name : "remiss",
    age:20
}

function handledObject(obj){
    console.log(`Username is ${obj.name} and age is ${obj.age}.`);
}

// handledObject(user)

const nums = [1,2,3,4]
function printSecondVal(arr){
    console.log(arr[1]);
}
printSecondVal(nums)