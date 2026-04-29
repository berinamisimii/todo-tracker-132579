import {useEffect, useState} from "react";
import "./App.css";
import "../src/components/TodoCard.jsx";
import todoCard from "./components/TodoCard.jsx";

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
            {loading && <p>Loading...</p>}
            {error && (
                <div>
                    {!loading &&
                        !error &&
                        todos.map((todo) => (
                            <TodoCard key={todo.id} todo={todo} />
                        ))}
                    <p>{error}</p>
                    <button onClick={() => window.location.reload()}>
                        Retry
                    </button>
                </div>
            )}



        </div>
    )
}
export default App;

