const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
// validation
var nameError = document.getElementById('name-error');
var emailError = document.getElementById('email-error');
var passwordError = document.getElementById('password-error');
var password2Error = document.getElementById('password2-error');


function validateName(){ 
  var name = document.getElementById('contact-name').value;
  if (name.length==0){
      nameError.innerHTML = 'Name is required'
      return false;
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
      nameError.innerHTML = 'Write full name'
      return false;
  }
  nameError.innerHTML = '<i class="fa-solid fa-check"></i>';
  return true;
}
function validateEmail(){
  var email = document.getElementById('contact-email').value;

  if(!email.match (/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
      emailError.innerHTML = 'Emai Invalid'
      return false;
  }
  emailError.innerHTML= '<i class="fa-solid fa-check"></i>';
  return true;  
}
function validatePassword(){
  var password = document.getElementById('contact-password').value;
  if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)){
      passwordError.innerHTML = 'Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special characte'
      return false;
  }
  passwordError.innerHTML= '<i class="fa-solid fa-check"></i>';
  return true; 
}
function validatePassword2 (){
  var password = document.getElementById('contact-password').value;
  var password2 = document.getElementById('contact2-password').value;
  if(password!==password2){
      password2Error.innerHTML= 'Not Match'
      return false;
  }
  password2Error.innerHTML= '<i class="fa-solid fa-check"></i>';
  return true; 
}