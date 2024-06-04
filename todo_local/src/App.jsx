import { useState } from "react";
import "./App.css";

function App() {
  const data = JSON.parse(localStorage.getItem("TodoList"));
  const [todoList, setTodoList] = useState(data ? data : []);
  const desc = todoList.sort((a, b) => a - b);
  console.log(desc);
  const [todo, setTodo] = useState("");
  const [flag, setFlag] = useState(true);

  const handleClick = () => {
    if (todo === "") {
      alert("please enter something");
    } else {
      setTodoList((prev) => {
        const arr = [...prev, todo];
        localStorage.setItem("TodoList", JSON.stringify(arr));
        return arr;
      });

      setTodo("");
    }
  };

  const handleAscOrder = () => {
    todoList.sort();
    setFlag(!flag);
  };
  const handleDescOrder = () => {
    todoList.sort().reverse();
    setFlag(!flag);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={handleClick}>Add Todo</button>
      </div>
      <div>
        {flag ? (
          <button onClick={handleAscOrder}>Asc</button>
        ) : (
          <button onClick={handleDescOrder}>Desc</button>
        )}
      </div>
      <div>
        <ul>
          {todoList.map((currTodo, idx) => {
            return <li key={idx}>{currTodo}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
