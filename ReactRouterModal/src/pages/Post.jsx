import React, { useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import { useLoaderData, useNavigate, useParams } from "react-router";
import Post from "../components/Post.jsx";
import css from './Post.module.scss'
import { appRoutes } from "@/routes/allRoutes.js";

export const PostPage = () => {
    const data = useLoaderData()
    const navigate = useNavigate()
    
    const content = useMemo(() => {
        if(data){
            return (
                <Post post={data} />
            )
        }
        return null
    }, [data])

    const onBackdropClick = useCallback(() => {
        navigate(appRoutes.Posts.index)
    }, [])
    
    return (
        <div className={css.modal}>
            <div className={css.backdrop} onClick={onBackdropClick}></div>
            <div className={css.content} onClick={(e) => e.stopPropagation()}>
                <div className="header">Post</div>
                <div>
                    {content}
                </div>
            </div>
        </div>
    );
};

export default PostPage;
