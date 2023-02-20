import React, { useEffect } from "react";
import storage from "../service/storage";
import List from "./List";
import '../scss/style.scss'

const App = () => {
  useEffect(() => {
    const list = [...Array(100)].map((item, index) => {
      return {
        id: `item ${index}`,
        data: `data ${index}`,
      };
    });
    storage.addItems(list);
  }, []);

  return (
    <div className="list-container">
      <List />
    </div>
  );
};

export default App;
