// desturcturing

const obj = {
  a: 1,
  b: 2,
  c: [10, 20]
} 


// const a = obj.a;
// const b = obj.b;
// const c = obj.c;

// object destructuring
const { a, b, c } = obj;

console.log(a);
console.log(b);
console.log(c);

// array destructuring
const [v1, v2] = c;
console.log(v1, v2);

// maths, phy, chem
const marks = [100, 80, 90];

// const mathMarks = marks[0]
// const phyMarks = marks[1]
// const chemMarks = marks[2];

const [mathMarks, phyMarks, chemMarks, engMarks] = marks;

console.log("Maths marks", mathMarks)
console.log("Physics marks", phyMarks)
console.log("Chemistry marks", chemMarks)
console.log("English marks", engMarks)