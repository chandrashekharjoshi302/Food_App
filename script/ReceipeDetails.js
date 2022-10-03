//navbar code start here
import header from "../component/header.js";

let header_div = document.querySelector("#header");
header_div.innerHTML = header();
//end of navbar code



let data = JSON.parse(localStorage.getItem("MealDetail"));

console.log(data);

  let thumbnail = document.querySelector("#thumbnail");
  let name = document.querySelector("#name");
  let area = document.querySelector("#area");
  let cat = document.querySelector("#cat");
  let ingred = document.querySelector("#ingredMsrs");

  let ingredients = [
    data.strIngredient1,
    data.strIngredient2,
    data.strIngredient3,
    data.strIngredient4,
    data.strIngredient5,
    data.strIngredient6,
    data.strIngredient7,
    data.strIngredient8,
    data.strIngredient9,
    data.strIngredient10,
    data.strIngredient11,
    data.strIngredient12,
    data.strIngredient13,
    data.strIngredient14,
    data.strIngredient15,
    data.strIngredient16,
    data.strIngredient17,
    data.strIngredient18,
    data.strIngredient19,
    data.strIngredient20,
  ];

  let measures = [
    data.strMeasure1,
    data.strMeasure2,
    data.strMeasure3,
    data.strMeasure4,
    data.strMeasure5,
    data.strMeasure6,
    data.strMeasure7,
    data.strMeasure8,
    data.strMeasure9,
    data.strMeasure10,
    data.strMeasure11,
    data.strMeasure12,
    data.strMeasure13,
    data.strMeasure14,
    data.strMeasure15,
    data.strMeasure16,
    data.strMeasure17,
    data.strMeasure18,
    data.strMeasure19,
    data.strMeasure20,
  ];

  let final = [];
  for (let i = 0; i < ingredients.length; i++) {
    if (ingredients[i] == "") {
      break;
    }
    final.push(`${ingredients[i]} - ${measures[i]}`);
  }

  let instructions = document.querySelector("#instructions");
  let article = document.querySelector("#blog");
  let video = document.querySelector("#video");

  thumbnail.src = `${data.strMealThumb}/preview`;
  name.append(data.strMeal);
  area.append(data.strArea);
  cat.append(data.strCategory);
  ingred.append(final.join(", "));

  instructions.append(data.strInstructions);
  article.href = data.strSource;

  let vid = "";
  for (let i = data.strYoutube.length - 1; i >= 0; i--) {
    if (data.strYoutube[i] == "=") {
      break;
    }
    vid += data.strYoutube[i];
  }
  vid = vid.split("").reverse().join("");
  console.log(vid);
  video.src = `https://www.youtube.com/embed/${vid}`;
  console.log("video: ", video.src);
  console.log(data.strYoutube);