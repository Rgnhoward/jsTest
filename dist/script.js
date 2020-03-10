//var user= prompt("Please enter your name", "");

if (user != null) {
  greeting = "Welcome";
} else 
  greeting = "Try Again";
function guessAge(){
return Math.floor(Math.random()*100);
}
button.onclick = guessAge();
document.write("Are you " + guessAge() + " years old?");