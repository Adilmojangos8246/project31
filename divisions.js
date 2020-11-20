class Division{
    constructor(x,y,width,hieght){
        var options = {
            isstatic : true
        }
        this.body = Bodies.rectangle(x,y,width,hieght,options);
        this.width = width;
        this.hieght = hieght;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        rectmode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.width,this.hieght);

    }
};