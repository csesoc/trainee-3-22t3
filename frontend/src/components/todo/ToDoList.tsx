import { useEffect, useState } from "react";
import TodoItem from "./items/ToDoItem";
import Draggable from "react-draggable";
import "./ToDoList.css";
import { reorder, reorderImmutable, reorderFromTo, reorderFromToImmutable } from 'react-reorder';

interface item {
    id: number,
    desc: string,
    isDone: boolean
}

function ToDoList() {
    const [todos, setTodos] = useState(Array<item>);

    useEffect(() => {
        setTodos([{ 
            id: Math.max(0, ...todos.map(item => item.id)) + 1, 
            desc: "Type your task here..",
            isDone: false
        }]);
    }, []);

    const addTodos = () => {
        let newTodos = [...todos];
        let todoObject = {
            id: Math.max(0, ...todos.map(item => item.id)) + 1,
            desc: "Type your task here..",
            isDone: false
        };
        newTodos.push(todoObject);
        setTodos(newTodos);
    };

    const deleteTodo = (todoId: number) => {
        let newTodos = todos.filter((item) => item.id !== todoId);
        setTodos(newTodos);
    };

    return (
        <Draggable>
            <div className='todoList'>
                <div className='todoContent' draggable="false">   
                    <h2>To-do List</h2>
                        <div className='todos'>   
                            {todos.map((item: item) => (
                            <TodoItem todoId={item.id} deleteTodo={deleteTodo} 
                                todos={todos} setTodos={setTodos} />
                            ))}
                        </div>
                </div>

                <div>   
                    <button className='add-button' onClick={addTodos}>
                        <div>   
                            + Add your tasks..
                        </div>
                    </button>
                </div>

                <p className='completed'>
                    Completed: {todos.filter(todo => todo.isDone).length} out of {todos.length}
                </p>
            </div>
        </Draggable>
    );
}

export default ToDoList;