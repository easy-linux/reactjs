import React, { useMemo, Suspense } from "react";
import { Link } from "react-router-dom";
import { Outlet, useLoaderData, useParams, Await } from "react-router";
import Post from "../components/Post.jsx";
import Loader from "../components/Loader.jsx";

export const Posts = () => {
  const { data } = useLoaderData();

  // const content = useMemo(() => {
  //     if(data){
  //         return data.map((post) => (
  //             <Link to={`/posts/${post.id}`} key={post.id} className={'link'}>
  //                 <Post post={post} />
  //             </Link>
  //         ))
  //     }
  //     return null
  // }, [data])

  return (
    <div>
      <div className="header">Posts</div>
      <div>
        <Suspense fallback={<Loader>Loading data</Loader>}>
          <Await resolve={data}>
            {(ResolvedData) => {
              return ResolvedData.map((post) => (
                <Link to={`/posts/${post.id}`} key={post.id} className={"link"}>
                  <Post post={post} />
                </Link>
              ));
            }}
          </Await>
        </Suspense>
      </div>
      <Outlet />
    </div>
  );
};

export default Posts;
