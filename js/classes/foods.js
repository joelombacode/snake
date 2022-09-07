class Food {
    constructor (){
        this.size=SQUARE_SIZE;
    }
    setRandomPosition(){
        const maxSize=(GAME_SIZE/this.size)
        var x=Math.round(Math.random()*maxSize); 
        var y=Math.round(Math.random()*maxSize); 
       
        
        this.y= y >=maxSize?y-1:y;
        this.x= x >=maxSize?x-1:x;
        
             console.log(this.x,this.y)
    }
    draw(){
        ctx.fillStyle='yellow';
        ctx.fillRect(this.x*this.size, this.y*this.size, this.size,this.size)
    }
}