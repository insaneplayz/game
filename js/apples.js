class apple{
  constructor(x,y){
      var options = {
          isStatic:false
      }

      this.x=x;
      this.y=y;
      this.r=40
      this.image=loadImage("images/apple.png")
      this.body=Bodies.circle(this.x, this.y, this.r, options)
      World.add(world, this.body);
  }

  display()
  {
      var applePos=this.body.position;	
      push()
      translate(applePos.x, applePos.y);
      rotate(this.body.angle)
      fill(255,0,255)
      imageMode(CENTER);
      ellipseMode(CENTER);
      image(this.image, 0,0,this.r*2, this.r*2)
      pop()
}

  }
