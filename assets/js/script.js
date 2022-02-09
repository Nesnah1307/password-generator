// Assignment code here

var lowerChara = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,t,u,v,w,x,y,z";
var upperChara = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z";
var numberChara = "0,1,2,3,4,5,6,7,8,9";
var specialChara = "!,@,#,$,%,^,&,*,(,),_,+,=,{,},[,],\<,>,?,~,";
var allChara = "";
var randomNumber = "";
var typesArray = "";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var generatePassword = function () {
  var lengthChara = window.prompt("How many characters would you like in your password? It must be between 8-128 characters.");

  if (lengthChara > 7 && lengthChara <= 128) {
    window.alert("I will generate a password with " + lengthChara + " characters.")
  }
  else {
    window.alert("You must pick a number between 8-128.");
    generatePassword();
  }

  var upperChara = window.confirm("Would you like uppercase characters included in your password?");
  if (upperChara) {
    window.alert("Uppercase letters will be included in your password.");
    allChara += upperChara;
  }
  else {
    window.alert("No uppercase letters will be included your password.");
  }

  var lowerChara = window.confirm("Would you like lowercase letters included in your password?");
  if (lowerChara) {
    window.alert("Lowercase letters will be include in your password.");
    allChara += lowerChara;
  }
  else {
    window.alert("No lowercase letters will be included in your password.");
  }

  var numberChara = window.confirm("Would you like numbers included in your password?");
  if (numberChara) {
    window.alert("Numbers will be included in your password.");
    allChara += numberChara;
  }
  else {
    window.alert("No numbers will be included in your password.");
  }

  var specialChara = window.confirm("Would you like special characters included in your password?");
  if (specialChara) {
    window.alert("Special characters will be included in your password.");
    allChara += specialChara;
  }
  else {
    window.alert("No special characters will be included in your password.");
  }

  if (allChara) {
    window.alert("Generating your password now!");
  }
  else {
    window.alert("You must include at least one of the previous choices. No password generated.");
    return;
  }


      var temp = new Array();
      for (let i = 0; i < lengthChara; i++) {
        randomNumber = Math.floor(Math.random() * allChara.length);
        numbArray = allChara[randomNumber];
        temp.push(numbArray);
      }  
       
      return result.join("");
      
}
      
      // Write password to the #password input
      function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
      
        
        passwordText.value = password;
      }

    

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
