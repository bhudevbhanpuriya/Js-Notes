const user = {
    name: "remiss",
    age: 19,
    email: "remiss@gmail.com",
    isbool: false
}

// console.log(user.name);
// console.log(user["email"])
// 


user["age"] = 20
// console.log(user);

// Object.freeze(user)

user["age"] = 17
// console.log(user["age"]);

user.greet = function(){
    console.log(`Hello js user, ${this.name} of age ${this.age}!`);
}
// user.greet()
// console.log(user.greet())


const emp = {
    email : "something@gmail.com",
    empName :{
        fullName : {
            firstName : "Bhudev",
            lastName : "Bhanpuriya"
        }
    }
}

// console.log(emp.empName);
// console.log(emp.empName.fullName);
// console.log(emp.empName.fullName.firstName);


const obj1 = {
    1:"a",
    2:"b",
}

const obj2 = {
    3:"c",
    4:"d"
}

// it will treat other objects as its sub object
const obj3 = {
    obj1,
    obj2
}
// console.log(obj3)

// assign will help to concatinate objects into one
const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4);

//the optimal way! -- use of spread
const obj5 = {...obj1,...obj2}
// console.log(obj5);


// accessing keys and values
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));


// console.log(user.hasOwnProperty('age'));

// destructure
const {age : umr} = user
console.log(umr);
