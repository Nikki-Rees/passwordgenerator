// Assignment Code
let generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
//generateBtn.addEventListener('click', writePassword);

// ask user to confirm password length between 8 - 124 and convert response to a number

function generatePassword() {
  //ask used to define characters to be used within password

  let pwdLength = prompt("How many characters would like your password to use? (min. 8 - max. 124)")
  if (pwdLength > 7 && pwdLength < 125) {
    let pwdCase = confirm("Do you want to use uppercase letters?");
    let pwdNumbers = confirm("Do you want to include numbers within your password?");
    let pwdSpecial = confirm("Do you want to use special chanacters within your password?");

    //}else{alert("Please select a number between 8 and 124")} 

    //log values generated by prompts above
    //define the arrays to be used in the password depending on the prompt output
    const charAlpha = ["abcdefghijklmnopqrstuvwxyz"];
    const alphaUp = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
    const charNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const charSpec = ["!@#$%^&*()_+"];
    let values = "";

    // create else if statements to define which of the arrays will be used in the password  

    if (pwdCase === true && pwdNumbers === true && pwdSpecial === true) {

      values = (charAlpha + alphaUp + charNum + charSpec);
      console.log(values);

    } else if (pwdCase === true && pwdNumbers === true && pwdSpecial === false) {

      values = (charAlpha + alphaUp + charNum);
      console.log(values);

    } else if (pwdCase === true && pwdNumbers === false && pwdSpecial === false) {

      values = (charAlpha + alphaUp);
      console.log(values);

    } else if (pwdCase === true && pwdNumbers === false && pwdSpecial === true) {

      values = (charAlpha + alphaUp + charSpec);
      console.log(values);

    } else if (pwdCase === false && pwdNumbers === true && pwdSpecial === true) {

      values = (charAlpha + charNum + charSpec);
      console.log(values);

    } else if (pwdCase === false && pwdNumbers === false && pwdSpecial === true) {

      values = (charAlpha + charSpec);
      console.log(values);

    } else if (pwdCase === false && pwdNumbers === true && pwdSpecial === false) {

      values = (charAlpha + charNum);
      console.log(values);


    }



    let password = "";
    // create a loop to generate password to length specified by user

    for (let i = 0; i <= pwdLength; i++) {
      password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)))
    }

    return password;

  }
}

generateBtn.addEventListener('click', writePassword);
