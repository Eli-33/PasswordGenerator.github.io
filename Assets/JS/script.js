// Array of special characters to be included in password
var specialCharacter = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacter = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacter = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacter = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var generateBtn = document.querySelector("#generate");
var resultElenemt = document.getElementsByClassName('result')
var AmountRange = document.getElementById('Range')
var lengthElement = document.getElementById('length')
var UppercaseElement = document.getElementById('upperCasedCharacters')
var LowercaseElement = document.getElementById('lowerCasedCharacters')
var numericElement = document.getElementById('numericCharacters')
var specialElement = document.getElementById('specialCharacters')
var generateEl = document.getElementById('generate')


//  for link AmountRange and AmountNumber .
AmountRange.addEventListener('input', syncAmount)
lengthElement.addEventListener('input', syncAmount)
//  the function for sync AmountRange & AmountNumber.
function syncAmount(e) {
  var value = e.target.value
  lengthElement.value = value

}

function userInput() {
  var length = lengthElement.value;
  var hasLower = LowercaseElement.checked;
  var hasUpper = UppercaseElement.checked;
  var hasNumeric = numericElement.checked;
  var hasSpecial = specialElement.checked;

  var randomFunction = {
    lower: hasLower,
    upper: hasUpper,
    number: hasNumeric,
    special: hasSpecial,
    length: length
  }
  return randomFunction;

}

function generatePassword() {
  let userInputVar = userInput()

  var possibleCharacters = []
  var guaranteedCharacters = [];

  if (userInputVar.lower) {
    possibleCharacters = possibleCharacters.concat(lowerCasedCharacter);
  }
  
  if (userInputVar.upper) {
    possibleCharacters = possibleCharacters.concat(upperCasedCharacter);
  }
  
  if (userInputVar.number) {
    possibleCharacters = possibleCharacters.concat(numericCharacter);
  }
  
  if (userInputVar.special) {
    possibleCharacters = possibleCharacters.concat(specialCharacter);
  }

  console.log(possibleCharacters)
  
// loop 
  for(i = 0; i < userInputVar.length; i++){
    guaranteedCharacters.push(possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)])
  }
  return guaranteedCharacters.join("")

}
function writePassword(){
  var generate = generatePassword()
  var passwordText = document.querySelector("#password");
  passwordText.value = generate;
  
  console.log(generate)

}
generateBtn.addEventListener("click", writePassword);

