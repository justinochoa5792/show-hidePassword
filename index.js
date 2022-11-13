let password = document.getElementById("password");
let eyeIcon = document.getElementById("eye-icon");
let emailLabel = document.getElementById("email-label");
let emailError = document.getElementById("email-error");
let email = document.getElementById("email");

eyeIcon.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eyeIcon.src = "./images/eye-open.png";
  } else {
    password.type = "password";
    eyeIcon.src = "./images/eye-close.png";
  }
});

email.addEventListener("keyup", () => {
  emailLabel.style.bottom = "65px";
  emailLabel.style.color = "#fff";

  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Please Enter Valid Email";
    return false;
  } else {
    emailError.innerHTML = "";
    return false;
  }
});
