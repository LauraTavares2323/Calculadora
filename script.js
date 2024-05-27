const display = document.getElementById("numeroinicial")

function appendCharacter(char){
    if(display.innerText == "0"){
        display.innerText = char;
    }else{
        display.innerText += char;
    }
}

function clearDisplay(){
    display.innerText = '0';
}

function calculateResult(){
    display.innerText = eval(display.innerText)
}