let t1 = 0; // Time variable used to control upper wing Perlin noise
let t2 = 100; // Time variable used to control below wing Perlin noise

function setup() {
  createCanvas(500, 500);
  background(251, 244, 236);
  noFill();
  stroke(42, 48, 72);
  strokeWeight(2);
}

function draw() {
  background(251, 244, 236); // Clear the background

  // Generates the offset value of perlin noise
  let wingAboveOffset = noise(t1) * 40; // Control the deviation of the upper wing
  let wingBelowOffset = noise(t2) * 40; // Control the deviation of the below wing


  t1 += 0.01;
  t2 += 0.015;

  // pigeon's head and chest
  noFill();
  stroke(42, 48, 72);
  strokeWeight(2);
  bezier(300, 180, 350, 148, 362, 138, 370, 120);
  bezier(370, 120, 392, 83, 429, 98, 440, 100);
  bezier(440, 100, 458, 99, 470, 110, 480, 109);
  bezier(480, 109, 447, 118, 440, 159, 440, 180);
  bezier(440, 180, 440, 280, 372, 328, 340, 340);

  // the wing above 
  bezier(20 - wingAboveOffset, 40, 160 - wingAboveOffset, 18, 323 - wingAboveOffset, 116, 372 - wingAboveOffset, 172);
  bezier(20 - wingAboveOffset, 40, 20 - wingAboveOffset, 60, 70 - wingAboveOffset, 69, 83 - wingAboveOffset, 80);
  bezier(83 - wingAboveOffset, 80, 0 - wingAboveOffset, 98, 28 - wingAboveOffset, 108, 100 - wingAboveOffset, 120);
  bezier(100 - wingAboveOffset, 120, 18 - wingAboveOffset, 141, 3 - wingAboveOffset, 160, 80 - wingAboveOffset, 160);
  bezier(80 - wingAboveOffset, 160, 52 - wingAboveOffset, 186, 90 - wingAboveOffset, 186, 100 - wingAboveOffset, 186);
  bezier(100 - wingAboveOffset, 186, 90 - wingAboveOffset, 186, 80 - wingAboveOffset, 218, 120 - wingAboveOffset, 230);
  bezier(120 - wingAboveOffset, 230, 138 - wingAboveOffset, 238, 182 - wingAboveOffset, 223, 190 - wingAboveOffset, 218);

  // the wing below 
  bezier(212 - wingBelowOffset, 276, 179 - wingBelowOffset, 313, 239 - wingBelowOffset, 264, 200 - wingBelowOffset, 305);
  bezier(194 - wingBelowOffset, 312, 152 - wingBelowOffset, 376, 239 - wingBelowOffset, 301, 192 - wingBelowOffset, 348);
  bezier(192 - wingBelowOffset, 348, 125 - wingBelowOffset, 438, 138 - wingBelowOffset, 442, 230 - wingBelowOffset, 370);
  bezier(230 - wingBelowOffset, 370, 145 - wingBelowOffset, 448, 190 - wingBelowOffset, 442, 220 - wingBelowOffset, 425);
  bezier(220 - wingBelowOffset, 425, 330 - wingBelowOffset, 371, 383 - wingBelowOffset, 298, 330 - wingBelowOffset, 220);
  bezier(330 - wingBelowOffset, 220, 318 - wingBelowOffset, 202, 281 - wingBelowOffset, 208, 300 - wingBelowOffset, 230);

  // tail
  bezier(230, 180, 209, 256, 20, 283, 7, 263);
  bezier(7, 263, 6, 303, 24, 322, 60, 296);
  bezier(60, 296, 24, 322, 10, 376, 100, 315);
  bezier(100, 315, 43, 369, 51, 408, 103, 343);
  bezier(103, 343, 82, 398, 95, 435, 176, 314);

  // leaf
  fill(26, 119, 75);
  stroke(26, 110, 75);
  strokeWeight(2);
  bezier(440, 46, 460, 100, 490, 96, 440, 46);
  bezier(479, 30, 452, 75, 479, 96, 479, 30);
  bezier(500, 40, 458, 80, 470, 100, 500, 40);
  bezier(497, 70, 443, 91, 485, 94, 498, 70);

  // leaves branch
  noFill();
  stroke(26, 119, 75);
  strokeWeight(1.5);
  bezier(468, 70, 472, 92, 468, 96, 462, 103);
  bezier(462, 121, 464, 136, 470, 138, 470, 158);

  // line-beak
  noFill();
  stroke(42, 48, 72);
  strokeWeight(2);
  line(446, 117, 480, 109);

  // circle-pupil
  fill(0);
  ellipse(425, 112, 5, 5);

  // loop-eye socket
  noFill();
  ellipse(425, 112, 12, 12);
}