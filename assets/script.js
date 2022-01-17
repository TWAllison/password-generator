// Assignment code here
var charArray = [];
var newArray = [];
var newPassword = ''

// function to reset values 
function reset() {
  charArray = [];
  newArray = [];
  newPassword = ''
  document.querySelector('#password').value = '';
}

// generate a random number in the charArray
function randomNum (lengthOfArray) {
  var result = Math.floor(Math.random() * lengthOfArray)
  return result
}

//function to add correct char code to charArray
function arrayLowtoHigh(low, high) {
  for (var i = low; i <= high; i++) {
    charArray.push(i)
  }
};

// get password criteria ( lowercase, uppercase, numbers, symbols/special charecters)
// https://www.charset.org/utf-8  this is a list of charecter codes if you would like to add additional charecters
function pwCriteria() {
  var lowerCase = confirm('Include Lowercase Charecters?')
  if (lowerCase) {
    arrayLowtoHigh(97,122)
  }

  var upperCase = confirm('Include Uppercase Charecters?')
  if (upperCase) {
    arrayLowtoHigh(65, 90)
  }

  var numbers = confrm('Include Numbers ?')
  if (numbers) {
    arrayLowtoHigh(48, 57)
  }
  
  var specChar = confirm('Include Special Charecters and Symbols?')
  if (specChar) {
    arrayLowtoHigh(33 ,47)
  }
  if (specChar) {
    arrayLowtoHigh(58, 64)
  }
  if (specChar) {
    arrayLowtoHigh(91, 96)
  }

  if (charArray.length === 0) {
    alert('You must include 1 or more chritera.')
    pwCriteria();
  }
}

// generate the password 
function generatePassword() {
  reset();

  pwLength = parseInt(prompt('How Many Charecters in Lenght Would You Like Your Password? Choose between 8 and 128'))
  if(pwLength >= 8 && pwLength <= 128) {
    generatePassword();
  }

  for (var i =0; i < pwLength; i++) {
    newArray.push(String.fromCharCode(charArray[randomNum(charArray.length)]));
  }

  for (i =0; i < newArray.length; i++) {
    newPassword += newArray[i]
  }
  return newPassword
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
