import { useEffect, useRef, useState } from "react";
import TodoItem from "./items/ToDoItem";
import "./ToDoList.css";
import Header from "../header/Header";
import { useRecoilValue } from "recoil";
import { navbarButtonState } from "../../recoil_state";

interface item {
  id: number;
  desc: string;
  isDone: boolean;
}

function ToDoList() {
  const [todos, setTodos] = useState(Array<item>);
  const divRef = useRef<HTMLDivElement>(null);

  const todolistState = useRecoilValue(navbarButtonState)["todolist"];

  useEffect(() => {
    setTodos([
      {
        id: Math.max(0, ...todos.map((item) => item.id)) + 1,
        desc: "",
        isDone: false,
      },
    ]);
  }, []);

  const addTodos = () => {
    let newTodos = [...todos];
    let todoObject = {
      id: Math.max(0, ...todos.map((item) => item.id)) + 1,
      desc: "",
      isDone: false,
    };
    newTodos.push(todoObject);
    setTodos(newTodos);
  };

  const deleteTodo = (todoId: number, event: any) => {
    let newTodos = [];

    for (const todo of todos) {
      if (todo.id !== todoId) {
        newTodos.push(todo);
      }
    }
    setTodos(newTodos);
  };

  return todolistState ? (
    <div className="todoList" ref={divRef}>
      <Header heading="To-do List" name="todolist" ref={divRef} />

      <div className="todos">
        {todos.map((item: item) => (
          <TodoItem
            todoId={item.id}
            deleteTodo={deleteTodo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>

      <div>
        <button className="add-button" onClick={addTodos}>
          <div>+ Add your tasks..</div>
        </button>

        <div className="completed">
          <p>
            Completed: {todos.filter((todo) => todo.isDone).length} out of{" "}
            {todos.length}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default ToDoList;
