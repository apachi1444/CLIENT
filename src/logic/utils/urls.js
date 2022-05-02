// const testUrl = "http://localhost:5000/api/users/signup";
// const prodUrl="https://colocakesh.herokuapp.com/api/users/signup"

const getUrl=(isProduction=false, endpoint)=>{
    if(!isProduction) return `http://localhost:5000/${endpoint}`;
    return `https://colocakesh.herokuapp.com/${endpoint}`;
};

export default getUrl;