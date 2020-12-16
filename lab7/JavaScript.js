var name = prompt("Please enter your name", "Name");
Welcome(name);

var color = prompt("Write a color");
setColor(color);

var ch = prompt("select one of this '=', '+', '/' ");
chg(ch);


function Welcome(name){
  alert("Welcome "+name);
}

function setColor(color){
    document.write('<h1 style="background-color:'+color+';">Coler</h1>');
}

function chg(ch){
  if(ch == "="){
    alert("Equal sign");
  }
  else if(ch == "+"){
    alert("Adding sign");
  }
  else if(ch == "/"){
    alert("Division sign");
  }
  else {
    alert("You should select one of this '=', '+', '/'");
  }
}