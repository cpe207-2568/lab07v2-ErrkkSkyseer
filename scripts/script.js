// create reference for input fields.
const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const passwordConfirmInput = document.querySelector("#password-confirm-input");

// create reference for buttons.
const submitBtn = document.querySelector("#submit-btn");

// simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

function validatePassword(password) {
  return password.length >= 6;
}

// add callback function for firstNameInput.onkeyup event
firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};
lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};
emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};
passwordInput.onkeyup = () => {
  passwordInput.classList.remove("is-valid");
  passwordInput.classList.remove("is-invalid");
};
passwordConfirmInput.onkeyup = () => {
  passwordConfirmInput.classList.remove("is-valid");
  passwordConfirmInput.classList.remove("is-invalid");
};

// add callback functions for other input events.
// (lastname, email, password, confirm password)

// add callback function for submit button.
submitBtn.onclick = () => {
  let validationArray = [false, false, false, false, false];

  // validate first name
  if (firstNameInput.value !== "") {
    firstNameInput.classList.add("is-valid");
    validationArray[0] = true;
  } else {
    firstNameInput.classList.add("is-invalid");
  }

  // validate last name
  if (lastNameInput.value !== "") {
    lastNameInput.classList.add("is-valid");
    validationArray[1] = true;
  } else {
    lastNameInput.classList.add("is-invalid");
  }

  // validate email
  if (validateEmail(emailInput.value)) {
    emailInput.classList.add("is-valid");
    validationArray[2] = true;
  } else {
    emailInput.classList.add("is-invalid");
  }

  // validate password
  if (validatePassword(passwordInput.value)) {
    passwordInput.classList.add("is-valid");
    validationArray[3] = true;
  } else {
    passwordInput.classList.add("is-invalid");
  }

  // validate confirm password
  if (
    passwordInput.value === passwordConfirmInput.value &&
    validatePassword(passwordConfirmInput.value)
  ) {
    passwordConfirmInput.classList.add("is-valid");
    validationArray[4] = true;
  } else {
    passwordConfirmInput.classList.add("is-invalid");
  }

  if (validationArray.reduce((cur, next) => cur && next, true))
    alert("Registered successfully");
};

// add callback function for Reset button.
