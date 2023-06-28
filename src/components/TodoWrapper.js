import React, {useState, useEffect} from 'react'
import { TodoForm } from "./TodoForm";
import {v4 as uuid4} from 'uuid';
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import { eel } from "../eel.js";
import axios from "axios";
uuid4();

export const TodoWrapper = () => {
        const [todos, setTodos] = useState([{}])

        var tasks;
        var complete;
        var editing;

        const addTodo = todo => {
            var ids = uuid4();
            setTodos([...todos,{id:ids, task: todo, completed: false, isEditing: false}]);
            console.log(todos);
            console.log(ids);
            tasks = todo;
            eel.add_new_task(tasks, ids);
        }

        const loadTodo = todo => {
            setTodos([...todos,{id:uuid4(), task: todo, completed: false, isEditing: false}])
            console.log(todos);

        }

        const toggleComplete = id => {
            setTodos(todos.map(todo => todo.id == id ? {...todo, completed: !todo.completed}: todo))
        }

        const deleteTodo = id => {
            setTodos(todos.filter(todo => todo.id !== id));
            var bruh = id;
            console.log(bruh);
            eel.delete_task(bruh);
        }
        const editTodo = id => {
            setTodos(todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
        }
        useEffect(() =>{
    window.addEventListener("scroll", () =>{
        let scrollY = window.scrollY;
        document.documentElement.style.setProperty("--scrollTop", `${scrollY}`);
        console.log(scrollY);
    })
  }, [])
    return(
        <div className="TodoWrapper">

            <TodoForm addTodo={addTodo} loadTodo={loadTodo}/>
            {todos.map((todo, index) => (
                todos.isEditing ? (
                    <EditTodoForm />
                ) : (
                    <Todo task={todo} key={index}
                toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>
                )
            ))}

        </div>
    )
}