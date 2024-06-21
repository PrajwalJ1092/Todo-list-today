import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import List from "./list";

const Todo = () => {
  const [todolist, setTodoList] = useState([]);
  const inputRef = useRef();

  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      })
    );
  };

  useEffect(() => {
    console.log(todolist);
  }, [todolist]);

  return (
    <>
      <div className="dflex mt-14 ">
        <div className="container">
          <div className="container2">
            <h1>TODO LIST</h1>
          </div>
          <div className="inputcontainer">
            <input ref={inputRef} type="text" placeholder="Add Event" />
            <button onClick={add} className="but1">Add task +</button>
          </div>
          <div className="listcontainer">
            {todolist.map((item) => (
              <List
                key={item.id}
                text={item.text}
                id={item.id}
                isComplete={item.isComplete}
                deleteTodo={deleteTodo}
                toggle={toggle}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
