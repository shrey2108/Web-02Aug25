
/**
 * ways to write async code in sync fashion
 * 1. callbacks
 * 2. promises
 * 3. async-await
 */

function download(cb){
  setTimeout(() => {
    cb("photo.jpg");
  }, 3000)
}

function compress(file, cb){
  const compressedFile = file.split(".")[0] + ".zip";
  setTimeout(() => {
    cb(compressedFile)
  }, 2000);
}

function upload(file, cb){
  const url = "https://www.cloud.fb.com/" + file;
  setTimeout(() => {
    cb(url)
  }, 4000)
}


// download(compress)

// download(function(downloadedFile){
//   console.log("photo downloaded:", downloadedFile);
//   compress(downloadedFile, function(compressedFile){
//     console.log("photo compressed:", compressedFile);
//     upload(compressedFile, function(url) {
//       console.log("Uploaded successfully")
//       console.log(url);
//     })
//   })
// })


// download(function(downloadedFile) {
//   upload(downloadedFile, function(url) {
//     console.log(url)
//   })
// })


// const arr = [10,20,30,40,50];

// Array.prototype.pop = function() {
//   console.log("Not popping")
// }

// arr.pop();
// console.log(arr)

// Array.prototype.myForEach = function(cb){
//   for(let i=0; i<arr.length; i++){
//     cb(i, arr[i], arr)
//   }
// }

// arr.myForEach((i, num, arr) => {
//   console.log(i, num, arr)
// })

// arr.myForEach(function(num, index, arr){
//   console.log(num, index, arr)
// })


