import React from "react";
import { usePostText, usePostTitle } from "../context/postContext";

export const Item = React.memo(() => {
    const itemTitle = usePostTitle()
    const itemText = usePostText()
    return <div className="item">
        <h3>{itemTitle}</h3>
        <div>{itemText}</div>
    </div>
})

export default Item