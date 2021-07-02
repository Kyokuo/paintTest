class Tools{
     Line(){
      line(pmouseX,pmouseY,mouseX,mouseY);
    }
    
    Spray(){
      let a=random(TWO_PI);
      let radius=random(30);
      let x=sin(a)*radius+mouseX;
      let y=cos(a)*radius+mouseY;
      ellipse(x,y,3,3);
    }
  }
  