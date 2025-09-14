const data = [
  { length: 5, width: 4 },
  { length: 6, width: 10 },
  { length: 60, width: 20 },
  { length: 7, width: 8 },
  { length: 4, width: 4 },
  { length: 9, width: 3 },
];

const areas = []; // a * b
const perimeters = []; // 2 * (a + b)

// for(let rect of data) {
//   const area = rect.length * rect.width;
//   areas.push(area);

//   const perimeter = 2 * area;
//   perimeters.push(perimeter);
// }

for(let i=0; i<data.length; i++){
  const area = data[i].length * data[i].width;
  areas.push(area);

  const perimeter = 2 * (data[i].length * data[i].width);
  perimeters.push(perimeter);
}

console.log(areas);
console.log(perimeters);
