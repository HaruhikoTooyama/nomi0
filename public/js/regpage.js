

var stage; 
female = false;
male = false;
mhaareeins = false;
var container = new createjs.Container();
var koerper = new createjs.Bitmap("./data/nomi0_avatar_male_white_big.png");
var haare = new createjs.Bitmap("./data/MHaare1.png");

function init() {
   container = new createjs.Stage("myCanvas");
   var koerper = new createjs.Bitmap("./data/nomi0_avatar_male_white_big.png");
   var haare = new createjs.Bitmap("./data/MHaare1.png");
}



function makeChar() {   
   

    document.getElementById("famormale").style.visibility = "visible";
    document.getElementById("makefem").style.visibility = "visible";
    document.getElementById("makemale").style.visibility = "visible";
    document.getElementById("makekrank").style.visibility = "visible";

}


function makeKrank() {
   alert('...? Nomi0 scheint nicht der richtige Ort für dich, wenn du an einer Identitätsstörung leidest, solltest du mit einer Vertrauensperson oder deinem Hausarzt sprechen. Sollte du in einer akkuten Krise sein, wende dich an folgende Stellen \n\n TelefonSeelsorge in Deutschland: \n\n +49 (0)800 111 0 111 (gebührenfrei) \n +49 (0)800 111 0 222 (gebührenfrei) ')
}


function makeMale(){

   container.removeAllChildren();
   container.update();
   var koerper = new createjs.Bitmap("./data/nomi0_avatar_male_white_big.png");
   container.addChild(koerper);
   container.update();


   document.getElementById("race").style.visibility = "visible";
   document.getElementById("makeeuro").style.visibility = "visible";
   document.getElementById("makemongo").style.visibility = "visible";
   document.getElementById("makenegro").style.visibility = "visible";
   male = true;
   female = false;


}

function makeFemale() {

   container.removeAllChildren();
   container.update();
   var koerper = new createjs.Bitmap("./data/nomi0_avatar_female_white_big_size.png");
   container.addChild(koerper);
   container.update();
   document.getElementById("race").style.visibility = "visible";
   document.getElementById("makeeuro").style.visibility = "visible";
   document.getElementById("makemongo").style.visibility = "visible";
   document.getElementById("makenegro").style.visibility = "visible";
   female = true;
   male = false;
   
}


function makeEuro() {
   if (female == true) {
      container.removeAllChildren();
      container.update();
      var rasse = new createjs.Bitmap("./data/nomi0_avatar_female_white_big_size.png");
      container.addChild(rasse);
      container.update();
      document.getElementById("eyecolor").style.visibility = "visible";
      document.getElementById("makegreeneye").style.visibility = "visible";
      document.getElementById("makeblueeye").style.visibility = "visible";
      document.getElementById("makebrowneye").style.visibility = "visible";
   }
   else {
      container.removeAllChildren();
      container.update();
      var rasse = new createjs.Bitmap("./data/nomi0_avatar_male_white_big.png");
      container.addChild(rasse);
      container.update();
      document.getElementById("eyecolor").style.visibility = "visible";
      document.getElementById("makegreeneye").style.visibility = "visible";
      document.getElementById("makeblueeye").style.visibility = "visible";
      document.getElementById("makebrowneye").style.visibility = "visible";
   }
}

function makeMongo() {
   if (female == true) {
      container.removeAllChildren();
      container.update();
      var rasse = new createjs.Bitmap("./data/nomi0_avatar_female_yellow_big_size.png");
      container.addChild(rasse);
      container.update();
      document.getElementById("eyecolor").style.visibility = "visible";
      document.getElementById("makegreeneye").style.visibility = "visible";
      document.getElementById("makeblueeye").style.visibility = "visible";
      document.getElementById("makebrowneye").style.visibility = "visible";
   }

   else {
      container.removeAllChildren();
      container.update();
      var rasse = new createjs.Bitmap("./data/nomi0_avatar_male_yellow_big.png");
      container.addChild(rasse);
      container.update();
      document.getElementById("eyecolor").style.visibility = "visible";
      document.getElementById("makegreeneye").style.visibility = "visible";
      document.getElementById("makeblueeye").style.visibility = "visible";
      document.getElementById("makebrowneye").style.visibility = "visible";
   }
}


