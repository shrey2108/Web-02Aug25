
const baseURL = `https://dummyjson.com`
const list = document.getElementById("user-list");

function getData(){
  fetch(`${baseURL}/users`)
    .then((res) => {
      console.log(res)
      return res.json();
    })
    .then(data => {
      console.log(data);

      for(let user of data.users) {
        const li = document.createElement("li");
        li.innerText = `${user.firstName} ${user.lastName}`;

        list.append(li);
      }
    })
    .catch(err => alert("something went wrong..."))
}

async function getData_part2(){
  const res = await fetch(`${baseURL}/users`);
  // const res = await fetch(`${baseURL}/users`, {
  //   method: "",
  //   headers: {},
  //   // body: {}
  // })
  const data = await res.json();

  for(let user of data.users) {
    const li = document.createElement("li");
    li.innerText = `${user.firstName} ${user.lastName}`;

    list.append(li);
  }

  console.log(data)
}

getData_part2();