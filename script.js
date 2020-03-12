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
generateBtn.addEventListener("click",function generatePassword() {
  console.log("Was clicked")
  for(i=0; i<=numChar; i++){
    if(uppChar == false){
      char.slice(35,61)
    }
    else if (specChar == false){
      char.slice(61)
    }
    console.log(char)
    newPass=newPass + char.charAt(Math.floor(Math.random() * char.length))
  }
  console.log(newPass)

//Put newPass in text box
document.getElementById("password").textContent = newPass
})