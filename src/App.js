import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [todoId, setTodoId] = useState(1);
  const [todo, setTodo] = useState("");
  const [loading, setLoading] = useState(false);

  function getNewTodo() {
    setTodoId((todoId) => (todoId === 20 ? 1 : todoId + 1));
  }

  useEffect(() => {
    async function fetchTodo() {
      const url = `${process.env.REACT_APP_TODO_BASE_URL}/${todoId}`;
      try {
        setLoading(true);
        const todo = await fetch(url).then((res) => res.json());
        setTodo(todo.title);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
    fetchTodo();
  }, [todoId]);

  return (
    <div className="App">
      <p>
        <button onClick={getNewTodo}> Get another todo </button>
      </p>
      <p>{loading ? "Loading..." : todo}</p>
    </div>
  );
}

export default App;
