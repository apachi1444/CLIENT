const browser=(state={city: "posts", data: null}, action)=>{
    switch(action.type){
        case "browser":
            state=action.payload;
            return state;
        default:
            return state;
    }
}

export default browser;