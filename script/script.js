const text = ['게임 플랫폼 개발을', '악마성 번역자를', '취직을', '백수를'];
let textNum = 0;

function changeText(){
    ++textNum;
    if(textNum === text.length){
    textNum = 0;
    } 
    document.getElementById('text').innerText = text[textNum];
}

setInterval(changeText, 2000);

/* ================================= */