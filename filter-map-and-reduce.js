const arr = ["js","py","rb","cpp","java"]

const val = arr.forEach( (i) => {
    //console.log(i);
})

val
//console.log(val);


// dont work as desired
const val1  = arr.forEach((i) => {
    return i;
})
// console.log(val1);


const nums = [1,2,3,4,5,6,7,8,9,10]


const val2 = nums.filter((i) => i>4)
//console.log(val2);

// point to note -- when curly braces are used within filter arrow func return must be used

const val3 = nums.filter((i) => {
    return i < 6
})
//console.log(val3);

// same thing using forEach


const a = []
nums.forEach((i) => {
    if(i>7) a.push(i);
})
//console.log(a);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userBooks = books.filter((b) => b.genre === 'Science')

let userBooks1 = books.filter((b) => {
    return b.publish > 1990 && b.genre === 'History'
})
//console.log(userBooks);
//console.log(userBooks1);




//        maps
let newNums1 = nums.map((num) => num+10)
//console.log((newNums1));

let newNums2 = nums
    .map((i) => i*10)
    .map((j) => j++)

//console.log(newNums2);

let newNums3= nums
    .map((i) => i*10)
    .map((j) => j+1)
    .filter((k) => k>50)

// console.log(newNums3);




//         reduce 

const sum = nums.reduce((acc,curr) => {
    //console.log(`${acc} -- ${curr}`);
    return acc+curr
},0)

//onsole.log(sum);

//using normal fun

const sum1 = nums.reduce(function (acc,curr) {
    return acc+curr
},0)

// console.log(sum1);



const shoppingCart = [
    {
        itemName: "js course",
        price: 3000
    },
    {
        itemName: "py course",
        price: 1000
    },
    {
        itemName: "mobile dev course",
        price: 6000
    },
    {
        itemName: "data science course",
        price: 13000
    },
]

const shoppingCartTotal = shoppingCart.reduce((acc,curr) => {
    return acc+curr.price
},0)

console.log(shoppingCartTotal);
