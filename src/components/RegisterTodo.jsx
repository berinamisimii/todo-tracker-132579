import { useRef, useState } from "react";

function RegisterTodo({ addTodo }) {
    const [title, setTitle] = useState("");
    const [userId, setUserId] = useState("");
    const [completed, setCompleted] = useState(false);
    const [pinned, setPinned] = useState(false);
    const [category, setCategory] = useState("Work");
    const [error, setError] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();

        if (title.trim() === "") {
            setError("title cannot be empty");
            return;
        }

        if (Number(userId) <= 0) {
            setError("userid must be greater than 0");
            return;
        }

        const newTodo = {
            id: Date.now(),
            title,
            userId: Number(userId),
            completed,
            pinned,
            category,
        };

        addTodo(newTodo);

        setTitle("");
        setUserId("");
        setCompleted(false);
        setPinned(false);
        setCategory("Work");
        setError("");

    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="yitle"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <input
                type="number"
                placeholder="user id"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
            />

            <label>
                Completed
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={(e) => setCompleted(e.target.checked)}
                />
            </label>

            <label>
                Pinned
                <input
                    type="checkbox"
                    checked={pinned}
                    onChange={(e) => setPinned(e.target.checked)}
                />
            </label>

            <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
                <option value="Study">Study</option>
            </select>

            <button type="submit">Register</button>

            {error && <p>{error}</p>}
        </form>
    );
}

export default RegisterTodo;