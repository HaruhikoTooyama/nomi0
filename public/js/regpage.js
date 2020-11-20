const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
male = false;
female = false;



function saveCanvas() {
ctx.save();
}

function loadCanvas() {
    ctx.restore();
}


function makeChar() {
    img = document.getElementById("femcharwhite");
    ctx.drawImage(img, 0, 0);
    document.getElementById("famormale").style.visibility = "visible";
    document.getElementById("makefem").style.visibility = "visible";
    document.getElementById("makemale").style.visibility = "visible";
}

function makeMale() {
    ctx.clearRect(0, 0, 500, 800);
    img = document.getElementById("malecharwhite");
    ctx.drawImage(img, 0, 0);
    document.getElementById("race").style.visibility = "visible";
    document.getElementById("makeeuro").style.visibility = "visible";
    document.getElementById("makemongo").style.visibility = "visible";
    document.getElementById("makenegro").style.visibility = "visible";
    male = true;
    female = false;
}

function makeFemale() {
    ctx.clearRect(0, 0, 500, 800);
    img = document.getElementById("femcharwhite");
    ctx.drawImage(img, 0, 0);
    document.getElementById("race").style.visibility = "visible";
    document.getElementById("makeeuro").style.visibility = "visible";
    document.getElementById("makemongo").style.visibility = "visible";
    document.getElementById("makenegro").style.visibility = "visible";
    female = true;
    male = false;
}


function makeEuro() {

   if (male === true) {
    ctx.clearRect(0, 0, 500, 800);
    img = document.getElementById("malecharwhite");
    ctx.drawImage(img, 0, 0);
    document.getElementById("eyecolor").style.visibility = "visible";
     document.getElementById("makeblueeye").style.visibility = "visible";
     document.getElementById("makegreeneye").style.visibility = "visible";
     document.getElementById("makebrowneye").style.visibility = "visible";
     document.getElementById("makeasiaeye").style.visibility = "visible";

   }

   else {
    ctx.clearRect(0, 0, 500, 800);
    img = document.getElementById("femcharwhite");
    ctx.drawImage(img, 0, 0);
    document.getElementById("eyecolor").style.visibility = "visible";
     document.getElementById("makeblueeye").style.visibility = "visible";
     document.getElementById("makegreeneye").style.visibility = "visible";
     document.getElementById("makebrowneye").style.visibility = "visible";
     document.getElementById("makeasiaeye").style.visibility = "visible";

   }
}

function makeMongo() {

    if (male === true) {
     ctx.clearRect(0, 0, 500, 800);
     img = document.getElementById("malecharmongo");
     ctx.drawImage(img, 0, 0);
     document.getElementById("eyecolor").style.visibility = "visible";
     document.getElementById("makeblueeye").style.visibility = "visible";
     document.getElementById("makegreeneye").style.visibility = "visible";
     document.getElementById("makebrowneye").style.visibility = "visible";
     document.getElementById("makeasiaeye").style.visibility = "visible";

    }
 
    else {
     ctx.clearRect(0, 0, 500, 800);
     img = document.getElementById("femcharmongo");
     ctx.drawImage(img, 0, 0);
     document.getElementById("eyecolor").style.visibility = "visible";
     document.getElementById("makeblueeye").style.visibility = "visible";
     document.getElementById("makegreeneye").style.visibility = "visible";
     document.getElementById("makebrowneye").style.visibility = "visible";
     document.getElementById("makeasiaeye").style.visibility = "visible";
 
    }
 }

 function makeNegro() {

    if (male === true) {
     ctx.clearRect(0, 0, 500, 800);
     img = document.getElementById("malecharnegro");
     ctx.drawImage(img, 0, 0);
     document.getElementById("eyecolor").style.visibility = "visible";
     document.getElementById("makeblueeye").style.visibility = "visible";
     document.getElementById("makegreeneye").style.visibility = "visible";
     document.getElementById("makebrowneye").style.visibility = "visible";
     document.getElementById("makeasiaeye").style.visibility = "visible";
    }
 
    else {
     ctx.clearRect(0, 0, 500, 800);
     img = document.getElementById("femcharnegro");
     ctx.drawImage(img, 0, 0);
     document.getElementById("eyecolor").style.visibility = "visible";
     document.getElementById("makeblueeye").style.visibility = "visible";
     document.getElementById("makegreeneye").style.visibility = "visible";
     document.getElementById("makebrowneye").style.visibility = "visible";
     document.getElementById("makeasiaeye").style.visibility = "visible";
 
    }
 }

 function makeBlueeye() {
    img = document.getElementById("blueeye");
    ctx.drawImage(img, 0, 0);

 }

 function makeGreeneye() {
    img = document.getElementById("greeneye");
    ctx.drawImage(img, 0, 0);

 }

 function makeBrowneye() {
    img = document.getElementById("browneye");
    ctx.drawImage(img, 0, 0);

 }

 function makeAsiaeye() {
    img = document.getElementById("asiaeye");
    ctx.drawImage(img, 0, 0);

 }
