import React from "react";
import { usePostsData, usePostsLabel } from "../context/postsContext";
import { PostContextComponent } from "../context/postContext";
import Item from "./Item";

export const List = React.memo(() => {
    const listItems = usePostsData();
    const listLabel = usePostsLabel();

    return <div className="list">
        <h2>{listLabel}</h2>
        {listItems.map((item) => (
            <PostContextComponent value={item} key={item.id}>
              <Item />
            </PostContextComponent>
        ))}
    </div>
})

export default List