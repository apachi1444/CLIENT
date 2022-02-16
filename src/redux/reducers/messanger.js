const messanger=(state={on: false, current: 'messages'}, action)=>{
    switch(action.type){
        case "messanger":
            state=action.payload;
            return state;
        default:
            return state;
    }
}

export default messanger;