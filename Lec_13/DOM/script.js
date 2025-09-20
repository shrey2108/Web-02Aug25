
// DOM => Document Object Model
// Web API => SetTimeout(), document
//  js => document API => can access HTML in object form
// html => tree like structure

// js => camelCase

// css => kebar-case
// background-color: "red"
// backgroundColor: "red"

// selectors 
// const headings = document.getElementsByTagName("h2");
// heading[0].style.color = "red";

// for(let heading of headings) {
//   heading.style.color = "white";
//   heading.style.backgroundColor = "orange"
// }

// const favSelectors = document.getElementsByClassName("fav-selector");
// console.log(favSelectors);

// const singleHeading = document.getElementById("heading")
// console.log(singleHeading);

const heading = document.querySelector("h2");
console.log(heading.innerText);

// heading.innerText = "Hi there!"
// heading.innerText = "<li>innerHTML</li>"


heading.innerHTML = "<i>innerHTML</i>"
console.log(heading.innerHTML)
console.log(heading.innerText)

// console.log(heading.getAttribute("id"))

// heading.setAttribute("class", "one two");
// heading.hasAttribute("class");

// classList.add(), .remove(), .toggle(), .contains()

heading.classList.add("one", "two")
// heading.classList.add("two")

heading.classList.remove("one")
// heading.classList.toggle("two")
console.log(heading.classList.contains("one"));
console.log(heading.classList.contains("two"));

// .parentElement, .nextElementSibling, .previousElementSibling, .children 

const newListItem = document.createElement("li");
newListItem.innerText = "Five";
newListItem.classList.add("one", "two")
console.log(newListItem)

const ul = document.querySelector("ul");
ul.remove();

// document.querySelector("body").remove();
// ul.append(newListItem)
// ul.children[2].append(newListItem)
// ul.after(newListItem)


