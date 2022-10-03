import header from "../component/header.js";

let header_div = document.querySelector("#header");
header_div.innerHTML = header();

let login = async () => {
  event.preventDefault()
  let user_data = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };

  user_data = JSON.stringify(user_data);

  let res = await fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
    method: "POST",
    body: user_data,

    headers: {
      "Content-Type": "application/json",
    },
  });

  let data = await res.json();

  let username = document.getElementById("username").value;
  getUserDetail(username, data.token);
  console.log(data);
};

document.getElementById("submit").addEventListener("click", login);

let getUserDetail = async (username, token) => {
  console.log("here");
  let res = await fetch(
    `https://masai-api-mocker.herokuapp.com/user/${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  let data = await res.json();
  console.log("user data: ", data);
  localStorage.setItem("userdetails", data.username);
  window.location.href = "index.html";
};