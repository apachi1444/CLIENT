import io from 'socket.io-client';

//This will point to the api later on
const endpoint="http://localhost:5000/";
const socket=io.connect(endpoint);
export default socket;