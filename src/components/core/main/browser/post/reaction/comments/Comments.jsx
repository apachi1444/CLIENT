import React , { useState, useEffect } from 'react';
import Comment from './comment/Comment';
// import More from "./more/More";

import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import Tree from "../../../../../../../logic/classes/trees/BrowserTree";
import { v4 as uuid } from 'uuid';
import "./comments.css";

function Comments({tree}) {
    const [ input, setInput ]=useState("");
    const [ current, setCurrent ]=useState(tree);
    const [flag, setFlag]=useState(false);//this flag is used to set the state current properly
    const tree_t=tree;

    useEffect(() => {
        setCurrent(tree_t);
    }, [tree_t, flag]);
    const handleComment=()=>{
        if(input==="") return;
        const data={
            username: "Anonymous",
            comment: input,
            replies: 0,
            likes: { num: 0, alreradyDone: false },
            dislikes: { num: 0, alreradyDone: false },
            hearts: { num: 0, alreradyDone: false },
            stars: { num: 0, alreradyDone: false },
            time: Date.now()
        };
        tree_t.insertNodeEnd(data);
        setInput("");
        setFlag(!flag);
    };

    const handleInput=(e)=>{
        setInput(e.target.value);
        setFlag(!flag);
    };

    const move=(index)=>{
        return ()=>{
            tree_t.moveTo(index);
            setFlag(!flag);
        };
    };
    
    const handleUp=()=>{
        tree_t.moveUp();
        setFlag(!flag);
    };

    const rea=(index)=>{
            return (r)=>{
                return ()=>{
                    tree_t.increment(r, index);
                    setFlag(!flag);
                }
            };
    };

  return (
    <form className="comments" action='post'>
        { current && !current.isRoot()  &&
          <div className="go-back" onClick={handleUp}><KeyboardBackspaceOutlinedIcon/></div>
          }
        <div className="current-comment">
            { 
            current && current.getCurrent().root  &&
            <Comment content={current.getCurrent().root.comment} username={current.getCurrent().root.username} 
            comments={current.getLength()-1} hidden={current.isRoot()} rea={rea(-1)} key={uuid()}
            likes={current.getCurrent().root.likes} dislikes={current.getCurrent().root.dislikes} 
            stars={current.getCurrent().root.stars} hearts={current.getCurrent().root.hearts} 
            time={current.getCurrent().root.time}/>
            }
        </div>
        <div className="center-comments">
            { 
            current && current.getCurrent().children && 
            current.getCurrent().children.map((co, index)=><Comment content={co.content} 
            username={co.username} comments={co.replies} key={uuid()} callback={move(index)} 
            rea={rea(index)} likes={co.likes} dislikes={co.dislikes} hearts={co.hearts} 
            stars={co.stars} time={co.time}/>)
            }
            {/* <More/> we'll add it later on */}
        </div>
        <div className="input-field">
          <textarea placeholder='Comment...' id="comment-text" name="comment-text" className='comment-area' 
            onChange={handleInput} value={input} autoFocus></textarea>
          <label htmlFor='comment-text' className="send-comment" onClick={handleComment}>
              <SendOutlinedIcon/>
          </label>
        </div>
    </form>
  )
}

Comments.defaultProps={
    tree: new Tree()
}
export default Comments