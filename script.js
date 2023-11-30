"use strict";

const form = document.getElementById("form");
const password1EL = document.getElementById("password1");
const password2El = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
  //using  browser Constraint API

  //style main message for an error
  if (!isValid) {
    isValid = form.checkValidity();
    message.textContent = "Please fill out all fields";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
  }

  //check to see if passwords match
  if (password1EL.value === password2El.value) {
    passwordsMatch = true;
    password1EL.style.borderColor = "green";
    password2El.style.borderColor = "green";
  } else {
    passwordsMatch = false;
    message.textContent = "Make shure passwords match";
    message.style.color = "red";
    messageContainer.style.borderColor = "red";
    password1EL.style.borderColor = "red";
    password2El.style.borderColor = "red";
    return;
  }
  if (isValid && passwordsMatch) {
    message.textContent = "Successfully Registered";
    message.style.color = "green";
    messageContainer.style.borderColor = "green";
  }
}

function storeFormData() {
  console.log(form);

  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user);
}

function processFromData(e) {
  e.preventDefault();
  validateForm();

  if (isValid && passwordsMatch) {
    storeFormData();
  }
}
form.addEventListener("submit", processFromData);
