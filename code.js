// paste this code in console 
// only works in google meet

var color = prompt("What color for background", 'teal');

// "ow3" is the id for the "background" (not the body tag)
document.getElementById('ow3').style.background = color;

// "".xPh1xb.P9KVBf" is the class for the toolbar section
document.querySelector('.xPh1xb.P9KVBf').id = 'customtoolbarcolor';
var gradient1 = prompt("What color for gradient 'middle'", 'beige');
var gradient2 = prompt("What color for gradient 'edge", 'teal');
document.getElementById("customtoolbarcolor").style.background = "linear-gradient(to right, " + gradient2 + "," + gradient1 + ", " + gradient2 + ")";
