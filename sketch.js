function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(mouseY);
  fill(mouseX);
  textSize((mouseX/25)+25);
  textAlign("center");
  
  let palavra = "Movimento";
  let maximo = length;
  let minimo = 0;
  let quantidade = map(mouseX+20,0,width,1,palavra.length);
  let parte = palavra.substring(0, quantidade);
  text(parte, 200, (mouseX/5)+125);
}
