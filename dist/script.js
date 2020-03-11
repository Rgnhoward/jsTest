// declare variables
var userName;
var userNum;
var guess;
var button = document.getElementById(id);

switch(id){
  case 1:
    btnName = (button.onClick = promptUser()); break;
  case 2:
     btnNum = (button.onClick = promptNum()); break;   
}

function promptUser(){  
userName= prompt("Please enter your name");
console.log(userName);
document.write("Welcome to my javaScript test page " + userName);
}

function promptNum(){
userNum = prompt("Please enter a number between 0-100");
console.log(userNum);
}
guess = Math.floor((Math.random() *100) +1);
console.log(guess);
document.write("Is your number " + guess + " ?" );