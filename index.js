
let registerBtn = document.querySelector("#registerBtn");
let loginBtn = document.querySelector("#loginBtn");
let username = document.getElementById("name");
let NameHide = document.getElementById("nameHide");
let emailId = document.getElementById("mail");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let confirmPasswordHide = document.getElementById("confirmPasswordHide");
let title = document.querySelector("#title");
let submitButton = document.getElementById("btn");

function loginElement() {
  NameHide.style.maxHeight = "0";
  confirmPasswordHide.style.maxHeight = "0";
  title.innerHTML = "Login";
  loginBtn.classList.remove("disable");
  registerBtn.classList.add("disable");
}

function registerElement() {
  NameHide.style.maxHeight = "60px";
  confirmPasswordHide.style.maxHeight = "60px";
  title.innerHTML = "Register";
  registerBtn.classList.remove("disable");
  loginBtn.classList.add("disable");
}

// Input Handlers
function nameHandler() {
  if (username.value === "") {
    setErrorForInput(username, "Username can't be blank");
  } else {
    setSuccessForInput(username);
  }
}
function emailHandler() {
  if (emailId.value === "") {
    setErrorForInput(emailId, "Email Id can't be blank");
  } else if (!isEmail(emailId.value)) {
    setErrorForInput(emailId, "Enter a valid email address");
  } else {
    setSuccessForInput(emailId);
  }
}
function passwordHandler() {
  if (password.value === "") {
    setErrorForInput(password, "Password can't be blank");
  } else {
    setSuccessForInput(password);
  }
}
function confirmPasswordHandler() {
  if (confirmPassword.value === "") {
    setErrorForInput(confirmPassword, "Confirm Password can't be blank");
  } else if (password.value !== confirmPassword.value) {
    setErrorForInput(confirmPassword, "Enter Same password");
  } else {
    setSuccessForInput(confirmPassword);
  }
}

function checkAll() {
  nameHandler();
  emailHandler();
  passwordHandler();
  confirmPasswordHandler();
}
function inputHandler(field) {
  switch (field) {
    case "name":
      nameHandler();
      break;
    case "email":
      emailHandler();
      break;
    case "password":
      passwordHandler();
      break;
    case "confirmPassword":
      confirmPasswordHandler();
      break;
    case "submit":
      checkAll();
  }
}

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  inputHandler("submit");
});

function setSuccessForInput(field) {
  const formHandle = field.parentElement;
  formHandle.className = "input-field success";
}
function setErrorForInput(field, message) {
  const formHandle = field.parentElement;
  formHandle.className = "input-field error";
  const small = formHandle.querySelector("small");
  small.innerText = message;
}

function isEmail(email) {
  const res =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return res.test(String(email).toLowerCase());
}
