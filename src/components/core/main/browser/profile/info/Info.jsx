import React, { useState } from 'react';
import Picture from '../../../../header/avatar/picture/Picture';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import "./info.css";

function Info({backImg, imgUrl, username, bio, mode}) {
    const [info, setInfo]=useState({ username, bio }); 
    const styles={
        backgroundImage: `url(${backImg})`,
        backgroundSize: 'cover'
    };
    const handleEdit=(field="")=>{
      if(field==="username") return (e)=>{
        setInfo({ username: e.target.value, bio });
      };
      return (e)=>{
        setInfo({ username, bio: e.target.value });
      }
    }
  return (
    <div style={styles} className="info-data">
        <div className="outer-info">
          <Picture width={"60px"} border={"2px solid pink"} imgUrl={imgUrl} auto={false}/>
          { mode &&
              <>
                <input type="file" className="change-picture" id="change-picture"/>
                <label htmlFor="change-picture"><AddAPhotoOutlinedIcon/></label>
              </>
          }
        </div>
        {mode ?
          <form action="post" className="change-pro-info">
            <textarea value={info.username} onChange={handleEdit("username")} name="edit" id="edit-username" 
              placeholder='New Username' className='edit-username' autoFocus>
            </textarea>
            <textarea value={info.bio} onChange={handleEdit()} className="edit-bio" name="edit" id="edit-bio" 
              placeholder='Editing Your Bio'>
            </textarea>
          </form>:
          <>
            <h3>{username}</h3>
            <p>{bio}</p>
          </>
        }
    </div>
  )
}
Info.defaultProps={
    backImg: "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704__340.jpg",
    imgUrl: "https://cdn.pixabay.com/photo/2018/04/27/03/50/portrait-3353699_960_720.jpg",
    username: "John Doe",
    bio: "A good house is a good thing to have in this life...",
    mode: false

}
export default Info