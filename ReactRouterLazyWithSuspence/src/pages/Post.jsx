import React, { useCallback, useMemo, Suspense } from "react";
import { useLoaderData, useNavigate, useParams, Await } from "react-router";
import Post from "../components/Post.jsx";
import css from "./Post.module.scss";
import { appRoutes } from "@/routes/allRoutes.js";
import Loader from "../components/Loader.jsx";

export const PostPage = () => {
  const { data } = useLoaderData();
  const navigate = useNavigate();

//   const content = useMemo(() => {
//     if (data) {
//       return <Post post={data} />;
//     }
//     return null;
//   }, [data]);

  const onBackdropClick = useCallback(() => {
    navigate(appRoutes.Posts.index);
  }, []);

  return (
    <div className={css.modal}>
      <div className={css.backdrop} onClick={onBackdropClick}></div>
      <div className={css.content} onClick={(e) => e.stopPropagation()}>
        <div className="header">Post</div>
        <div>
          <Suspense fallback={<Loader>Loading data</Loader>}>
            <Await resolve={data}>
              {(ResolvedData) => ( <Post post={ResolvedData} />)}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default PostPage;
