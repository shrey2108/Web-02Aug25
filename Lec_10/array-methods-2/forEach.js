// forEach

const nums = [1, 2, 3, 4, 5];

// const callback = function(num){
//   console.log(num * 10);
// }

// nums.forEach(callback);

// ------------------------------------------------

// nums.forEach(function(num){
//   console.log(num)
// })

nums.forEach(num => console.log(num));


const products = [
  { id: 1, name: "Laptop", price: 1200, inStock: true },
  { id: 2, name: "Phone", price: 800, inStock: false },
  { id: 3, name: "Headphones", price: 150, inStock: true },
];

// products.forEach(function(product){
//   console.log(product)
// })

// function callback(product) {
//   console.log(product)
// }

// for(let i=0; i<products.length; i++){
//   callback(products[i]);
// }

products.forEach(function(product, i){
  console.log(i, product)
})

