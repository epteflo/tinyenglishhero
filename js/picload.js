window.onload = choosePic;

var myPix = new Array("images/logo.png","images/logo2.png");

function choosePic() {
     var randomNum = Math.floor(Math.random() * myPix.length);
     document.getElementById("myPicture").src = myPix[randomNum];
}