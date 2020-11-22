class String
{
    constructor(bodyA, pointB)
    {
        var options = {
            bodyA: bodyA,
           pointB: pointB,
            stiffness: 0.5,
            length: 10
        }

        this.string = Constraint.create(options);
        this.pointB = pointB;  
        World.add(world, this.string);
    }

    display()
    {
        var pointA = this.string.bodyA.body.position;
        var pointB = this.pointB;
        strokeWeight(5);
        stroke(0,0,0);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}