const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function paintGreetings(name) {
  greeting.classList.remove(HIDDEN);
  greeting.innerText = `Hello ${name}`
}

loginForm.addEventListener("submit", onLoginSubmit);

const saveUsername = localStorage.getItem(USERNAME_KEY);
if(saveUsername === null) {
  loginForm.classList.remove(HIDDEN);
} else {
  paintGreetings(saveUsername);
}