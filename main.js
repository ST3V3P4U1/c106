Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function takesnapshot() {
    Webcam.snap(function (data_uri)
    {
        document.getElementById("result").innerHTML='<img id="capturedimage" src="'+data_uri+'"/>';
    });
}
console.log("ml5version:",ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/t8qqP16J5/',modelLoaded);
function modelLoaded(){
    console.log('model loaded');
}

function check(){
img=document.getElementById("capturedimage");
classifier.classify(img, compare);
}

function compare(error, results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("resultofobject").innerHTML=results[0].label;
        document.getElementById("accuracyofresult").innerHTML=results[0].confidence;
    }
}