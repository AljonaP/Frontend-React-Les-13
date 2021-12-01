import React from 'react';
import posts from "../data/posts.json"
import {NavLink} from "react-router-dom";
import {useParams} from 'react-router-dom'

const Overview = () => {
    const { blogId } = useParams()

    const currentPost = posts.find((postId) => {
        return postId.id === blogId;
        }
    )

    return (
        <div>
            <h1>Blog of user</h1>
            <h3>{currentPost.title}</h3>
            <h4>{currentPost.date}</h4>
            <p>{currentPost.content}</p>
        </div>
    );
};

export default Overview;


