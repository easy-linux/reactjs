import { useEffect, useState } from "./EasyItReact";

function Counter(params) {
  const { id, children = "" } = params;
  const [count, setCount] = useState(0);

  const [text, setText] = useState("foo");

  useEffect(() => {
    console.log("effect", count, text);
    return () => {
      console.log("cleanup");
    };
  }, [count, text]);

  const eventHandler = (event, data) => {
    switch (event) {
      case "click": {
        setCount(count + 1);
        break;
      }
      case "type": {
        setText(data);
        break;
      }
    }
  };

  return {
    eventHandler,
    render: () => {
      console.log("render", { count, text });
      return `<div>
        <div><u>COUNTER</u> Count: ${count} Text: ${text} ${id ? `<input type="radio" name="texts" id="${id}" />` : ""}</div>
        ${children ? `<div>${children}</div>` : ""}
        <div>`;
    },
  };
}

export default Counter;
