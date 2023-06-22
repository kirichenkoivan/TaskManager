import React, {useState, useEffect} from 'react'
import { eel } from "../eel.js";

export const TodoForm = ({addTodo, loadTodo}) => {
        const [value, setValue] = useState("")

        const handleSubmit = e =>{
            e.preventDefault();
            addTodo(value);
            setValue("")
        }

        const promiseThen = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(eel.load_old_tasks()());
                }, 1);
        });

        const fetchTodo = e => {
           console.log(req);
           loadTodo(req);
        }

        var req;
        var ben;
        promiseThen
            .then((val) => {
            req = val;
        })

    return(
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input type="text" className="todo-input" value={value} placeholder="Какие дела на сегодня?" onChange={(e) => setValue(e.target.value)}/>
            <button type="submit" className="todo-btn">Добавить</button>
            <div>
                <button className="todo-load-btn" onClick={fetchTodo}>Загрузить последнюю заметку</button>
            </div>
         </form>
    )
}