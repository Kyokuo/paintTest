class Buttons{
    constructor(nume,x,y){
      this.x=x;
      this.y=y;
      this.nume = nume;
      this.button=createButton(nume);
      this.button.position(x,y);
    }
  }