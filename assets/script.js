// Assignment code here
var resultEL = document.getElementById('result');
var lengthEl = document.getElementById('length');
var uppercaseEL = document.getElementById('uppercase');
var lowercaseEL = document.getElementById('lowercase');
var numbersEL = document.getElementById('numbers');
var symbolsEL = document.getElementById('symbols');
var generateBtn = document.getElementById('generate');


var randomFunction = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbol: randomSymbol
};
// Generate event listener
generateBtn.addEventListener('click', () => {
 // var length = +lengthEl.value;
  var hasLower = lowercaseEL.true;
  var hasUpper = uppercaseEL.true;
  var hasNumber = numbersEL.true;
  var hasSymbol = symbolsEL.true;

  resultEl.innerText = generatePassword(
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    length
  );
});

//generate password function
function generatePassword(lower, upper, number, symbol, length) {
  //initialize password var
  //filter out false values 
  //loop over lenght call generator functionfor each type
  // add final password to var and return

  var generatedPassword = '';

  var typesCount = lower + upper + number + Symbol;

  var typesArray = [{ lower }, { upper }, { number }, { symbol }].filter
    (item => Object.values(item)[0]);

  if (typesCount === 0) {
    return '';
  }

  for (var i = 0; i < length; i++) {
    var rand = Math.floor(Math.random() * typesArray.length);
    generatedPassword += randomFunction[Object.keys(typesArray[rand])[0]]();

    var finalPassword = generatedPassword(0, length);
  };
  return finalPassword;
};

//generate random charecters for passwords 
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNumber() {
  return Math.floor(Math.random() * 10);
}

function randomSymbol() {
  var Symbols = '!#$%&*+,-.:;<=>?@^_{}~';
  return Symbols[Math.floor(Math.random() * Symbols.length)];
}

var inputPromt = function() {
 var lower = window.prompt('would you like to iclude lowercase letters?');

 if (lower === true);
 return hasLower.true

  
}
generateBtn.onclick = inputPromt;



// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
