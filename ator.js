//código do ator
let xAtor = 100;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(yAtor < 366){
      podeMover();
      yAtor += 3;
    } 
  }
}

function verificaColisao(){
  for(let i = 0; i < imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i],50,40,xAtor,yAtor,15);
    if(colisao){
      voltaPosisaoInicial();
      maiorQueZero();
      colidiu.play()
    }
  }
}
function voltaPosisaoInicial(){
   yAtor = 366;
}

function mostraPlacar(){
  text(meusPontos,100,27);
  fill(color(0,0,139));
  textSize(25);
}

function marcarPontos(){
  if(yAtor < 12){
    meusPontos += 1
    voltaPosisaoInicial();
    ponto.play();
  }
}

function maiorQueZero(){
  if(meusPontos > 0){
     meusPontos -= 1
  } 
}

function podeMover(){
  return yAtor < 366
}