const images = document.querySelectorAll(".images img");
const modal = document.querySelector(".modal");
const modalimg = document.querySelector(".mdimg");
const modaltext = document.querySelector(".mdtext");
const close = document.querySelector(".close");

images.forEach((image) => {
  image.addEventListener("click", () => {
    modalimg.src = image.src;
    modaltext.innerHTML = image.alt;
    modal.classList.add("popup");

    close.addEventListener("click", () => {
      modal.classList.remove("popup");
    });
  });
});

const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');

//Grabs FieldName + case sensitivity
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


//Event Listeners
form.addEventListener('submit', function(e) {
  e.preventDefault();

  checkRequired([name, email]);
  checkLength(name, 5, 50);
  checkEmail(email);
});

//Checks required fields
function checkRequired(inputArr) {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      displayError(input, `${getFieldName(input)} is required`)
    } else {
      displaySucces(input);
    }
  });
}


//Displays error messages
function displayError(input, message) {
  const formValidation = input.parentElement;
  formValidation.className = 'form-validation error';
  const small = formValidation.querySelector('small');
  small.innerText = message;
}

//Displays the color of error messages
function displaySucces(input) {
  const formValidation = input.parentElement;
  formValidation.className = 'form-validation success';
}

//E-mail validity check
function checkEmail(input) {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (regEx.test(input.value.trim())) {
    displaySucces(input)
  } else {
    displayError(input, 'The provided e-mail is not valid');
  }
}


//Checks input length
function checkLength(input, min, max) {
  if (input.value.length < min) {
    displayError(input, `${getFieldName(input)} must be at least ${min} characters`);
  } else if (input.value.length > max) {
    displayError(input, `${getFieldName(input)} must be less than ${max} characters`);
  } else {
    displaySucces(input);
  }
}
