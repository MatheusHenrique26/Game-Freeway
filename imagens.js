// imagens do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

// sons do jogo 

let trilhaSonora
let ponto
let colidiu

function preload(){
  imagemDaEstrada = loadImage("img/estrada.png");
  imagemDoAtor = loadImage("img/ator-1.png");
  imagemCarro = loadImage("img/carro-1.png");
  imagemCarro2 = loadImage("img/carro-2.png");
  imagemCarro3 = loadImage("img/carro-3.png");
  
  trilhaSonora = loadSound('sons/trilha.mp3');
  ponto = loadSound('sons/pontos.wav');
  colidiu = loadSound('sons/colidiu.mp3');
  
  imagemCarros = [imagemCarro,imagemCarro2,imagemCarro3,imagemCarro,imagemCarro2,imagemCarro3];
}




