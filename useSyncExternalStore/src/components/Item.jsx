import React, { useCallback, useEffect, useMemo, useSyncExternalStore } from "react";
import storage from "../service/storage";

const Item = ({ item, isSelected }) => {
  const onClick = useCallback(
    (e) => {
      if (e?.stopPropagation) {
        e.stopPropagation();
      }
      storage.setSelected(item);
    },
    [item]
  );

  const itemClasses = useMemo(() => {
      if(isSelected){
        return 'item selected'
      }
      return 'item'
  }, [isSelected])

  console.log(`render ${item.id}`);

  return (
    <div className={itemClasses} onClick={onClick}>
      <div>
        {item.id} {item.data}
      </div>
    </div>
  );
};

export default React.memo(Item);
