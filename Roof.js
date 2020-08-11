class Roof{
    constructor(){
       var options ={
           isStatic:true
       }
       this.body = Bodies.rectangle(width/2, height/4,width/ 7,15,options);
       this.width = width/2;
       this.height = 15;
       World.add(world,this.body);
    };
    display(){
        push()
        var pos =this.body.position;
        translate(pos.x, pos.y)
        rectMode(CENTER);
        fill("yellow");
        rect(0, 0, this.width, this.height);
        pop()
      }
}