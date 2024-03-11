var div = document.getElementById("displayTable");

function tableGenerator() {
  div.innerHTML = "";
  var input = document.getElementById("table");
  for (var i = 1; i < 11; i++) {
    div.innerHTML += `<h3>${input.value} x ${i} = ${input.value * i}</h3>`; // 2 x 1 = 2
  }
  input.value = "";
}
