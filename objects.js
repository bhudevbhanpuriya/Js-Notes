const user = {
    name: "remiss",
    age: 19,
    email: "remiss@gmail.com",
    isbool: false
}

console.log(user.name);
console.log(user["email"])



user["age"] = 20
console.log(user);
console.log(user["isbool"]);
