import React from 'react';
import './ToDoitem.css';

const ToDoItem  = props => {
    const resolvedClass = {                             // создаем класс для описания стилей 
        textDecoration : 'line-through'
    }
    return (                                            // создаем дивы с инпутами которые потом передаются в тудуайтем 
        <div className="todo-item"> 
            <div className="description-wrapper">      
                <p 
                    style={props.completed === true? resolvedClass :{}}
                >
                    {props.description}
                </p>  
            </div>    
            <div className="input-wrapper">
                <input 
                type="checkbox" 
                defaultChecked={props.completed}
                onChange={props.handleChange}        // вешаем обработчик событий
                />
            </div>
        </div>
    )                                                   // пропс дескриптион который прокидываем и пропс коплетед это уже выполненые дела 
}

export  default ToDoItem;



// по факту вышло двухкомпанентное приложение 
