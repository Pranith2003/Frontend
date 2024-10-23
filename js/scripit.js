console.log(eval("3 + 5"));
var a;
let b;
// const c = 10;
console.log(a, b); //undefined //undefined
a = 10;
b = 20;
const c = 30;
console.log(a, b, c);

const MY_OBJECT = { key: "value", isTrue: false };
MY_OBJECT.key = "othervalue";
console.log(MY_OBJECT);

const MY_ARRAY = ["HTML", , 0, true, 10.5, 'A'];
console.log(MY_ARRAY);

const myList = [
    "home",
    "school",
    + "hospital", //NaN
];

console.log(myList);

// console.log(unusualPropertyNames[""]); // An empty string
// console.log(unusualPropertyNames["!"]); // Bang!



//to iterate
MY_ARRAY.forEach((element) => {
    console.log(element);
})

const a2 = MY_ARRAY.map((item) => {
    MY_ARRAY.join("+");
})

console.log(a2);