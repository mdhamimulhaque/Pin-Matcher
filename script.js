// hide notify section
const notifyWrong = document.querySelector(".notify-wrong");
const notifySuccess = document.querySelector(".notify-success");
const notifyWarning = document.querySelector(".notify-warning");

notifyWrong.style.display = "none";
notifySuccess.style.display = "none";
notifyWarning.style.display = "none";


// random code generator
const generatorDisplayBox = document.querySelector("#generator-display-box");

const pinGeneratorButton = document.querySelector("#pin-generator-button");
pinGeneratorButton.addEventListener("click",function(){   
    let randomNumber = Math.round(1000 + Math.random()*9000);
    document.querySelector("#generator-display-box").value = randomNumber;
})


//pin match & notification 
const pinMatchButton = document.querySelector("#pin-match-button");
pinMatchButton.addEventListener("click",function(){
   
const generateValue = document.querySelector("#generator-display-box").value;
const pinTypeMatchBox = document.querySelector("#pinMatchBox").value;
document.querySelector("#pinMatchBox").value = "";


    if (generateValue === pinTypeMatchBox && pinTypeMatchBox != "") {
        notifySuccess.style.display = "block";
    }
     else{
        notifyWrong.style.display = "block";
        
        let num = 2;
        if(num < 1){
            document.querySelector("#try-count").innerHTML = "No try left";
        }else{
            document.querySelector("#try-count").innerHTML = num-- + " try left";
         
        }

        


    }
})






