// Assignment Code
var generateBtn = document.querySelector("#generate");

var numChar = prompt("How many characters would you like in your password?")

// Number(numChar)

// do{
//   alert("The password can't be more than 121 characters.")
//   prompt("How many characters would you like in your password?")
// }
// while (numChar > 121)

var uppChar = confirm("Do you want upper case letters?")
var specChar = confirm("Do you want special characters?")



function generatePassword(length = numChar) {
  var num = '1234567890';
  var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var spec = '?!#%/()+-,<=>@[]~&*.:;^[\\]';

  var all = num + letters + spec;
  var random = Math.floor(Math.random() * all.length);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
