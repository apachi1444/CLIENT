const post=(state=JSON.stringify(new FormData()), action)=>{
    switch(action.type){
        case "newpost":
            state=action.payload;
            return state;
        default:
            return state;
    }
}

export default post;