import Node from "./Node";

const BrowserTree=class TreeClass{
    constructor(){
        this.root=null;
        this.current=null;//helps us keep track of where we are
        this.currentTail=null;//helps us to insert data
        this.direction=true;//it directs us for insertion, true for right, false for left
        this.nodes=0; 
    }

    //Methods of the tree data structure:
    
    //get the current Node, we're moving on this tree remember!!
    getCurrent(){
        const response={ root: null, children: [] };
        const leftRight = this.direction ? "right": "left";
        if(this.current){
            let position=this.current[leftRight];
            response.root =  this.isRoot() ? null: this.current.data;
            while(position){
                response.children.push(position.data);
                position = position[leftRight]
            };
            if(this.isRoot()) response.children.unshift(this.current.data);
        };
        return response;
    };

    getLength(){
        let temp = this.current, len=0;
        while(temp){
            temp=(this.direction ? temp.right: temp.left);
            len++;
        };
        return len;
    };

    //Move the current to the next node
    moveStep(director=this.direction){
        const dir = director ? "right": "left";
        if(this.current)
            if(this.current[dir]){
                this.current=this.current[dir];
                this.currentTail=this.current;
            }
    }

    //Move to a specific position
    moveTo(index, isBase=this.isRoot()){
        const limit=isBase ? this.getLength(): this.getLength()-1;
        let position=0;
        if(index<0 || index>=limit) return;
        if(!isBase) index++;
        while(position++!==index) this.moveStep();
        this.direction=!this.direction;
        this.setTail();
        return this;
    }

    //Move the current up
    moveUp(){
        if(!this.current) return;
        if(this.current===this.root && !this.direction){
            this.direction=!this.direction;
            this.setTail();
            return;
        }
        if(this.current.parent){
            if(this.current.parent.id!==this.current.family){
                this.current=this.current.parent;
                this.moveUp();
            }else{
                this.direction=!this.direction;
                this.current=this.current.parent
            };
        }
        this.setTail();
        return this;
    }

    //inserting nodes to the graph to the end
    insertNodeEnd(data, direction=this.direction){
        const leftRight=direction ? "right": "left";
        if(this.root===null){
            this.currentTail=this.current=this.root=new Node(data, this.nodes, this.nodes);
            this.current.data.replies=0;
            return this;
        }
        if(this.currentTail[leftRight]){
            this.currentTail=this.currentTail[leftRight];
            this.insertNodeEnd(data, direction);
        }else{
            this.currentTail[leftRight]=new Node(data, ++this.nodes, this.current.id);
            this.currentTail[leftRight].parent=this.currentTail;
            this.currentTail=this.currentTail[leftRight];
            this.incrementParent();
        };
        return this;
    }

    //inserting nodes in the beginning
    insertNodeStart(data, direction=this.direction){
        const leftRight=direction ? "right": "left";
        if(this.root===null){
            this.currentTail=this.current=this.root=new Node(data, this.nodes, this.nodes);
            this.current.data.replies=0;
            return this;
        };
        if(this.isRoot()){
            this.current=new Node(data, ++this.nodes, this.nodes);
            this.current[leftRight]=this.root;
            this.root=this.current;
            this.current[leftRight].parent=this.current;
            return this;
        };
        if(this.current[leftRight]===null){
            this.current[leftRight]=new Node(data, ++this.nodes, this.nodes);
            this.current[leftRight].parent=this.current;
        }else{
            const temp=this.current[leftRight];
            this.current[leftRight]=new Node(data, ++this.nodes, this.nodes);
            this.current[leftRight][leftRight]=temp;
            this.current[leftRight][leftRight].parent=this.current[leftRight];
            this.current[leftRight].parent=this.current;
        };
        this.incrementParent();
        return this;
    }

    //checking if we are on root
    isRoot(){
        return this.root===this.current && this.direction;
    }

    //reseting the tail
    setTail(director=this.direction){
        const dir = director ? "right": "left";
        this.currentTail=this.current;
        if(this.currentTail) while(this.currentTail[dir]) this.currentTail=this.currentTail[dir];
    }

    increment(what, index){
        let pos=0, temp=this.current;
        if(!this.current) return;
        if(index===-1 && temp && !this.isRoot()){
            if(what==="replies"){
                this.current.data[what]++;
                return;
            }
            this.current.data[what].num+=(this.current.data[what].alreadyDone ? -1: 1);
            this.current.data[what].alreadyDone=!this.current.data[what].alreadyDone;
            return;
        };
        if(index<0 || index>=this.getLength()) return;
        if(!this.isRoot())index++;
        while(pos++!==index) this.moveStep();
        if(this.current) {
            if(what==="replies"){
                this.current.data[what]++;
            }else{
                this.current.data[what].num+=(this.current.data[what].alreadyDone ? -1: 1);
                this.current.data[what].alreadyDone=!this.current.data[what].alreadyDone;
            };
        };
        this.current=temp;
    }

    incrementParent(){
        if(this.isRoot()) return;
        this.current.data.replies++;
    }

}

export default BrowserTree;