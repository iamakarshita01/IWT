const text= document.getElementById("text");

let fontSize= 10;
let isGrowing=true;

function Updatetext() {
    text.style.fontSize = fontSize + "pt" ;
    text.style.color = isGrowing ? "red" : "green" ;

    if(isGrowing){
        fontSize++;
        if ( fontSize >= 50 ){
            isGrowing=false;
            text.textContent="TEXT-SHRINK";
        }
    } 
    else{
            fontSize--;
            if(fontSize < 5)
            {
                clearInterval(interval);
            }
        }
    }

const interval= setInterval(Updatetext, 100);