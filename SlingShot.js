class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 10,
            length:0.1
        }
        this.sling=Constraint.create(options);
        
        this.pointB = pointB
            }
    attach(body){
        this.sling.bodyA = body;
    }
    
    fly(){
        this.sling.bodyA = null;
   }

    display(){
                //if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x, pointA.y, pointB.x, pointB.y);

            
           
            
    

    
    }
}