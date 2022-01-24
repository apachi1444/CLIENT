const reducer=(state="home", action)=>{
    switch(action.type){
        case "pager":
            state=action.payload;
            return state;
        default:
            return state;
    }
}

export default reducer;