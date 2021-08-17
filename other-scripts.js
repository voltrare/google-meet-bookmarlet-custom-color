//black and white @ https://stackoverflow.com/questions/38833212/how-can-i-change-the-font-color-of-all-texts-of-your-website-using-javascript/38833684

var all = document.getElementsByTagName("*");
for (var i=0, max=all.length; i < max; i++) {
all[i].style.background = "black";
all[i].style.color = "white";
all[i].style.visibility = "visible";
}