import { useEffect, useState } from "react";
import TodoItem from "./items/ToDoItem";
import Draggable from "react-draggable"

interface item {
    id: number,
    desc: string,
}

function ToDoList() {
    const [todos, setTodos] = useState(Array<item>);
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        setTodos([
          { id: Math.max(0, ...todos.map(item => item.id)) + 1, desc: "watch asheeeeesh" },
        ]);
    }, []);

    const deleteTodo = (todoId: number) => {
        let newTodos = todos.filter((item) => item.id !== todoId);
        setTodos(newTodos);
        if (completed !== 0) {
            setCompleted(completed - 1);
        }
    };

    const handleClick = () => {
        let newTodos = [...todos];

        let todoObject = {
            id: Math.max(0, ...todos.map(item => item.id)) + 1,
            desc: "Default todo",
        };

        newTodos.push(todoObject);
        setTodos(newTodos);
    };

    return (
        <Draggable>
            <div>
                {todos.map((item: item) => (
                    <TodoItem todoId={item.id} desc={item.desc} deleteTodo={deleteTodo} 
                    setCompleted = {setCompleted} />
                ))}
        
                <button onClick={handleClick}>+</button>

                <p>
                    completed: {completed} out of {todos.length}
                </p>
            </div>
        </Draggable>
    );
}

export default ToDoList;