let Tool,radius,slider,slider1,colorPicker,button,button1,button2,text1,text2,col;
let pressed = true,eraser=false,pressed1=false;


function setup() { 
  let canvas = createCanvas(400, 400);
  canvas.parent('content');
  
  slider =createSlider(1,10,1,0.1);
  slider.position(400,36);
  slider1=createSlider(2,10,2,2);
  slider1.position(1080, 36);

  text1 = createP('Eraser size:');
  text1.position(1000, 20);
  text2 = createP('To erase everything press R.');
  text2.position(1220, 20);

  colorPicker = createColorPicker('#ed225d');
  colorPicker.position(340,30);
  

  Tool = new Tools();
  
  button  = new Buttons('Pencil',400,5);
  button1 = new Buttons('Spray',480,5);
  button2 = new Buttons('Eraser',1000,5);
  
  button.button.id('buton');

  radius=random(30);
  
  
  background(255);
  
}

function draw() {
  
  stroke(colorPicker.color());
  strokeWeight(slider.value());

  button.button.mousePressed (() => {pressed=true;eraser=false;pressed1=false;}); 
  button1.button.mousePressed(() => {pressed1=true;eraser=false;pressed=false;});
  button2.button.mousePressed(() => {eraser=true;pressed=false;pressed1=false});

    if(eraser && mouseIsPressed)
   {
     strokeWeight(slider1.value());
     stroke(255);
     fill(255);
     line(pmouseX,pmouseY,mouseX,mouseY); 
   }
  
    if(pressed && mouseIsPressed)
   { 
     Tool.Line();
   } 

    if(pressed1 && mouseIsPressed && button1.button.mousePressed())
   {
     Tool.Spray();
     fill(colorPicker.color());
   }

   if(keyIsDown(82))
      background(255);
}