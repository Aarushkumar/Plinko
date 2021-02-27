class Plinko{
    constructor(x, y, r){
        var options = {
            isStatic : true
        }
        this.r = 10;

        this.body = Bodies.circles(x, y, this.r, options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        noStroke();
        fill("white");
        ellipse(0, 0, this,r, this,r)
    }
}