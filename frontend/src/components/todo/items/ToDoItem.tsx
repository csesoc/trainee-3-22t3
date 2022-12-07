import { useEffect, useRef, useState } from "react";
import "./ToDoItem.css"

type deleteTodoFunction = (todoId: number, event: any) => void;

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
                <div className = 'itemLeft'>   
                    <input type="checkbox" checked={todo.isDone} onChange={handleChecked}/>
                    <input className = 'textBox' style={{ opacity: startedTyping ? 1 : 0.7}} type="text" value={todo.desc} onChange={handleChange} />
                </div>
                  
                <div className = 'itemsRight'>   
                    <button className="delete-button" onClick={(event) => props.deleteTodo(props.todoId, event)}>
                        X
                    </button>
                </div>

            </div>
        </div>
    );

}

export default ToDoItem;