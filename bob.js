class Bob {
    constructor(x,y){

        var options ={
            restitution: 0.6,
            density: 1,
            friction: 2
        }
        this.body = Bodies.circle(x,y,35,options);
        this.radius = 35;
        
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        rotate(angle);
        strokeWeight(2);
        stroke("black");
        fill("blue");
        circle(0,0,this.radius);
        pop();
    }
}