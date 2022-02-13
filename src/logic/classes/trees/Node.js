const Node=class grahpNode{
    constructor(data, id, family){
        this.data=data;
        this.right=null;
        this.left=null;
        this.parent=null;
        this.id=id;
        this.family=family;
    }

}

export default Node;