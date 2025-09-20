function download(){
  return new Promise((res) => {
    setTimeout(() => {
      res("photo.jpg");
    }, 3000)
  })
}

function compress(file){
  return new Promise((res) => {
    const compressedFile = file.split(".")[0] + ".zip";
    setTimeout(() => {
      res(compressedFile)
    }, 2000);
  })
}

function upload(file){
  return new Promise((res) => {
    const url = "https://www.cloud.fb.com/" + file;
    setTimeout(() => {
      res(url)
    }, 4000)
  })
}

// callback hell
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

// download()
//   .then((downloadedFile) => {
//     console.log("File downloaded: ", downloadedFile);
//     compress(downloadedFile)
//       .then((compressedFile) => {
//         console.log("File compressed:", compressedFile)
//         upload(compressedFile)
//           .then((finalUrl) => {
//             console.log(finalUrl)
//           })
//       })
//   })

// download()
//   .then((downloadedFile) => {
//     console.log("File downloaded:", downloadedFile);
//     return compress(downloadedFile);
//   })
//   .then((compressedFile) => {
//     console.log("File compressed:", compressedFile)
//     return upload(compressedFile)
//   })
//   .then(finalURL => {
//     console.log(finalURL);
//   })

download()
  .then(compress)
  .then(upload)
  .then((finalURL) => {
    console.log(finalURL)
  })
  .catch(err => console.log(err));
