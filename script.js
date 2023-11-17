// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Function to generate a random password
function generatePassword() {
  // Define characters that can be used in the password
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var specialChars = "!@#$%^&*()_-+=";

  // Combine all characters into a single string
  var allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;

  // Prompt user for password length
  var passwordLength = parseInt(prompt("Enter password length (between 8 and 128):"));

  // Validate password length
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a valid password length between 8 and 128.");
    return "";
  }

  // Initialize password
  var password = "";

  // Generate password
  for (var i = 0; i < passwordLength; i++) {
    // Get a random index to pick a character from allChars
    var randomIndex = Math.floor(Math.random() * allChars.length);

    // Append the selected character to the password
    password += allChars.charAt(randomIndex);
  }

  return password;
}
