
               
async function callStackML() {
                    //provide the access key
                    await stackml.init({'accessKeyId': '10497ebc3dd4bc496108acdf782f1e70'});
            
                    const model = await stackml.faceDetection(callbackLoad);

                    // make prediction with the image
                    model.detect(document.getElementById('image'), callbackPredict);
                    
                    function callbackLoad() {
                        console.log('callback after face detection model is loaded!');
                    }
                    
                    // callback after prediction
                    function callbackPredict(err, results) {
                        console.log(results);
                    
                        // draw output keypoints in the image
                        model.draw(document.getElementById('myCanvas'), document.getElementById('image'), results);
                    }
                }
                