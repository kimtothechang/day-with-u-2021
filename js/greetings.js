const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const date = new Date();
const hours = parseInt(date.getHours());

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  //greeting.innerText = `What's up, ${username}`;

  if (hours >= 4 && hours < 6) {
    greeting.innerText = `You did, ${username}`;
  } else if (hours >= 6 && hours < 11) {
    greeting.innerText = `What's up, ${username}`;
  } else if (hours >= 11 && hours < 18) {
    greeting.innerText = `Had lunch?, ${username}`;
  } else if (hours >= 18 && hours < 20) {
    greeting.innerText = `Good job, ${username}`;
  } else if (hours >= 20 && hours < 24) {
    greeting.innerText = `Go to bed, ${username}`;
  } else if (hours >= 0 && hours < 4) {
    greeting.innerText = `Go to bed, ${username}`;
  }

  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
