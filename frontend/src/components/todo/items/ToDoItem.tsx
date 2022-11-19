import { useEffect, useState } from "react";
import "./ToDoItem.css"
import "react-reod"

type deleteTodoFunction = (todoId: number) => void;

interface ToDoItemObject {
    todoId: number,
    todos: any,
    setTodos: any,
    deleteTodo: deleteTodoFunction,
}

const ToDoItem = (props: ToDoItemObject) => {
    let newTodos = [...props.todos];
    let todo = newTodos.find(item => item.id === props.todoId);
    const [startedTyping, setStartedTyping] = useState(false);

    const handleChange = (e: any) => {
        todo.desc = e.target.value;
        props.setTodos(newTodos);
        if (startedTyping === false) {
            setStartedTyping(true);
        }
    };

    const handleChecked = () => {
        todo.isDone = !todo.isDone;
        props.setTodos(newTodos);
    };

    return (
        <div className = 'todoItem'>
            <div className = 'item'>
                <input type="checkbox" onChange={handleChecked}/>
                <input className = 'textBox' style={{ opacity: startedTyping ? 1 : 0.7}} type="text" value={todo.desc} onChange={handleChange} />
                <button className="delete-button" onClick={() => props.deleteTodo(props.todoId)}>
                    X
                </button>
            </div>
        </div>
    );

}

export default ToDoItem;