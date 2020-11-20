var stage = new createjs.Stage("myCanvas");


function makeChar() {   


    document.getElementById("famormale").style.visibility = "visible";
    document.getElementById("makefem").style.visibility = "visible";
    document.getElementById("makemale").style.visibility = "visible";
}


function makeMale(){
   stage.clear("myCanvas");
   var bitmap = new createjs.Bitmap("./data/nomi0_avatar_male_white_big.png");
   
   stage.addChild(bitmap);
   stage.update();


   document.getElementById("race").style.visibility = "visible";
   document.getElementById("makeeuro").style.visibility = "visible";
   document.getElementById("makemongo").style.visibility = "visible";
   document.getElementById("makenegro").style.visibility = "visible";

}

function makeFemale() {
   stage.clear("myCanvas");
   var bitmap = new createjs.Bitmap("./data/nomi0_avatar_female_white_big_size.png");
   
   stage.addChild(bitmap);
   stage.update();
   document.getElementById("race").style.visibility = "visible";
   document.getElementById("makeeuro").style.visibility = "visible";
   document.getElementById("makemongo").style.visibility = "visible";
   document.getElementById("makenegro").style.visibility = "visible";
   
}


function makeMongo() {
   stage.clear("myCanvas");
   var bitmap = new createjs.Bitmap("./data/nomi0_avatar_female_yellow_big_size.png");
   
   stage.addChild(bitmap);
   stage.update();
}