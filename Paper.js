class Paper {
    constructor(x, y) {
      var options = {
          isStatic: false,
          restitution: 0.3,
          friction: 0.5,
          density: 2
      }
      this.body = Bodies.circle(x, y, 15, options);
      
      World.add(world, this.body);
      
    }
    display(){

      fill("pink");
      ellipse(this.body.position.x, this.body.position.y, 30, 30);

    }
  }
  