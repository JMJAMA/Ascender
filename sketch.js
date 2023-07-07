let vid;
let playing = true;

let pg,pg1,pg2;

let slider,slider1,slider2,slider3;


function setup() {
  createCanvas(displayWidth, displayHeight);
  // noCanvas();
  
  vid = createVideo("paraglider.mov");
  vid.size(0, displayHeight);
  vid.volume(0);
  vid.loop();
  vid.hide(); // hides the html video loader
  // vid.position(0.0);

  pg = createGraphics(displayWidth,displayHeight);
  pg1 = createGraphics(displayWidth,displayHeight);
  pg2 = createGraphics(displayWidth,displayHeight);

  //gridX slider
  slider = createSlider(8, 24, 8);
  slider.position(10, 10);
  slider.style('width', '80px');
  slider.addClass("mySliders");

  //gridY slider
  slider1 = createSlider(4, 16, 6);
  slider1.position(10, 30);
  slider1.style('color', '#000000');
  slider1.style('width', '80px');
  slider1.addClass("mySliders");

  //opasity slider
  slider2 = createSlider(100, 255, 155);
  slider2.position(10, 50);
  slider2.style('color', '#000000');
  slider2.style('width', '80px');
  slider2.addClass("mySliders");

  //Line length slider
  slider3 = createSlider(0, 8, 50);
  slider3.position(10, 70);
  slider3.style('color', '#000000');
  slider3.style('width', '80px');
  slider3.addClass("mySliders");

}

function draw() {
  background(220);
  let img = vid.get();

  pg.image(img, 0, 0);
  image(pg,0,0);
  //image(img, 0, 0); // redraws the video frame by frame in                           p5
 
  
  
  boxes();
  linesBottom();
  linesTop();

  let vidSize = map(mouseX,0,width,0,200);
  let vidSizeY = map(mouseY,0,height,150,500);
  let vidWindowX = map(mouseX,0,width,350,width-(350-(vidSize/2)));
  let vidWindowY = map(mouseY,0,height,350,height-(450-(vidSize/2)));
  

  let sx = (948-100)-vidSize/4;
  let sy = 148+vidSizeY/2.6;
  let sw = 250;
  let sh = 325;

  let dx = (948-100)-vidSize;
  let dy = 285-vidSize;
  let dw = 350+(vidSize*1.5);
  let dh = 425+(vidSize*1.5);

  let al =map(mouseX,0,width,0,255);

 
 
 
  //copy(pg,sx,sy,sw,sh,dx,dy,dw,dh);
 
  
  

  
  
 

  
  //stroke(255);
  //rect(sx,sy,sw,sh);
  
}

// function keyPressed() {
//  vid.time(random(vid.duration())) 
// }

function boxes() {

  //grid to center the crosshairs

  let val = slider.value();
  let val1 = slider1.value();
  
   let tilesX = val;
  let tilesY = val1;
  
  let tileW = width/tilesX;
  let tileH = height/tilesY;
  
  

 
 
  
  noFill();
  stroke(255,0,0);
  
  for(let x = 0; x < tilesX; x ++){
    for(let y = 0; y < tilesY; y ++){
      
     //rect(x*tileW,y*tileH,tileW,tileH);
    
    }
  }

}


function linesBottom() {
  
 
 

}


function linesTop() {
  
  
  //number of crosshairs

  let val = slider.value();
  let val1 = slider1.value();
  let CtilesX = val;
  let CtilesY = val1;
  
  let CtileW = width/CtilesX;
  let CtileH = height/CtilesY;
  
 
  
  let x1 = CtileW;
  let y1 = CtileH;
 
  
  
 
 
  
  noFill();
  strokeWeight(2);
  stroke(255);

  translate(-CtileW,-CtileH);

  
  
  
  
  for(let x = 0; x < CtilesX+1; x ++){
    for(let y = 0; y < CtilesY+1; y ++){
      
      
      let cellCenter = dist(mouseX,mouseY,x*x1,y*y1)+120;
      let ccm = map(cellCenter,0,cellCenter,mouseX,mouseY);
      ellipseMode(CENTER);
      //ellipse(x*x1,y*y1,10,10);

      let cellLeft = dist(mouseX,mouseY,x*x1,y*y1);
      let cellTop = dist(mouseX,mouseY,x*x1,y*y1);
      let cellRight = dist(mouseX,mouseY,x*x1,y*y1);
      let cellBottom = dist(mouseX,mouseY,x*x1,y*y1);
      
      //line length
      let val3 = slider3.value();
      let lineL = (50-cellCenter/8.5)/1.4*val3;
      

      //line opacity
      let val2 = slider2.value();
      let lineOP = val2-(cellCenter/2);
      
      noStroke();
      fill(255,255,255,lineOP);
      //line(x*x1,y*y1,x*x1,y*y1-(cellBottom/30)*1.2);
      push();
      rectMode(CENTER);
      rect(CENTER);
      push();
      //horizontal line
      translate(CtileW/2+x*x1,y*y1);
      rect(0,0,lineL,1.5);
      pop();
      //vertical line
      push();
      translate(+CtileW+x*x1,+CtileH/2+y*y1);
      //rotate(radians(frameCount*0.5));
      rect(0,0,1.5,lineL);
      pop();
      //line(x*x1+-CtileH+(cellBottom/0),y*y1,x*x1,y*y1);
      pop();
      
      
      //ellipse(x*x1,y*y1,cellCenter/15,cellCenter/15);
     
    
    }
  }

}
