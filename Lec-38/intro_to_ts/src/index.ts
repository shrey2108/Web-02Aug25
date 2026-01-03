// types

import { Rectangle, Rectangle2, Rectangle3, Shape } from "./oop";

/**
 * number
 * boolean
 * string
 * bigInt
 * status
 */

let a: any = 10;
a = "hello";
a = [1,2,3,4];

let str: string = "Hello there!";
str = "Hi there!";
console.log(str);

const isMarried: boolean = false;

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(20, 30));

const arr: string[] = ["hello", "hi", "hey"];

arr.forEach((msg: string) => {
  console.log(msg);
});


// types
// classes (oops)
// interface and type
// generics

// type

type status = "online" | "offline";
let userStatus: status  = "online";


const r1: Shape = new Rectangle(10, 20);
console.log("area", r1.area());
let x: number = 0;
 
class C {
  x: string = "hello";

  m() {
    this.x = "world";
  }
}


const r2 = new Rectangle2("20", "40");
console.log("rect2 area", r2.area());
console.log("rect2 area type", typeof r2.area());


const r3 = new Rectangle3<string>("200", "100");
console.log("rect3 area", r3.area());
console.log("rect3 area type", typeof r3.area());