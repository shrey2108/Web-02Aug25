const data = [
  { length: 5, width: 4 },
  { length: 6, width: 10 },
  { length: 60, width: 20 },
  { length: 7, width: 8 },
  { length: 4, width: 4 },
  { length: 9, width: 3 },
];

const area = (a, b) => a * b;
const perimeter = (a, b) => 2 * (a + b);

// logic => callback function
// calculate => HOF
function calculate(data, logic) {
  const result = [];

  for(let rect of data) {
    const output = logic(rect.length, rect.width)
    result.push(output);
  }

  return result;
}

const areas = calculate(data, area);
const perimeters = calculate(data, perimeter);

console.log(areas)
console.log(perimeters)