class Mango {
    constructor(x, y) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 30;
        this.height = 30;
        this.image = loadImage('images/mango.png');
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
        pop();
      }

}