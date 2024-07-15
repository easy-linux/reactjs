import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { Outlet, useLoaderData, useParams } from "react-router";
import Post from "../components/Post.jsx";

export const Posts = () => {
    const data = useLoaderData()
    
    const content = useMemo(() => {
        if(data){
            return data.map((post) => (
                <Link to={`/posts/${post.id}`} key={post.id} className={'link'}>
                    <Post post={post} />
                </Link>
            ))
        }
        return null
    }, [data])
    
    return (
        <div>
            <div className="header">Posts</div>
            <div>
                {content}
            </div>
            <Outlet />
        </div>
    );
};

export default Posts;
