class Snake{
    constructor(size){
        this.x=0;
        this.y=0;
        this.oldX=0;
        this.oldY=0;
        this.size=size;
        this.blockSize=size;
        this.blocks=[]
        this.addBlock(this.x,this.y);
        console.log(this.blocks)
    }
    addBlock(x,y){
        const block= new Block(x,y,this.blockSize);
        this.blocks.push(block);
    }
    moveHead(){
        const head= this.blocks[0];
        this
        switch(currentDirection){
            case 'left':
                head.x -=1;
                break;
            case 'right':
                head.x +=1;
                break;
            case 'up' :
                head.y -=1;
                break;
            case 'down' :
                head.y +=1;

                break;
                default :
                break;
        }
        
        head.debordement()
    }
    moveBody(){
        const head1=this.block[1]
        this.moveHead()
        
        
        
    }
    addSnake(){
        let {x,y} = this.blocks[(this.blocks.length)-1];
        
        switch(currentDirection){
            case 'left':
                x +=1;
                break;
            case 'right':
                x -=1;
                break;
            case 'up' :
                y +=1;
                break;
            case 'down' :
                y -=1;
                break;
             default :
                break;

               
        }
        return {x,y}
       
    }
    eat(){
        const head= this.blocks[0];
        if (head.x==food.x && head.y==food.y){
            food.setRandomPosition();
            const {x,y}=this.addSnake();
            this.addBlock(x,y)
           
    }
    }
    update(){
        for(const block of this.blocks){
            block.draw()
        }
        this.moveHead();
        this.eat();
    }
}