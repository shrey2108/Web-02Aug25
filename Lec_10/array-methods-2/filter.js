const nums = [1, 2, 3, 4, 5, 6];

const evenNums = nums.filter(function(num, ind){
  // if(num % 2 == 0) return true;
  // else return false;
  return num % 2 == 0
})

console.log(evenNums);

// console.log(nums.includes(60))
// console.log(nums.indexOf(30))


const products = [
  { id: 1, name: "Laptop", price: 1200, inStock: true },
  { id: 2, name: "Phone", price: 800, inStock: false },
  { id: 3, name: "Headphones", price: 150, inStock: true },
  { id: 4, name: "Smartwatch", price: 300, inStock: true },
  { id: 5, name: "Tablet", price: 600, inStock: false },
  { id: 6, name: "Monitor", price: 250, inStock: true },
  { id: 7, name: "Keyboard", price: 100, inStock: true },
  { id: 8, name: "Mouse", price: 50, inStock: true },
];

const names = ["Tablet", "keyboard", "PHONE"];
const newNames = names.map(product => product.toLowerCase());

const filteredProducts = products.filter(function(product) {
  return newNames.includes(product.name.toLowerCase());
});

console.log(filteredProducts)
