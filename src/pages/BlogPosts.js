import React from 'react';
import posts from '../data/posts.json'
import {Link} from "react-router-dom";
import {NavLink} from "react-router-dom";

const BlogPosts = () => {

    return (
        <div>
            <h1>BlogPosts</h1>
            <h2>Aantal blogposts: {posts.length}</h2>
            <ul>
                {posts.map((overview) => {
                    return <li key={overview.id}>
                        <Link to={`/blogposts/${overview.id}`}>
                            {overview.title}
                        </Link>
                    </li>
                })}
            </ul>
        </div>
    );
};

export default BlogPosts;