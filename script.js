// Create an HTML page with two buttons that argue with each other. When one button is clicked, the text "I'm right" should be placed next to it. When the other button is clicked, the text is replaced with, "No, I'm right!"


var pacButton = document.getElementById('pacManButton');
var pacMan = document.getElementById('pacMan');

pacButton.onclick = function() {
  pacButton.textContent = "I'M RIGHT!";
  pacButton.style.width = "200px";
  pacMan.style.left = "290px";
  mushButton.textContent = "CLICK ME";
  mushButton.style.width = "150px";
};


var mushButton = document.getElementById('mushroomButton');

mushButton.onclick = function() {
  mushButton.textContent = "NO, I'M RIGHT!";
  mushButton.style.width = "200px";
  pacButton.textContent = "CLICK ME";
  pacButton.style.width = "150px";
  pacMan.style.left = "220px";
};



// Create an HTML page with a large element on the page that says "Don't hover over me" inside of it. When you hover over the element, send an alert to the user that says, "Hey, I told you not to hover over me!"

var lavaPit = document.getElementById('lavaPic');

lavaPit.onmouseover = function() {
  alert("Hey, I told you not to hover over the lava pit!");
};


// Create an HTML page with javascript that listens for a keypress in a textbox.
// When the user presses that key, the text of the h1 should show the value of the key they have pressed.
// Example: If the user presses "J", the text inside the h1 should be "J".

document.addEventListener("keypress", function(event) {
  console.log(event);
  var info = event.key;
  var whatKey = document.getElementById('key');
  whatKey.textContent = info;
});

// Create an HTML page with a form. The form should include inputs for a username, password, an h1 tag as well as a button. In a Javascript file, write code that does the following things when the button is pressed:
// checks that the password is 12345678
// checks that the username is less than 14 characters in length
// if the info in the form is correct, have Javascript change the text in the h1 to say "Congrats on knowing your username and password!"
// if anything is wrong, send an alert message saying "Incorrect username or password"

var submit = document.getElementById('submit');

submit.addEventListener("click", function(event) {
  event.preventDefault();
  check();
})

function check() {
  var password = document.getElementById('password').value;
  var username = document.getElementById('username').value;
  if (password == "12345678" && username.length <= 13) {
    alert('Welcome!');
  }
  else {
    alert("Incorrect password.");
  }
};
