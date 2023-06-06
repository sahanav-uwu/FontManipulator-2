function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    canvas = createCanvas(600, 500);
    canvas.position(950, 250)
    video.position(400, 250)
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);

}

function modelLoaded(){
    console.log("Model Loaded!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX + " and nose y = " + noseY);
    
        leftWrist_X = results[0].pose.leftWrist.x;
        rightWrist_X = results[0].pose.rightWrist.x;
        console.log("left wrist x = " + leftWrist_X + " and right wrist x = " + rightWrist_X);
    
        difference = floor(leftWrist_X - rightWrist_X);
        console.log("The difference is " + difference);
    }
}