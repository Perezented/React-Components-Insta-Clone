// You will add code in this file
import React, { useState } from "react";
import CommentSection from "../CommentSection/CommentSectionContainer";
import LikeSection from "./LikeSection";
import PostHeader from "./PostHeader";

import "./Posts.css";

// pass props in this file to
const Post = post => {
    console.log(post);
    // set up state for the likes
    const [likes, likesChange] = useState(post.post.likes);
    const upLike = () => {
        likesChange(likes => likes + 1);
    };
    return (
        <div className="post-border">
            <PostHeader
                username={post.post.username}
                thumbnailUrl={post.post.thumbnailUrl}
            />
            <div className="post-image-wrapper">
                <img
                    alt="post thumbnail"
                    className="post-image"
                    src={post.post.imageUrl}
                />
            </div>
            <LikeSection upLike={upLike} likes={likes} />
            <CommentSection
                postId={post.post.imageUrl}
                comments={post.post.comments}
            />
        </div>
    );
};

export default Post;
