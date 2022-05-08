import { useEffect, useRef } from "react";

const useCickOutside=(handler)=>{
    let node=useRef(null);
    useEffect(()=>{
        let insideHandler=(e)=>{
            if(!node.current.contains(e.target)){
                handler();
            }
        };
        document.addEventListener("mousedown", insideHandler);
        return ()=>{
            document.removeEventListener("mousedown", insideHandler);
        }
    });
    return node;

}

export default useCickOutside;