import "./ToDoItem.css";

type deleteTodoFunction = (todoId: number, event: any) => void;

interface ToDoItemObject {
  todoId: number;
  todos: any;
  setTodos: any;
  deleteTodo: deleteTodoFunction;
}

const ToDoItem = (props: ToDoItemObject) => {
  let newTodos = [...props.todos];
  let todo = newTodos.find((item) => item.id === props.todoId);

  const handleChange = (e: any) => {
    todo.desc = e.target.value;
    props.setTodos(newTodos);
  };

  const handleChecked = () => {
    todo.isDone = !todo.isDone;
    props.setTodos(newTodos);
  };

  return (
    <div className="todoItem">
      <div className="item">
        <input type="checkbox" 
          checked={todo.isDone}
          onChange={handleChecked}
        />
        <input
          className="textBox"
          type="text"
          value={todo.desc}
          placeholder="Type your task here..."
          onChange={handleChange}
          style={{ 
            textDecorationLine: todo.isDone ? "line-through" : "none",
            pointerEvents: todo.isDone ? "none" : "initial"
          }}
          disabled={todo.isDone}
        />

        <button
          className="delete-button"
          onClick={(event) => props.deleteTodo(props.todoId, event)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default ToDoItem;
