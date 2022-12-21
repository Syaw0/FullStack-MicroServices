import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import getTodo from "./util/getTodo";
import postTodo from "./util/postTodo";

function App() {
  const [inpValue, setInpValue] = useState("");
  const [todos, setTodos] = useState<any>([]);

  useEffect(() => {
    (async function () {
      const result = await getTodo();
      setTodos(result);
    })();
  }, []);

  const controlInput = (e: ChangeEvent) => {
    setInpValue(e.currentTarget.value);
  };
  const addTodo = async () => {
    if (inpValue.trim() == "") {
      return;
    }
    const result = await postTodo(inpValue);
    setTodos(result);
    setInpValue("");
  };
  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input className="inp" value={inpValue} onChange={controlInput}></input>
        <button className="btn" onClick={addTodo}>
          add
        </button>
      </div>
      <div className="todo-holder">
        {todos.map((todo) => {
          return <p>{todo.name}</p>;
        })}
      </div>
    </div>
  );
}

export default App;
