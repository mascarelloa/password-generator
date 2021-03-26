
var specials = ['@', '!', '#', '$', '%', '^', '&', '*', '<', '?', '+', '~', '_', '-', '/', '|', '{', '}', '[', ']']

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

var lowers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

var uppers = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var characterPool = [];
  // Ask user how many characters they want.
  var passwordLength = prompt("How many characters do you want your password to be? Enter a number between 8 and 128");
  // Alert user they must input a valid number between 8-128.
  if (isNaN(parseInt(passwordLength))) {
    alert("Wait! You must enter a valid number between 8 and 128.");
    return "Try again.";

  } else if (passwordLength > 128 || passwordLength < 8) {
    alert("Wait! Your password must be at least 8 characters and no more than 128 characters.");
    return "Try again.";
    // When the user inputs a valid number, continue...
  } else {

    // Ask what kind of characters they want in the password.
    var containCharacters = confirm("Do you want your password to contain special characters?");
    var containNumbers = confirm("Do you want your password to contain numbers?");
    var containLowers = confirm("Do you want your password to contain lowercase letters?");
    var containUppers = confirm("Do you want your password to contain uppercase letters?");


    // If yes to special characters add special characters array to character pool.
    if (containCharacters) {
      characterPool = characterPool.concat(specials);
    }

    // If yes to numbers add numbers array to character pool.
    if (containNumbers) {
      characterPool = characterPool.concat(numbers);
    }

    // If yes to lowercase add lowers array to character pool.
    if (containLowers) {
      characterPool = characterPool.concat(lowers);
    }

    // If yes to uppercase add uppers array to character pool.
    if (containUppers) {
      characterPool = characterPool.concat(uppers);
    }

    // Testing character pool array.
    console.log(characterPool)

    // Creating the string containing the randomly pulled characters.
    var finalPool = "";

    for (var i = 0; i < passwordLength; i++) {
      var index = Math.floor(Math.random() * characterPool.length);
      finalPool = finalPool + characterPool[index]
    }

    // Testing final output.
    console.log(finalPool);

    // Printing the final output into the field on the page.
    return finalPool;
  }
}






