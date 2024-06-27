//Aqui vou criar a bolinha
let xBolinha = 300;
let yBolinha = 200;
let tambolinha = 25;
-
function setup(){
    //aqui vou criar minha "mesa"
    createCanvas(600,400);
}


function draw(){
    //aqui vou por cor da "mesa"
    background(148,0,211);

    criaBolinha(xBolinha, yBolinha, tambolinha)
}

//função bolinha
function criaBolinha(xBolinha, yBolinha, tambolinha){
    circle (xBolinha,yBolinha,tambolinha);
}