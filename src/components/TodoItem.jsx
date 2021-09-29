import React from 'react'

export function TodoItem({elemento, toggleElemento}) {
    const {id, task, completed} = elemento;

    const handleElementoClick = () =>{
        toggleElemento(id);
    };

    return (
        <li>
            <input type="checkbox" checked={completed} onChange ={handleElementoClick} />
            {task}
        </li>
    )
}
