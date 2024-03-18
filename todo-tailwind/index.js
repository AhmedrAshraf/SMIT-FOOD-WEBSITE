var input = document.getElementById("todoInput");
var list = document.getElementById("list");

function add() {
  if (input.value !== "") {
    list.innerHTML += `<li onclick="remove(this)">${input.value} <button>delete</button></li>`;
    input.value = "";
  } else {
    alert("Please Enter Value");
  }
}

function remove(eleme) {
  eleme.style.display = "none";
}
