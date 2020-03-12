// Assignment Code
var generateBtn = document.querySelector("#generate");

//Deciding length and complexity
var numChar = prompt("How many characters would you like in your password?")
var uppChar = confirm("Do you want upper case letters?")
var specChar = confirm("Do you want special characters?")


//Possible Characters
var char = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ?!#%/()+-,<=>@[]~&*.:;^[\\]';

//Declaring new password
var newPass = ""

//Generate password with loop
function generatePassword() {
  for(i=0; i<=numChar; i++){
    newPass=newPass + char.charAt(Math.floor(Math.random() * char.length))
  }

//Put newPass in text box
var passwordText = document.getElementById("password").textContent
passwordText = newPass
}

//Event listener
generateBtn.addEventListener("click", generatePassword())