// Dichiarazione delle variabili globali all'inizio
let xMax;
let yMax;
let xFlower;
let yFlower;
let petalRotation = 0; // Variabile per la rotazione continua dei petali

function preload() {
  // non ho file esterni da caricare
}

function setup() {
  createCanvas(windowWidth, windowHeight); //funzione preimpostata
  console.log('p5.js version:', p5.VERSION);
  frameRate(30);
  angleMode(DEGREES);

const message =
    "This is a template repository\nfor the course Laboratorio di Computergrafica\nCommunication Design, Politecnico di Milano";
  textAlign(CENTER, CENTER);
  textSize(16);
  text(message, width / 2, height / 2);
  
// setup delle dimensioni e delle posizioni
  xMax = windowWidth;
  yMax = windowHeight;
  xButterfly = -50;
  yButterfly = yMax * 0.6;
  xFlower = xMax / 2;
  yFlower = yMax * 0.6;
}

//funzione essenziale per disegnare 
function draw() {
 background("#723ebe");

  drawFlower(xFlower, yFlower);
}

// funzione per disegnare i singoli petali 
function drawPetal(i, petalX, petalY, size) { 
  if (i % 2 == 0) {
    // petalo tipo 1 
   fill(255, 140, 180); 
    ellipse(petalX, petalY, size * 0.5, size * 2.2);
  } else if (i % 3 == 0) {
    // petalo tipo 2
    fill(255, 100, 150); 
    ellipse(petalX, petalY, size * 0.5, size * 2.2);
  } else {
    // petalo tipo 3
    fill(255, 200, 220); 
    ellipse(petalX, petalY, size * 0.5, size * 2.2);
  } 
}

// funzione per disegnare il fiore (margherita stilizzata)
function drawFlower(flowerX, flowerY) {
  push();
  translate(flowerX, flowerY);

  // stelo del fiore 
  stroke(50, 150, 50); 
  strokeWeight(4);
  line(0, 0, 0, 200);

  // foglia verde
  noStroke();
  fill(80, 200, 80);
  push();
  translate(0, 120);
  rotate(30);
  ellipse(25, 0, 40, 20);
  pop();

  noStroke();
 
  // petali che ruotano in loop
  push();
  rotate(petalRotation);

  // ciclo margherita
  for (let i = 0; i < 16; i++) {
    let angle = i * 22.5;
    push();
    rotate(angle);
    drawPetal(i, 0, 40, 22);
    pop();
  }

  // centro del fiore, fisso
  fill(255, 210, 50);
  ellipse(0, 0, 35, 35);
  pop();

// Aggiornamento continuo della variabile per rotazione continua
petalRotation = petalRotation + 1;
}

