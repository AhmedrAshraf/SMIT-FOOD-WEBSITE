var box = document.getElementById("container");

var burgerImg =
  "https://www.foodandwine.com/thmb/DI29Houjc_ccAtFKly0BbVsusHc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/crispy-comte-cheesburgers-FT-RECIPE0921-6166c6552b7148e8a8561f7765ddf20b.jpg";
var pizzaImg =
  "https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*";
var broastImg =
  "https://www.caterermiddleeast.com/cloud/2021/12/23/q14Ott5Z-ALBaik-dubai.jpg";
var SandwichImg =
  "https://media.istockphoto.com/id/1397193477/photo/club-sandwich-made-with-bacon-ham-turkey-cheese-lettuce-and-tomato.jpg?s=612x612&w=0&k=20&c=fjNyxTEA0L88bqENs8_SKMnfAOyWlNPGxLIxz9nsSss=";

var foods = [
  { title: "Pizza", price: 500, img: pizzaImg },
  { title: "Burger", price: 120, img: burgerImg },
  { title: "Broast", price: 270, img: broastImg },
  { title: "Sandwich", price: 300, img: SandwichImg },
  { title: "Sandwich", price: 300, img: SandwichImg },
  { title: "Broast", price: 270, img: broastImg },
  { title: "Burger", price: 120, img: burgerImg },
  { title: "Pizza", price: 500, img: pizzaImg },
];

for (var count = 0; count < foods.length; count++) {
  box.innerHTML += `<div class="card">
        <img src=${foods[count].img} width="100%" height="170px" />
        <h2>${foods[count].title}</h2>
        <p>Rs.${foods[count].price}</p>
    </div>`;
}


// get api data

// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((json) => {
//     var products = json.products;

//     for (var count = 0; count < products.length; count++) {
//       box.innerHTML += `<div class="card">
//           <img src=${products[count].images[0]} width="100%" height="170px" />
//           <h2>${products[count].title}</h2>
//           <p>$${products[count].price}</p>
//       </div>`;
//     }
//   });
