
const socket = io();



function ResName() {


   
resusrname = document.getElementById("resname").value + "\n" + document.getElementById("email").value;

socket.emit("namenreser", resusrname);


alert("Super, alles hat geklappt. Sofern deine E-Mail richtig ist, wirst in den Tagen kurz vor der Eröffnung von Nomi0 eine Nachricht mit dem Code für deinen Account erhalten. Grüße Jeff");

}






female = false;
male = false;


var stage = new Konva.Stage({
   container: 'myCanvas',   // id of container <div>
   width: 500,
   height: 800
 });

// idk how but it works
 var layer = new Konva.Layer();
 layer.clearBeforeDraw(true);

function makeChar() {   
   
   stage.add(layer);
   Konva.Image.fromURL('/data/nomi0_avatar_male_white_big.png', function (korpernode) {
      korpernode.setAttrs({
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
      });
      layer.add(korpernode);
      layer.batchDraw();
    });
    document.getElementById("famormale").style.visibility = "visible";
    document.getElementById("makefem").style.visibility = "visible";
    document.getElementById("makemale").style.visibility = "visible";
    document.getElementById("makekrank").style.visibility = "visible";

}


function makeKrank() {
   alert('...? Nomi0 scheint nicht der richtige Ort für dich, wenn du an einer Identitätsstörung leidest, solltest du mit einer Vertrauensperson oder deinem Hausarzt sprechen. Sollte du in einer akkuten Krise sein, wende dich an folgende Stellen \n\n TelefonSeelsorge in Deutschland: \n\n +49 (0)800 111 0 111 (gebührenfrei) \n +49 (0)800 111 0 222 (gebührenfrei) ')
}


function makeMale(){
   layer.clear(female);
   Konva.Image.fromURL('/data/nomi0_avatar_male_white_big.png', function (male) {
      male.setAttrs({
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
      });
      layer.add(male);
      layer.batchDraw();
    });



   document.getElementById("race").style.visibility = "visible";
   document.getElementById("makeeuro").style.visibility = "visible";
   document.getElementById("makemongo").style.visibility = "visible";
   document.getElementById("makenegro").style.visibility = "visible";
   male = true;
   female = false;


}

function makeFemale() {
   layer.clear(male);
   Konva.Image.fromURL('/data/nomi0_avatar_female_white_big_size.png', function (female) {
      female.setAttrs({
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
      });
      layer.add(female);
      layer.batchDraw();
    });

   document.getElementById("race").style.visibility = "visible";
   document.getElementById("makeeuro").style.visibility = "visible";
   document.getElementById("makemongo").style.visibility = "visible";
   document.getElementById("makenegro").style.visibility = "visible";
   female = true;
   male = false;
   
}


function makeEuro() {
   if (female == true) {
    
      document.getElementById("eyecolor").style.visibility = "visible";
      document.getElementById("makegreeneye").style.visibility = "visible";
      document.getElementById("makeblueeye").style.visibility = "visible";
      document.getElementById("makebrowneye").style.visibility = "visible";
   }
   else {
     
      
      document.getElementById("eyecolor").style.visibility = "visible";
      document.getElementById("makegreeneye").style.visibility = "visible";
      document.getElementById("makeblueeye").style.visibility = "visible";
      document.getElementById("makebrowneye").style.visibility = "visible";
   }
}

function makeMongo() {
   if (female == true) {
   
      document.getElementById("eyecolor").style.visibility = "visible";
      document.getElementById("makegreeneye").style.visibility = "visible";
      document.getElementById("makeblueeye").style.visibility = "visible";
      document.getElementById("makebrowneye").style.visibility = "visible";
   }

   else {
     
      document.getElementById("eyecolor").style.visibility = "visible";
      document.getElementById("makegreeneye").style.visibility = "visible";
      document.getElementById("makeblueeye").style.visibility = "visible";
      document.getElementById("makebrowneye").style.visibility = "visible";
   }
}


function makeNegro() {
   if (female == true) {
      
      document.getElementById("eyecolor").style.visibility = "visible";
      document.getElementById("makegreeneye").style.visibility = "visible";
      document.getElementById("makeblueeye").style.visibility = "visible";
      document.getElementById("makebrowneye").style.visibility = "visible";
   }

   else {
    
      document.getElementById("eyecolor").style.visibility = "visible";
      document.getElementById("makegreeneye").style.visibility = "visible";
      document.getElementById("makeblueeye").style.visibility = "visible";
      document.getElementById("makebrowneye").style.visibility = "visible";
   }
}


function makeBlueeye() {
   if (female == true) {
 
   document.getElementById("haare").style.visibility = "visible";

   }
   
   else {
     
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
 
   document.getElementById("haare").style.visibility = "visible";

   }
   else {
   
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
   
   document.getElementById("haare").style.visibility = "visible";
   }
   else {
  
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

