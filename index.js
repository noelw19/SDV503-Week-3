let x = 10;
let y = 100;
let z = 50;

console.log(x + z);
console.log(x + y - z);
console.log(y * x);
console.log(y / z);
console.log(x % z);
console.log(y ** z);

let i= 110;

function myFunc(val) {
    if(x - y === val){
        return "yes";
    }else {
        return "nah";
    }
}

console.log(myFunc(i))


let a = 10;

console.log(a);
console.log(++a);
console.log(a);
console.log(++a);
console.log(a);
console.log(++a)
console.log(a);

/*function thirteenMore(val){
 if (a == 13){
      val = 100;
 } else {
      a = 14;
 }
}

console.log(thirteenMore(a))*/

console.log(a);

console.log(a++);
console.log(a);
console.log(a++);
console.log(a);

let b = 11;
let c = b;

console.log("pre-increment")

b = ++c;
console.log(b);
console.log(c);

console.log("post-increment");

c = b++;
console.log(b);
console.log(c);