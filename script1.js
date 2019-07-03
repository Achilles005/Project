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
        console.log(results);
    
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
    console.log(results);

    // draw output keypoints in the image
    model.draw(document.getElementById('myCanvas'), document.getElementById('image'), results);
}
}
callStackML1();
callStackML2()
}
