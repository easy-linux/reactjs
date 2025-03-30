import { useEffect, useMemo, useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./List.jsx";
import { PostsContextComponent } from "../context/postsContext.jsx";
import { useWindowWidth } from "../hooks/windowHooks.js";

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  const windowWidth = useWindowWidth()

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      setPosts(data);
    });
  }, []);

  const contextValue = useMemo(() => {
    return {
      label: "Posts",
      items: [...posts],
    };
  }, [posts]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <div>Window width: {windowWidth}</div>
      <PostsContextComponent value={contextValue}>
        <List />
      </PostsContextComponent>
    </>
  );
}

export default App;
