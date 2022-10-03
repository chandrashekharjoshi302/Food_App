const getData = async (url) =>{
    let res = await fetch(url)
    let data = await res.json();
    // console.log(data)
    return data;
}


const singleMeal = (meal, searchListBox) => {
  if (searchListBox) searchListBox.style.display = "none";
  localStorage.setItem("MealDetail", JSON.stringify(meal));
  window.location.href = "ReceipeDetail.html";
};


const displaySingleMeal = (meal, container) => {
  let div = document.createElement("div");
  let image = document.createElement("img");
  image.src = meal.strMealThumb;
  let iframe = document.createElement("iframe");
  iframe.src = meal.strYoutube.replace("watch?v=", "embed/");
  iframe.setAttribute("allowfullscreen", true);
  iframe.setAttribute("frameborder", 0);
  div.append(image, iframe);
  let title = document.createElement("h1");
  title.innerText = meal.strMeal;
  let des = document.createElement("p");
  des.textContent = meal.strInstructions;
  container.append(div, title, des);
};


const randomdata = (meal, main) => {
  let box = document.createElement("div");
  let image = document.createElement("img");
  image.src = meal.strMealThumb;
  let titlediv=document.createElement("div")
  titlediv.setAttribute("id","title_name")
  let title = document.createElement("h3");
  title.innerText = meal.strMeal;
  titlediv.append(title)
  let readmore = document.createElement("button");
  readmore.innerText = "Get More Detail";
  readmore.onclick = () => {
    singleMeal(meal);
  };
  box.append(image, titlediv, readmore);
  main.append(box);
};

const SearchMealList = (meal, main) => {
    meal.map((meal)=>{
  let box = document.createElement("div");
  let image = document.createElement("img");
  image.src = meal.strMealThumb;
  let titlediv = document.createElement("div");
  titlediv.setAttribute("id", "title_name");
  let title = document.createElement("h3");
  title.innerText = meal.strMeal;
  titlediv.append(title);
  let readmore = document.createElement("button");
  readmore.innerText = "Get More Detail";
  readmore.onclick = () => {
    singleMeal(meal);
  };
  box.append(image, titlediv, readmore);
  main.append(box);
});
};


let append = (data, container) => {
  data.map(({ strMeal, strMealThumb, strInstructions }) => {
    let box = document.createElement("div");

    let title = document.createElement("h2");
    title.setAttribute("id", "title");
    title.innerText = strMeal;

    let image = document.createElement("img");
    image.setAttribute("id", "image");
    image.src = strMealThumb;

    let desc = document.createElement("h3");
    desc.innerText = strInstructions;

    box.append(image, desc);
    container.append(title, box);
  });
};

export { getData, singleMeal, displaySingleMeal, SearchMealList, randomdata, append };