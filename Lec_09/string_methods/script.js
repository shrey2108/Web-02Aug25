
var firstName = "Rahul";
var lastName = "Verma";

console.log(firstName + " " + lastName);
console.log(firstName.concat(" ", lastName));

var str = "        hello there!     ";
console.log(str.trim());
console.log(str.trimStart());
console.log(str.trimEnd());

// length
// trim()
// trimStart()
// trimEnd()
// concat()
// split()
// toLowerCase()
// toUpperCase()
// replace()
// replaceAll()
// slice()
// substring()

var imageName = "photo.jpg";
var text = "Hello, Hi there! How are you doin??"
console.log(imageName.split("."));
console.log(text.split(" "));

console.log(imageName.toUpperCase())
console.log(text.toLowerCase());

console.log(imageName.replace("jpg", "png"))
console.log(text.replace("H", "h"));
console.log(text.replaceAll("H", "h"));

console.log(imageName.slice(0, 4+1));
console.log(imageName.slice(6, imageName.length));
console.log(imageName.slice(6));


console.log(imageName.substring(0, 5))
console.log(imageName.substring(6))



