noseX=0;
noseY=0;


function preload(){
  clown_nose=loadImage('https://i.postimg.cc/QtNNcV26/tony-stark-goatee-transparent-by-asthonx1-dairu0o-fullview.png')
}
function setup(){
canvas=createCanvas(500,350)
canvas.center(); 
video= createCapture(VIDEO);
video.size(350,500)
video.hide();

poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}
function draw(){
   image(video,0,0,500,350);
   fill(255,0,0);
   stroke(0,255,0);
   //circle(noseX,noseY,20);
   image(clown_nose,noseX-90,noseY-215,300,300);

}
function take_snapshot(){
  save('myFilterImage.png')


}
function modelLoaded(){
  console.log('posenet is initialised')


}
function gotPoses(results){
if(results.length>0)
{
  console.log(results);
  noseX=results[0].pose.nose.x;
  noseY=results[0].pose.nose.y;
  console.log("nose x ="+ results[0].pose.nose.x);
  console.log("nose y ="+ results[0].pose.nose.y);
}
}
