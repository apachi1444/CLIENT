import React from 'react';
import "./reviews.css";
import Review from './review/Review';

//for testing
const reviewers=[
    {
        pic: "https://i.insider.com/56e34aad52bcd022008b5fa5?width=1136&format=jpeg",
        name: "Drake",
        feedback: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        profession: 'Musicien/Rapper'
    }
]
function Reviews() {
    return (
        <div className="reviews">
            <Review image={reviewers[0].pic} name={reviewers[0].name} feedback={reviewers[0].feedback} profession={reviewers[0].profession}/>
            <Review image={reviewers[0].pic} name={reviewers[0].name} feedback={reviewers[0].feedback} profession={reviewers[0].profession}/>
            <Review image={reviewers[0].pic} name={reviewers[0].name} feedback={reviewers[0].feedback} profession={reviewers[0].profession}/>
            <Review image={reviewers[0].pic} name={reviewers[0].name} feedback={reviewers[0].feedback} profession={reviewers[0].profession}/>
            <Review image={reviewers[0].pic} name={reviewers[0].name} feedback={reviewers[0].feedback} profession={reviewers[0].profession}/>
            <Review image={reviewers[0].pic} name={reviewers[0].name} feedback={reviewers[0].feedback} profession={reviewers[0].profession}/>
            <Review image={reviewers[0].pic} name={reviewers[0].name} feedback={reviewers[0].feedback} profession={reviewers[0].profession}/>
            <Review image={reviewers[0].pic} name={reviewers[0].name} feedback={reviewers[0].feedback} profession={reviewers[0].profession}/>
        </div>
    )
}

export default Reviews
