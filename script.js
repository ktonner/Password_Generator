// Assignment Code
var generateBtn = document.querySelector("#generate");

//Deciding length and complexity
var numChar = prompt("How many characters would you like in your password?")
while(numChar>120){
  numChar= prompt("Passwords can only be 120 characters.")
}
var uppChar = confirm("Do you want upper case letters?")
var specChar = confirm("Do you want special characters?")



//Possible Characters
var char = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ?!#%/()+-,<=>@[]~&*.:;^[\\]';

//Declaring new password
var newPass = ""

//Declaring newPass
document.getElementById("password").textContent = newPass

//Generate password with loop
generateBtn.addEventListener("click",function generatePassword() {
  console.log("Was clicked")
  //Reset for each click
  newPass = ""
  for(i=0; i<=numChar; i++){

  //Conditionals set by confirms
    if(uppChar == false){
      char = char.slice(0,35) + char.slice(62)
    }
    else if (specChar == false){
      char = char.slice(0,62)
    }
    console.log(char)
    //Making new password
    newPass=newPass + char.charAt(Math.floor(Math.random() * char.length))
  }
  console.log(newPass)

//Put newPass in text box
document.getElementById("password").textContent = newPass
})
