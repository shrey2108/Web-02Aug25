
const inp = document.querySelector("input");
const addBtn = document.getElementById("add-btn");
const list = document.querySelector("ul");

addBtn.addEventListener("click", e => {
  const text = inp.value;
  inp.value = "";
  addTodo(text);
})

list.addEventListener("click", (e) => {
  const elem = e.target;
  if(elem.classList.contains("delete-btn")){
    elem.parentElement.remove();
  }
})

function addTodo(text){
  const li = document.createElement("li");
  li.innerHTML = `
    <div>
      <input type="checkbox">
      <span>${text}</span>
    </div>
    <button class="delete-btn">Delete</button>
  `;
  li.classList.add("todo-item");
  list.append(li);
}


