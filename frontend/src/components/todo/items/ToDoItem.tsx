import { useEffect, useState } from "react";

type deleteTodoFunction = (todoId: number) => void;

interface ToDoItemObject {
    todoId: number,
    desc: string,
    deleteTodo: deleteTodoFunction,
    setCompleted: any
}

const ToDoItem = (props: ToDoItemObject) => {
    const [isDone, setIsDone] = useState(false);
    const [text, setText] = useState("");
    let todoClassName = isDone ? "todo-item-done" : "todo-item-not-done";

    useEffect(() => {
        setText(props.desc);
    }, [props.desc]);

    const handleChange = (e: any) => {
        setText(e.target.value);
    };

    useEffect(() =>{
        if (!isDone) {
            props.setCompleted((prevCount: number) => {
                if (prevCount !== 0) {
                    return prevCount - 1;
                }
      
                return prevCount;
            });
        }
      
        if (isDone) {
            props.setCompleted((prevCount: number) => prevCount + 1);
        }
        }, [isDone]);

    return (
        <div className = {"todo-item " + todoClassName}>
            <input type="checkbox" onChange={() => setIsDone(!isDone)} />
            <input type="text" value={text} onChange={handleChange} />
            <button className="delete-button" onClick={() => props.deleteTodo(props.todoId)}>
                X
            </button>
        </div>
    );

}

export default ToDoItem;