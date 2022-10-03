//navbar code start here 
import header from "../component/header.js";

let header_div = document.querySelector("#header")
header_div.innerHTML = header();
//end of navbar code

let username = localStorage.getItem("userdetails")
console.log(username)
let details=document.querySelector("#details").innerText=`${username}`
console.log(details)
import { getData, randomdata, SearchMealList } from "./fetch.js";
let interval;
let search_value=document.querySelector("#searchBox")
search_value.addEventListener("input", debounce);

function debounce() {
  if (interval) clearInterval(interval);
  interval = setTimeout(fetchdata, 1000);
}

let fetchdata=async()=>{
    let query=search_value.value
    let search_data = document.querySelector("#randomdata");
    search_data.innerHTML=[]
    console.log(query)
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    let data=await getData(url)
    console.log(data.meals)
    SearchMealList(data.meals,search_data)
    
}



const HomePageData = async () => {
  let parent = document.querySelector("#randomdata");
  for (let i = 0; i <= 30; i++) {
    let data = await getData(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${
        Math.ceil(Math.random() * 300) + 52760
      }`
    );
    if (data.meals) {
      randomdata(data.meals[0], parent);
    }
  }
};
HomePageData();

