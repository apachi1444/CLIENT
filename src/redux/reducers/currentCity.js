const currentCity=(state={city: "Marrakech", data: null}, action)=>{
    switch(action.type){
        case "currentCity":
            state=action.payload;
            return state;
        default:
            return state;
    }
}

export default currentCity;