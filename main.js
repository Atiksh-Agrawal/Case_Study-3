Webcam.set({
    height : 300,
    width  :350,
    image_fromat :'png',
    png_quality : 90
  });
  var camera = document.getElementById("camera");
  Webcam.attach('#camera');
  
  function Capture(){
      Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML = 
          "<img id = 'captured_image' src = " + data_uri + ">";
      })
  }

  console.log("ml5 version : ",ml5.version);

  classifier1 = ml5.imageClassifier('Mobilenet', modelloaded1);

  classifier2 = ml5.imageClassifier('Azure', modelloaded2);

  function modelloaded1(){
      console.log("model Loaded1")
  }

  function modelloaded2(){
    console.log("model Loaded2")
}

  function Check1(){
      img1 = document.getElementById("captured_image");
      classifier1.classify(img1 , gotresult1);
  }

  function Check2(){
    img2 = document.getElementById("captured_image");
    classifier2.classify(img2 , gotresult2);
}

  function gotresult1(error , results){

if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("object_name_identification").innerHTML = results [0].label;
}

  }

  function gotresult2(error , results){

    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("object_name_azure").innerHTML = results [0].label;
    }
    
      }
      
  
  