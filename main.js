var blueCar=document.getElementById("bluecar");
var raceCar=document.getElementById("racecar");

var jumpsound = document.getElementById("jumpsound")
var counter=0;






//bluecar move
blueCar.addEventListener("animationiteration",function(){
    var random =((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left=random + "px";
    counter++
    

})
//racecar move
window.addEventListener("keydown",function(e){
    if(e.keyCode == "39"){var raceCarLeft=parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
     if(raceCarLeft < 260){ raceCar.style.left=(raceCarLeft + 130) + "px"}
     jumpsound.play()
     
    };
    if(e.keyCode == "37"){var raceCarLeft=parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"))
     if(raceCarLeft > 0){ raceCar.style.left=(raceCarLeft - 130) + "px"}
     jumpsound.play()
     
    };

    


})
//gemeover
setInterval(function Gameover (){
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        if((blueCarLeft === raceCarLeft) && (blueCarTop > 250) && (blueCarTop < 450)){
            result.style.display = "block";
            game.style.display = "none";
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }
}, 10)