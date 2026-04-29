import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import "../src/components/TodoCard.jsx";
import TodoCard from "../src/components/TodoCard.jsx"
import RegisterTodo from "../src/components/RegisterTodo.jsx"

function App() {
    const [todo, setTodo] = useState([]);
    const [loading, setLoading] = useState();
    const [error, setError] = useState();

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos")

            .then((res) => res.json())

            .then((data) => {
                const updatedTodos = data.map((todo) => ({
                    ...todo,
                pinned: false,
                    category: "Work",
                }));
                setTodos(updatedTodos);
                setLoading(false);
            })
            .catch(() => {
                setError("Failed to fetch todos.");
                setLoading(false);
            });
    }, []);



    return(
        <div>
            <h1>Todo App</h1>
            <p>Total todos: {totalCount}</p>{loading && <p>Loading...</p>}
            {error && (
                <div>
                    {!loading &&
                        !error &&
                        todos.map((todo) => (
                            <TodoCard key={todo.id} todo={todo} />
                        <RegisterTodo addTodo={addTodo} />
            )}                    <p>{error}</p>
                    <button onClick={() => window.location.reload()}>
                        Retry
                    </button>
                </div>
            )}



        </div>
    )
}
export default App;

