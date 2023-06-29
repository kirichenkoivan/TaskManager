import React, {useState, useEffect, useLaoutEffect} from 'react'
import { TodoForm } from "./TodoForm";
import {v4 as uuid4} from 'uuid';
import { Todo } from "./Todo";
import { EditTodoForm } from "./EditTodoForm";
import { eel } from "../eel.js";
import axios from "axios";

uuid4();

export const ParallHeader = () => {

        useEffect(() =>{
            window.addEventListener("scroll", () =>{
            let scrollY = window.scrollY;
            document.documentElement.style.setProperty("--scrollTop", `${scrollY}px`);
            console.log(scrollY);
            })
        }, []);

    return(
        <div className="wrapper">
            <div className="container">
                <header className="main-header">
                    <div className="layers">
                        <div className="layer__header">
                            <div className="layers__caption">Ваш помощник</div>
                            <div className="layer__title">Заметки</div>
                        </div>
                        <div className="layer layers__base"></div>
                        <div className="layer layers__middle"></div>
                        <div className="layer layers__front"></div>
                    </div>
                </header>
            </div>
        </div>

    )
}