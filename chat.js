//press enter to login
var input = document.getElementById("user");
user.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementById("enter").click();
  }
})

//login
function notloggedin() {
  var lol = document.getElementById("user").value;
  var lol2 = document.getElementById("myCheck").checked;
   if(lol === "" || lol2 === false) {
     alert("You must enter your username and checkbox!");
   }
  else {
  var notlog = document.getElementById("notloggedin").style.display;
  document.getElementById("notloggedin").style.display = "none";
  document.getElementById("loggedin").style.display = "block";
  };}

//logout and hide messages area
function logout() {
  var notlog = document.getElementById("notloggedin").style.display;
  document.getElementById("notloggedin").style.display = "block";
  document.getElementById("loggedin").style.display = "none";
  }

//add a new usrname
function username() {
  var usr = document.createElement("span");
  var y = document.getElementById("user").value;
  var textnode = document.createTextNode(y);
  usr.appendChild(textnode);
  var userlist = document.getElementById("msghere");
  
  userlist.insertBefore(usr, userlist.childNodes[0]); 
  
  }
  
//add a new msg
function myFunction() {
  var btn = document.createElement("li");
  var x = document.getElementById("textin").value;
  var textchat = document.createTextNode(x);
  btn.appendChild(textchat);  
  var list = document.getElementById("msghere");
  if(x === "") {alert('please say something');}  
  else {list.insertBefore(btn, list.childNodes[1]);
 };}

//add a hidden checkbox 
function mouseover() {
  document.getElementById('warn').style.visibility = 'visible';
  
}
function mouseout() {
  document.getElementById('warn').style.visibility = 'hidden';
  
}

//change style
function changestyle(){
  document.body.style.backgroundColor = "black";
  document.getElementById('background').style.backgroundColor = "#333333";
  document.getElementById('h1color').style.color = "grey";
    var xx = document.getElementsByTagName("LI").style.backgroundColor;
  xx = "black";
}

