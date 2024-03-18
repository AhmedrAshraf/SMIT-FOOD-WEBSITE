var boxes = document.getElementById("boxes");

for (let index = 0; index < 9; index++) {
  boxes.innerHTML += `<div onclick={tick(this)} class='box'></div>`;
}

var isFirstUser = true;

function tick(box) {
  if (isFirstUser === true) {
    box.innerHTML = `<img src="./cross.png" />`;
    isFirstUser = false;
  } else {
    box.innerHTML = `<img src="./tick.png" />`;
    isFirstUser = true;
  }
}

function clearBoxes() {
  let boxes = document.getElementsByClassName("box")
  for (i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = ""
  }
}
