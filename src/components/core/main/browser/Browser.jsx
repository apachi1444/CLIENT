import React from 'react';
import Post from "./post/Post";
import "./browser.css";

function Browser() {
  return (
      <div className="browser">
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
          <Post/>
      </div>
  );
}

export default Browser;
