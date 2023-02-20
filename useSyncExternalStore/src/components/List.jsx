import React, { useEffect, useSyncExternalStore } from "react";
import storage from '../service/storage'
import Item from "./Item";

const List = () => {
    const {items, itemSelected} = useSyncExternalStore(storage.subscribe, storage.getState) //1

    return (
        <div>
            {items?.length ? items.map((item) => {
                return (<Item key={item.id} item={item} isSelected={itemSelected === item}/>)
            }) : null}
        </div>
    )
}

export default List