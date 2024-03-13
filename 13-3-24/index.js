var boxes = document.getElementById("boxes");

for (let index = 0; index < 28; index++) {
  var remainder = index % 2;
  if (remainder == 0) {
    boxes.innerHTML +=
      "<div onclick={deleteBox(this)} class='box' style='background-color:black'></div>";
  } else {
    boxes.innerHTML +=
      "<div onclick={deleteBox(this)} class='box' style='background-color:white'></div>";
  }
}

function deleteBox(element) {
  element.style.backgroundColor = "tomato";
}
