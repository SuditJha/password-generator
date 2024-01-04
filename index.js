const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let len = characters.length;
const passwordLength = 15;

let outputElOne = document.getElementById("output-1");
let outputElTwo = document.getElementById("output-2");
// console.log(outputElOne)
function generate(){
    const passwordOne = generatePassword();
    const passwordTwo = generatePassword();
    outputElOne.textContent = passwordOne;
    outputElTwo.textContent = passwordTwo;
}

function generatePassword(){
    let password = "";
    for(let i = 1; i <= passwordLength; i++){
        let index = Math.floor(Math.random() * len);
        password += characters[index];
    }
    return password;
}


