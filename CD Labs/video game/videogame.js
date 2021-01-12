
let time = 0;
let xSpeed = 65;
let ySpeed = 140;
const img = document.getElementById("apple");

function convertPostitonToPixels(position){
    return position + "px";
}

function myFunc(){

    if(xSpeed*time < window.innerWidth){
        time++;
    }
    else{
        time = 0;
    }

    let xPosition = xSpeed*time;
    let yPosition = ySpeed*time - .5 * 9.8 * Math.pow(time, 2);

    //Invert arc to mimic the path a thrown ball makes 
    yPosition = window.innerHeight - yPosition; 

    img.style.left = convertPostitonToPixels(xPosition);
    img.style.top = convertPostitonToPixels(yPosition);

}


setInterval(myFunc, 250);