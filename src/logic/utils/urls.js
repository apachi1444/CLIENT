
const isProduction=true;
const getUrl=(isProduction=false, endpoint)=>{
    if(!isProduction) return `http://localhost:5000/${endpoint}`;
    return `https://colocakesh.herokuapp.com/${endpoint}`;
};

export { getUrl, isProduction };