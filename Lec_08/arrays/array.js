
arr = [1, 2, 3, 4];

console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

arr[2] = "hi there";
console.log(arr);


// add/remove data in last

// arr.push(200);
// arr.pop();

// arr.unshift(500);
// arr.shift();
// arr.shift();
// arr.shift();

arr.splice(2, 1);
arr.splice(2, 0, 3000, 4000);

console.log(arr.length);
console.log(arr);

console.log(arr.join("-"));
console.log(["shreyance", "jpg"].join("."));


arr1 = [1,2,3,4,5];
arr2 = [10,20,30,40,50];
arr3 = [10000, 20000];

var arr4 = [1,2,3];

console.log(arr1.concat(arr2, arr3));

// flat()
// arr[0] arr.at(0)
// toString()