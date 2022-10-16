// Assignment Code
var generateBtn = document.querySelector("#generate");

var lettersU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lettersL= [ ]
var numericC = ['0','1','2','3','4','5','6','7','8','9']
var specialK = ['!','@','#','$','%','&']

// var userInNum = window.confirm("Would you like to use numbers?")
// var userInUppercase = window.confirm("Would you like to use Uppercase characters?")
// var userInLowercase = window.confirm("Would you like to use lowercase characters?")
// var userInSymbol = window.confirm("Would you like to use symbols?")

// for(let letter of lettersU){
//   lettersL.push(letter.toLowerCase());
// // }
// console.log(lettersU, lettersL);

function generatePassword() {
  var userInput = window.prompt("Enter password length 8-128 characters?")
  var pwLength = parseInt(userInput)

  if (pwLength < 8 ) {
    return false;
  } else {
    
  }

  var userInNum = window.confirm("Would you like to use numbers?")
  var userInUppercase = window.confirm("Would you like to use Uppercase characters?")
  var userInLowercase = window.confirm("Would you like to use lowercase characters?")
  var userInSymbol = window.confirm("Would you like to use symbols?")
  
  for (var i = 0; i < lettersU.length; i++) {
    lettersL[i] = lettersU[i].toLowerCase()
  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
