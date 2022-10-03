//navbar code here
import header from "../component/header.js";

let header_div = document.querySelector("#header");
header_div.innerHTML = header();
//end of navbar code


import { getData, append } from "./fetch.js";

let url = "https://www.themealdb.com/api/json/v1/1/random.php";
let container = document.getElementById("random");

getData(url).then((res) => {
  append(res.meals, container);
});