import React from 'react';
import Receipts from './Receipts';
import postedSince from '../../../../../../../../logic/algorithms/postedSince';
import './conv.css';

function Conv({isMe, text, timeStamp, sent, recieved, viewed}) {
  if(!isMe) return(
    <div className="his-conv">
        <p className="text-content">
            {text}
        </p>
        <div className="time-viewed">
            <p className='time-stamp'>{postedSince(timeStamp)}</p>
            <Receipts sent={sent} recieved={recieved} viewed={viewed}/>
        </div>
    </div>
  );
  return (
    <div className="my-conv">
        <p className="text-content">
            {text}
        </p>
        <div className="time-viewed">
            <Receipts sent={sent} recieved={recieved} viewed={viewed}/>
            <p className='time-stamp'>{postedSince(timeStamp)}</p>
        </div>
    </div>
  )
};

Conv.defaultProps={
    isMe: false,
    text: "Heyy I hope you are good I just wanna talk about the post u posted recently",
    timeStamp: new Date(),
    send: true,
    recieved: true,
    viewed: true
}
export default Conv;