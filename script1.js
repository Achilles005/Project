var exp='';
var emourl='';
var xaxis=0.0;
var yaxis=0.0;
var high=0.0;
var wide=0.0;

var reslt=[];
async function callStackML(){
    await stackml.init({'accessKeyId': '10497ebc3dd4bc496108acdf782f1e70'});
               
async function callStackML1() {
    //provide the access key
   
    const model = await stackml.faceLandmark(callbackLoad);

    // make prediction with the image
    model.detect(document.getElementById('image'), callbackPredict);
    
    function callbackLoad() {
        console.log('callback after face landmark detection model is loaded!');
    }
    
    // callback after prediction
    function callbackPredict(err, results) {
        xaxis=results.outputs[0].detection.box.x;
        yaxis=results.outputs[0].detection.box.y;
        high=results.outputs[0].detection.box.height;
        wide=results.outputs[0].detection.box.width;
        
    
        // draw output keypoints in the image
        model.draw(document.getElementById('myCanvas'), document.getElementById('image'), results);
}
}
async function callStackML2(){
    const model = await stackml.faceExpression(callbackLoad);

// make prediction with the image
model.detect(document.getElementById('image'), callbackPredict);

function callbackLoad() {
    console.log('callback after face expression model is loaded!');
}

// callback after prediction
function callbackPredict(err, results) {
   // console.log(results);
    reslt=results.outputs[0].expressions;
    console.log(reslt);
        
for(let i =0; i<=reslt.length;i++){
    for(let j=i+1;j<reslt.length;j++){
    if(reslt[j].probability>=reslt[i].probability){
        exp=reslt[i].expression;
    }
}
}
function loadJSON(file, callback) {   

    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', file, true); 
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }
/*
 function load() {
    
    loadJSON("https://unpkg.com/emoji.json@12.1.0/emoji.json", function(response) {
  
        var actual_JSON = JSON.parse(response);
        console.log(actual_JSON);
    });
    
    
}load();
*/

var p='.png';
var emo='';
var url1='emoji/';

 function getEmoji(emojiName){
    loadJSON("https://unpkg.com/emoji.json@12.1.0/emoji.json",function(response){
        var store=JSON.parse(response);
        let emoji={};
        for (let i=0;i<store.length;i++){
            if(store[i].name==emojiName){
                emoji=store[i].codes;
              
               emo=url1.concat(emoji);
              
              
               emourl=emo.concat(p);
              
               break;
            }
        }
       console.log(emourl);
    return (emourl);
})}


if (exp=="neutral"){
getEmoji("neutral face");
}
else if (exp=="happy"){
getEmoji("smiling face with smiling eyes");
}
else if (exp=="sad"){
    getEmoji("frowning face");
}
else if (exp=="angry"){
    getEmoji("angry face");
}
else if (exp=="fearful"){
    getEmoji("fearful face");
}
else if (exp=="disgusted"){
    getEmoji("face vomiting");
}
else{
    getEmoji("astonished face");
}

console.log(exp);


    // draw output keypoints in the image
    model.draw(document.getElementById('myCanvas'), document.getElementById('image'),results);
    //reslt=results;
    //console.log(reslt.length);
    

}
}
callStackML1();
callStackML2()
}

function placing(){

    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    var img = document.getElementById("image");
    var img2 = new Image();
    img2.src = emourl;
      
    
    
      $("#button1").click(function(){   
      ctx.drawImage(img2,xaxis,yaxis,wide,high);
    });
  };
  