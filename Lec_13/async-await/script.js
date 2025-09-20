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


async function main() {
  try {
    const downloadedFile = await download();
    console.log("File downloaded", downloadedFile);

    const compressedFile = await compress(downloadedFile);
    console.log("File compressed", compressedFile);

    const finalURL = await upload(compressedFile);
    console.log("File uploaded to ", finalURL);

  } catch (error) {
    console.log(error)
  }
}

main();