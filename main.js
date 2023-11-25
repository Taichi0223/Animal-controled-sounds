function StartAliens(){
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/qX7mO0-Fw/model.json",model_loaded);
    
}

function model_loaded(){
    console.log("Model is loaded.")
    classifier.classify(got_Results);
    
}

function got_Results(error,results){
//console.log("Here are the Results:");
    if (error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("sound").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = ((results[0].confidence)*100).toFixed(2)+ "%" ;
        
        sound = results[0].label;
    
        img_alien1 = document.getElementById("alien_1");


        if (sound == "CAT"){
            img_alien1.src = "cat.png";
        }
        else if (sound == "DOG"){
            img_alien1.src = "dog.png";
        }  
        else if (sound == "ROAR"){
            img_alien1.src = "tiger.png";
        }  
        else if (sound == "HUMAN"){
            img_alien1.src = "human.png";
        }
        else {
            img_alien1.src = "backgroundsound.png"; 
        }
    }
}