function makeNegro() {
   if (female == true) {
      container.removeAllChildren();
      container.update();
      var rasse = new createjs.Bitmap("./data/nomi0_avatar_female_brown_big_size.png");
      container.addChild(rasse);
      container.update();
      document.getElementById("eyecolor").style.visibility = "visible";
      document.getElementById("makegreeneye").style.visibility = "visible";
      document.getElementById("makeblueeye").style.visibility = "visible";
      document.getElementById("makebrowneye").style.visibility = "visible";
   }

   else {
      container.removeAllChildren();
      container.update();
      var rasse = new createjs.Bitmap("./data/nomi0_avatar_male_brown_big.png");
      container.addChild(rasse);
      container.update();   
      document.getElementById("eyecolor").style.visibility = "visible";
      document.getElementById("makegreeneye").style.visibility = "visible";
      document.getElementById("makeblueeye").style.visibility = "visible";
      document.getElementById("makebrowneye").style.visibility = "visible";
   }
}


function makeBlueeye() {
   if (female == true) {
   container.removeChild(augen);
   container.update();
   var augen = new createjs.Bitmap("./data/feyesblue.png");
   container.addChild(augen);
   container.update();
   document.getElementById("haare").style.visibility = "visible";

   }
   
   else {
      container.removeChild(augen);
   container.update();
   var augen = new createjs.Bitmap("./data/meyesblue.png");
   container.addChild(augen);
   container.update();
   document.getElementById("haare").style.visibility = "visible";
   document.getElementById("pmhaare1").style.visibility = "visible";
   document.getElementById("pmhaare2").style.visibility = "visible";
   document.getElementById("pmhaare3").style.visibility = "visible";
   document.getElementById("pmhaare4").style.visibility = "visible";
   document.getElementById("pmhaare5").style.visibility = "visible";
   }


}

function makeGreeneye() {
   if (female == true) {
   container.removeChild(augen);
   container.update();
   var augen = new createjs.Bitmap("./data/feyesgreen.png");
   container.addChild(augen);
   container.update();
   document.getElementById("haare").style.visibility = "visible";

   }
   else {
   container.removeChild(augen);
   container.update();
   var augen = new createjs.Bitmap("./data/meyesgreen.png");
   container.addChild(augen);
   container.update();
   document.getElementById("haare").style.visibility = "visible";
   document.getElementById("pmhaare1").style.visibility = "visible";
   document.getElementById("pmhaare2").style.visibility = "visible";
   document.getElementById("pmhaare3").style.visibility = "visible";
   document.getElementById("pmhaare4").style.visibility = "visible";
   document.getElementById("pmhaare5").style.visibility = "visible";
   }

}

function makeBrowneye() {
   if ( female == true ) {
   container.removeChild(augen);
   container.update();
   var augen = new createjs.Bitmap("./data/feyesbrown.png");
   container.addChild(augen);
   container.update();
   document.getElementById("haare").style.visibility = "visible";
   }
   else {
   container.removeChild(augen);
   container.update();
   var augen = new createjs.Bitmap("./data/meyesbrown.png");
   container.addChild(augen);
   container.update();
   document.getElementById("haare").style.visibility = "visible";
   document.getElementById("pmhaare1").style.visibility = "visible";
   document.getElementById("pmhaare2").style.visibility = "visible";
   document.getElementById("pmhaare3").style.visibility = "visible";
   document.getElementById("pmhaare4").style.visibility = "visible";
   document.getElementById("pmhaare5").style.visibility = "visible";
   }
}


function MHaare1() {
   if (mhaareeins == false) {
   
   var haare = new createjs.Bitmap("./data/MHaare1.png");
   container.addChild(haare);
   container.update();
   mhaareeins = true;
   }

   else {
      container.removeChild(haare);
      container.update();
      mhaareeins = false;
   }

}

function MHaare2() {
   if (male == true) {

   var haare = new createjs.Bitmap("./data/MHaare2.png");
   container2.swapChildren(haare);
   container2.update();


   }

   else {
      alert('Falsches Geschlecht!');
   }

}

function MHaare3() {
   if (male == true) {

   var haare = new createjs.Bitmap("./data/MHaare3.png");
   container2.swapChildren(haare);
   container2.update();

   }

   else {
      alert('Falsches Geschlecht!');
   }

}

function MHaare4() {
   if (male == true) {

   var haare = new createjs.Bitmap("./data/MHaare4.png");
   container2.swapChildren(haare);
   container2.update();

   }

   else {
      alert('Falsches Geschlecht!');
   }

}

function MHaare5() {
   if (male == true) {

   var haare = new createjs.Bitmap("./data/MHaare5.png");
   container2.swapChildren(haare);
   container2.update();

   }

   else {
      alert('Falsches Geschlecht!');
   }

}

