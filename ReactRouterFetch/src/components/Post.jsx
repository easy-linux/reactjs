import React from 'react'

const Post = ({ post }) => {
    return (
        <article className={'block'}>
            <h1>{post.title}</h1>
            <div>
                {post.body}
            </div>
        </article>)
}
export default Post
