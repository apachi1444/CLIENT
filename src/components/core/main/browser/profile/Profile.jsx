import React from 'react';
import Info from './info/Info';
import Posts from './posts/Posts';
import './profile.css';

function Profile({ mode }) {
  return (
    <div className="profile">
        <Info mode={mode}/>
        <h4 className='all-posts'>All Posts(17)</h4>
        <Posts mode={mode}/>
    </div>
  )
}

Profile.defaultpProps={
  mode: false
}
export default Profile;