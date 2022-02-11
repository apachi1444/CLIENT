const defaultUser={
    username: "John Doe",
    email: "johndoe123@gmail.com",
    isOnline: false,
    connections: 0,
    stars: 0,
    postsNumber: 0,
    bio: "Live As You Want And In The House You Want"
};
const user=(state=defaultUser, action)=>{
    switch(action.type){
        case "userData":
            Object.keys(action.payload).map(key=>{
                state[key]=action.payload[key];
            });
            return state;
        default:
            return state;
    }
}

export default user;