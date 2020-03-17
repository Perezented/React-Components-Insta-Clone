//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";
// import data

const PostsPage = () => {
    // console.log(dummyData);

    const [data] = useState(dummyData);
    // console.log(data);
    // set up state for your data
    return (
        <div className="posts-container-wrapper">
            {/* map through data here to return a Post and pass data as props to Post */}
            {data.map(p => (
                // console.log(p)

                <Post post={p} key={p.username} />
            ))}
        </div>
    );
};

export default PostsPage;
