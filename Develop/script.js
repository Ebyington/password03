// Assignment Code
var generateBtn = document.querySelector("#generate");
var lettersU = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var lettersL= []
var numericC = ['0','1','2','3','4','5','6','7','8','9']
var specialK = ['!','@','#','$','%','&']



for(let letter of lettersU){
  lettersL.push(letter.toLowerCase());
}
console.log(lettersU, lettersL);

function generatePassword(){

  let randomString
  let psL = prompt("Enter password length 8- 128 characters?");
  let Upper = confirm("Would you like to use uppercase character?");
  let Lower = confirm("Would you like to use lowercase characters?");

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
