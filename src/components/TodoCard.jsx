function TodoCard({ todo }) {

    return (

        <div className="todo-card">
            <p>ID: {todo.id}</p>
            <p>Title: {todo.title}</p>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
            <p>User ID: {todo.userId}</p>
            <p>Pinned: {todo.pinned ? "Yes" : "No"}</p>
            <p>Category: {todo.completed === true && <p>completed</p>}
                {
                    todo.pinned === true && <p>pinned</p>
                }
            }</p>
        </div>
    );
}



export default TodoCard;