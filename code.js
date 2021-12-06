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
    var all = document.getElementsByTagName("*");
    for (var i=0, max=all.length; i < max; i++) {
    all[i].style.background = "black";
    all[i].style.color = "white";
    all[i].style.visibility = "visible";
    }
  }
})();
