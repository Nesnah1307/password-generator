// Assignment code here

const lowerChara = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","t","u","v","w","x","y","z"];
const upperChara = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numberChara = ["0","1","2","3","4","5","6","7","8","9"];
const specialChara = ["!","@","#","$","%","^","&","*","(",")","_","+","=","{","}","[","]","<",">","?","~"];
let allChara = [];




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

var generatePassword = function () {
  var lengthChara = window.prompt("How many characters would you like in your password? It must be between 8-128 characters.");

  if (lengthChara > 7 && lengthChara <= 128) {
    window.alert("I will generate a password with " + lengthChara + " characters.")
  }
  else {
    window.alert("You must pick a number between 8-128.");
    generatePassword();
  }

  var upperChar = window.confirm("Would you like uppercase characters included in your password?");
  if (upperChar) {
    window.alert("Uppercase letters will be included in your password.");
    allChara.push(...upperChara);
  }
  else {
    window.alert("No uppercase letters will be included your password.");
  }

  var lowerChar = window.confirm("Would you like lowercase letters included in your password?");
  if (lowerChar) {
    window.alert("Lowercase letters will be include in your password.");
    allChara.push(...lowerChara);
  }
  else {
    window.alert("No lowercase letters will be included in your password.");
  }

  var numberChar = window.confirm("Would you like numbers included in your password?");
  if (numberChar) {
    window.alert("Numbers will be included in your password.");
    allChara.push(...numberChara);
  }
  else {
    window.alert("No numbers will be included in your password.");
  }

  var specialChar = window.confirm("Would you like special characters included in your password?");
  if (specialChar) {
    window.alert("Special characters will be included in your password.");
    allChara.push(...specialChara);
  }
  else {
    window.alert("No special characters will be included in your password.");
  }

  if (allChara.length) {
    window.alert("Generating your password now!");
  }
  else {
    window.alert("You must include at least one of the previous choices. No password generated.");
    return generatePassword;
  }

    var password = "";
      for (let i = 0; i < lengthChara; i++) {
        randomNumber = Math.floor(Math.random() * allChara.length);
        password += allChara[randomNumber];
      }; 
       
      return password;
      
};    

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
