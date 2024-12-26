class rectangle{
    constructor(a,b,color){
        this.a =a;
        this.b=b;
        this.color=color;
    }

    area(){
        return this.a*this.b;
    }

    perimeter(){
        return 2*(this.a+this.b);
    }
}

const rect = new rectangle(4,5);
const ar = rect.area();
const peri = rect.perimeter();

/*
console.log(`area is ${ar} and perimeter is ${peri}.`);
console.log(typeof area);
console.log(typeof rectangle);
console.log(typeof this);
*/

// console.log(rect.color);


const mpp = new Map();
mpp.set("remiss",30);
mpp.set("bhudev",45);
const val = mpp.get("bhudev");
console.log(val);

console.log(mpp.get("remiss"));
