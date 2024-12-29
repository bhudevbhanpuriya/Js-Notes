const ar = [1,2,3,4,5]
for (const i of ar) {
    //console.log(i);
}

for (const i of ar) {
    //console.log(i);
}

const str = "remiss"

for (const ch of str) {
    //console.log(ch);
}

const mpp = new Map;
mpp.set('i',"ice-cream")
mpp.set('c',"chocolate")
mpp.set('ca',"candy")
mpp.set('m',"marshmellow")

for (const [key,val] of mpp) {
    //console.log(key);
}

const obj = {
    g1 : "hero",
    ra1 : "villian"
}

// we cannot use for-of loop for object ,for-in loops are used

for (const i in obj) {
    //console.log(obj[i]);
}

// for-each

const arr = ["js","py","cpp","rb"]

arr.forEach( function (item) {
    //console.log(item);
} )

arr.forEach( (it) => {
    //console.log(it);
} )

function printt(item){
    //console.log(item);
}

arr.forEach(printt)

arr1 = [1,3,5,7,9]

arr1.forEach(printt)

arr.forEach( (index,item,arr) => {
    console.log(item,index,arr);
})
