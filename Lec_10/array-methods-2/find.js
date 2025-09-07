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


const product = products.find(function(product){
  return product.id == 30;
})

console.log(product)
