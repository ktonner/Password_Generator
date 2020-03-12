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
    newPass=newPass +
  }
 

  //Number generator
  var random = Math.floor(Math.random() * all.length);
  var char = all.substring(random, random + 1)

  for(var i = 0; i <numChar; i++)
{ var newPass = []
  newPass.push(all[random])
  console.log(newPass.toString())

}}

var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
  console.log("Click")
  var password = generatePassword();


  passwordText.textContent = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword())