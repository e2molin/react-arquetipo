import React from 'react'
import { TodoItem} from './TodoItem'

export function TodoList({elementos, toggleElemento}) {
    return (
        <ul>
            {elementos.map((elemento)=>(
                <TodoItem key={elemento.id} elemento={elemento} toggleElemento={toggleElemento}/>
            ))}
        </ul>
    )
}
