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


//Input Variables


var genPwd="";

//Values for Password

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
alphaL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
alphaU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var choices ="";

function generatePassword() {
    var charlength = parseInt(prompt("How many characters would you like in your password? Password must be between 8 and 128"));

    if (!charlength) {
        alert("Must have a value");
    }

    else if (charlength < 8 || charlength > 128) {
        alert("Must choose between 8 and 128");
    }

    else {
        var confirmNumber = confirm("Do you want a number?");
        var confirmCharacter = confirm("Do you want any special characters?");
        var confirmLowercase = confirm("Do you want any lower case?");
        var confirmUppercase = confirm("Do you want any uppercase?");

    }

    //If choose no choices

    if (!confirmNumber && !confirmCharacter && !confirmLowercase && !confirmUppercase) {
        choices = alert("You must choose one");

    }
    //If true for all confirms

    else if (confirmNumber && confirmCharacter && confirmLowercase && confirmUppercase) {

        choices = number.concat(character, alphaL, alphaU);
        console.log(choices)
    }

    else if (confirmNumber && confirmCharacter && confirmLowercase) {

        choices = number.concat(character, alphaL);
        console.log(choices)
    }
    else if (confirmNumber && confirmCharacter && confirmUppercase) {

        choices = number.concat(character, alphaU);
    }

    else if (confirmNumber && confirmLowercase && confirmUppercase) {

        choices = number.concat(alphaU, alphaL);
    }

    else if (confirmCharacter && confirmLowercase && confirmUppercase) {

        choices = character.concat(alphaL, alphaU);
    }

    else if (confirmCharacter && confirmNumber) {

        choices = character.concat(number);

    }

    else if (confirmCharacter && confirmLowercase) {

        choices = character.concat(alphaL);
    }

    else if (confirmCharacter && confirmUppercase) {

        choices = character.concat(alphaU);
    }
    else if (confirmLowercase && confirmNumber) {

        choices = alphaL.concat(number);
    }

    else if (confirmLowercase && confirmUppercase) {

        choices = alphaL.concat(alphaU);
    }

    else if (confirmNumber && confirmUppercase) {

        choices = number.concat(alphaU);
    }

    else if (confirmCharacter) {

        choices = character;
    }
    else if (confirmLowercase) {

        choices = alphaL;
    }
    else if (confirmNumber) {
        choices = number;
console.log(choices)
    }
    else if (confirmUppercase) {
        choices = alphaU;
    }

    //Random choices
    
    for (var i = 0; i < charlength; i++) {
     genPwd += choices.charAt(Math.floor(Math.random() * choices.length));

      //  genPwd.push(pwdChoices);
    }

    
    //UserInput(password);
    
    console.log(genPwd)
    return genPwd;

}




