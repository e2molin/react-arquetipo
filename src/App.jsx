import React, { Fragment, useState, useRef, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { TodoList } from "./components/TodoList"

const KEY = 'todoApp.elementos';

export function App() {
    const [elementos, setElementos] = useState([{ id: 1, task: "Tarea 1", completed: false}]);

    /**
     * Comprobamos si al comienzo tenemos algo almacenado en el LocalStorage.
     * Si hay algo, serán nuestros elementos por defecto
     */
    useEffect(()=>{
        const storedElementos = JSON.parse(localStorage.getItem(KEY));
        if (storedElementos){
            setElementos(storedElementos);
        }
    },[]);

    /**
     * Para evitar que al refrescar la página perdamos los tareas almacenadas en nuestra lista
     * Lo que hacemos es que cada vez que renderizamos guardamos en el LocalStorage esta información
     */
    useEffect(()=>{
        localStorage.setItem(KEY, JSON.stringify(elementos));
    }, [elementos]);


    const toggleElemento= (id)=>{
        const newElementos = [...elementos]; // Con el spread operator es muy fácil hacer una copia rápida de todos los elementos.
        const elemento = newElementos.find((todo)=>todo.id===id); // Buscamos el elemento
        elemento.completed =! elemento.completed; // Como es un booleano, hacemos un toggled de su valor
        setElementos(newElementos); // Cambiamos el State
    };


    /**
     * Para leer el valor del input necesitamos asignarle un ref.
     * Antes importamos el hook useRef de React
     */    
    const todoTaskRef = useRef();
    const handleTodoAdd = ()=>{
        const taskNombre = todoTaskRef.current.value;
        if (taskNombre==='') return;
        /**
         * Para añadir la nueva tarea al array de tareas que tenemos llamamos al setElementos
         * setElementos es una función dentro del hook useState con la que podemos acceder al estado previo en este caso del array Elementos
         * Estamos manejando el array Elementos de manera inmutable, creando una nueva copia del array. Así React puede estar atenta a los cambios.
         * React funciona así. Si haces cambios en el estado, siempre tienes que hacer copia del anterior estado.
         * Un estado por tanto, no puede modificarse directamente, porque entonces React no va a detectar el cmbio y no podrá renderizar.
         */
        setElementos((prevElementos)=>{
            //Asignamos un id aleatorio. Podríamos manejarlo nosotros, pero usamos una librería que lo hace por nosotros.
            return [...prevElementos,{id: uuidv4(),task: taskNombre,completed:false}]
        })
  
        todoTaskRef.current.value=null;// Así después de añadir el nombre vaciamos el inputbox
    };

    const handleClearCompleted = ()=>{
        const newElementos = elementos.filter((elemento)=>!elemento.completed);
        setElementos(newElementos); // Cambiamos el State

    };

    return (
        /**
         * Los componentes tienen que renderizarse dentro de un componente padre
         * Antes se utilizaba un <div> para envolverlos, pero a la hora de aplicar estilos podría dar problemas
         * React utiliza ahora Fragment. Realmente es React.Fragment, pero podemos hacer un destructuring importándolo de React
         */
        <Fragment>
            <TodoList elementos={elementos} toggleElemento={toggleElemento}/>
            <input ref = {todoTaskRef} type="text" placeholder="Inserta tarea"/>
            <button onClick= { handleTodoAdd }>➕</button>
            <button onClick= { handleClearCompleted }>💩</button>
            <div>Te quedan {elementos.filter((elemento)=>!elemento.completed).length} por completar</div>
        </Fragment>
    );
}

