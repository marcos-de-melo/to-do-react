import style from './TodoList.module.css'

import { Clipboard } from './Clipboard.jsx'
import { Task } from './Task'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'



export function TodoList() {
    const [tasks, setTasks] = useState([


    ])



    const [newTask, setNewTask] = useState()

    function handleCreateNewTask() {
        event.preventDefault()

      
       const newTask1 = {
            id: uuidv4(),
            title: event.target.task.value,
            isComplit: false
        };

        setTasks([...tasks, newTask1])

        setNewTask('')

    }
    function handleNewTaskChange() {
        setNewTask(event.target.value)
    }

    return (
        <>
            <section className={style.todoList}>
                <form onSubmit={handleCreateNewTask}>

                    <input
                        onChange={handleNewTaskChange}
                        type="text"
                        name='task'
                        value={newTask}
                        placeholder='Adicione uma nova tarefa' />
                    <button type="submit">Criar <PlusCircle size={16} /></button>

                </form>

{(tasks.length === 0)?<Clipboard/>:''}



                {
                    tasks.map(task => {
                        return (
                            <Task key={task.id} idtask={task.id} title={task.title} isComplit={task.isComplit} />
                        )
                    })
                }


            </section>
        </>
    )
}