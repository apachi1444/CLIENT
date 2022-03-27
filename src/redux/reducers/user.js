const defaultUser={
    username: "John Doe",
    email: "johndoe123@gmail.com",
    isOnline: true,
    connections: 0,
    stars: 0,
    postsNumber: 0,
    bio: "Live As You Want And In The House You Want",
    theme: 1,
    mode: true//false for user mode, true for admin mode
};

const user=(state=defaultUser, action)=>{
    switch(action.type){
        case "user":
            return { ...state, ...action.payload };
        default:
            return state;
    }
}

export default user;