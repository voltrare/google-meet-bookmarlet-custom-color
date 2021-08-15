// paste this code in console (ctrl + shift + i)
// only works in google meet

// verify website
var currentLocation = window.location.hostname;
if (currentLocation == 'meet.google.com') {
  var color = prompt("What color for background?", 'teal');
  var gradient1 = prompt("What color for gradient 'middle'?", 'beige');
  var gradient2 = prompt("What color for gradient 'edge'?", 'teal');

  // "ow3" is the id for the "background" (not the body tag)
  document.getElementById('ow3').style.background = color;

  // "".xPh1xb.P9KVBf" is the class for the toolbar section
  document.querySelector('.xPh1xb.P9KVBf').id = 'customtoolbarcolor';
  document.getElementById('customtoolbarcolor').style.background = "linear-gradient(to right, " + gradient2 + "," + gradient1 + ", " + gradient2 + ")";
} else {
  if (confirm("This is not google meet but you can change some color too 'not perfect'")) { 
    document.body.style.color= prompt("What color for text?",'white');
    document.body.style.background= prompt("What color for background?",'black');
  } else {
  }
}
