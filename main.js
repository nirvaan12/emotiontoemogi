//https://teachablemachine.withgoogle.com/models/aAAGVlqIt/

prediction1="";
prediction2="";

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach("#camera")

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='capture_img' src='"+data_uri+"'>";
    });


}
console.log("ml5 version",ml5.version);

classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/aAAGVlqIt/model.json",modelLoaded);


function modelLoaded(){
    console.log("Model is loaded!");
}
 
function speak(){
var synth=window.speechSynthesis;
  speakdata1="The first prediction is"+prediction1;
  speakdata2="And the second prediction is"+prediction2;
  utterThis= new SpeechSynthesisUtterance(speakdata1+speakdata2);
  synth.speak(utterThis);
}
