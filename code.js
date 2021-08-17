// paste this code in console (ctrl + shift + i)
// only works in google meet

(function () {
  var currentLocation = window.location.hostname;
  if (currentLocation == 'meet.google.com') {
    var backgroundcolorsolid = prompt("What color for background?", 'teal');
    var toolbargradientmiddle = prompt("What color for toolbar gradient 'middle'?", 'beige');
    var toolbargradientedge = prompt("What color for toolbar gradient 'edge'?", 'teal');
    document.getElementById('ow3').style.background = 'backgroundcolorsolid';
    document.querySelector('.xPh1xb.P9KVBf').id = 'toolbarcolor';
    document.getElementById('toolbarcolor').style.background = 'linear-gradient(to right, " + toolbargradientedge + "," + toolbargradientmiddle + ", " + toolbargradientedge + ")';
    document.getElementById('toolbarcolor').style.height = '69px';
  } else {
    if (confirm("This is not google meet but you can change some color too 'not perfect'")) {
      document.body.style.color = prompt("What color for text?", 'white');
      document.body.style.background = prompt("What color for background?", 'black');
    } else { }
  }
})();