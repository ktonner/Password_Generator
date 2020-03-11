// Assignment Code
var generateBtn = document.querySelector("#generate");

var numChar = prompt("How many characters would you like in your password?")
var uppChar = confirm("Do you want upper case letters?")
var specChar = confirm("Do you want special characters?")



function generatePassword() {
  if (numChar > 121) {
    alert("The password can't be more than 121 characters.")
    prompt("How many characters would you like in your password?")
  }
  var num = ['1234567890']
  var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var spec = ['?!#%/()+-,<=>@[]~&*.:;^[\\]']
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
