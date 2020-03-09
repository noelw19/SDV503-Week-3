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


//counting with increment & decrement
for(let i=15; i > 0; --i ){
    console.log(i);
}

for(let aa=0; aa < 16; ++aa){
    console.log(aa);
}



//showing that value for line 81 and 86 dont become the value of the variable, rather only the increment is added to var.
let g =1;
console.log(g);
console.log(10 * ++g);
console.log(g);

let h =1;
console.log(h);
console.log(10 * h++);
console.log(h);


//unary operator changes value to negative or positive depending on the right side of line 90.
let zz = 1;
zz = -zz;
console.log(zz);

//another way to concatinate variables.
const firstWord = "Hello";
const secondWord = "World";

//by using this it allows you to concatenate alot of variables without having to manually add the spaces.
console.log(`${firstWord} ${secondWord}`);
console.log(firstWord + " " + secondWord);

console.log(10 - 5);
console.log(10 - "5");
console.log('10' * 5);
console.log('10' + '10' + 5);

