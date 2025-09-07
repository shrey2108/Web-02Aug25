const nums = [1, 2, 3, 4, 5];

const newNums = nums.map(function(num, i) {
  return num * 10;
})

console.log(newNums);

const products = [
  { id: 1, name: "Laptop", price: 1200, inStock: true },
  { id: 2, name: "Phone", price: 800, inStock: false },
  { id: 3, name: "Headphones", price: 150, inStock: true },
];

const newProducts = products.map(function(product){
  return {
    // id: product.id,
    name: product.name.toUpperCase(),
    // price: product.price,
    // inStock: product.inStock
  }
})

console.log(newProducts);