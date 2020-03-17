// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
    // Add state for the comments
    const [commentedPosted] = useState(props.comments);
    console.log(commentedPosted);
    console.log(Comment);
    return (
        <div>
            {/* map through the comments data and return the Comment component */}
            {commentedPosted.map((val, index) => (
                <Comment comments={val} key={index} />
            ))}
            <CommentInput />
        </div>
    );
};

export default CommentSection;
