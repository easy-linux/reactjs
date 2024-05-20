import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useLoaderData, useParams } from "react-router";
import Post from "../components/Post.jsx";

export const Posts = () => {
    const {id} = useParams()
    const data = useLoaderData()
    
    const content = useMemo(() => {
        if(data){
            if(Array.isArray(data)){
                return data.map((post) => (
                    <Link to={`/posts/${post.id}`} key={post.id} className={'link'}>
                        <Post post={post} />
                    </Link>
                ))
            }
            return (
                <Post post={data} />
            )
        }
        return null
    }, [data])
    
    return (
        <div>
            {id && <div className="header">Post</div>}
            {!id && <div className="header">Posts</div>}
            <div>
                {content}
            </div>
        </div>
    );
};

export default Posts;
