import style from './TodoList.module.css'
import { InfoToDoList } from './InfoTodoList'
import { Clipboard } from './Clipboard.jsx'
import { Task } from './Task'
import { PlusCircle } from 'phosphor-react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'



export function TodoList() {
    const [tasks, setTasks] = useState([

        {
            id: uuidv4(),
            title: "Nova tarefa",
            isComplit: true
        },
        {
            id: uuidv4(),
            title: "Nova tarefa 2",
            isComplit: false
        },
        {
            id: uuidv4(),
            title: "Nova tarefa 2",
            isComplit: false
        },
        {
            id: uuidv4(),
            title: "Nova tarefa 2",
            isComplit: false
        },
        {
            id: uuidv4(),
            title: "Nova tarefa 2",
            isComplit: true
        },
        {
            id: uuidv4(),
            title: "Nova tarefa 2",
            isComplit: true
        },
    ])


    const [newTask, setNewTask] = useState('')
    console.log(newTask);

    // const countCompletedTasks = () => {
    //     const completedTasks = tasks.filter(task => task.isComplit === true);
    //     return completedTasks.length;
    // }

    function countCompletedTasks() {
        const completedTasks = tasks.filter(task => task.isComplit === true);
        return completedTasks.length;
    }

    const [totalTasks, setTotalTesks] = useState(tasks.length)
    const [totalTasksComplit, setTotalTesksComplit] = useState(countCompletedTasks())

    function handleCreateNewTask() {
        event.preventDefault()

        setTasks([...tasks, {
            id: uuidv4(),
            title: event.target.task.value,
            isComplit: false
        }])

        setTotalTesks(tasks.length + 1)

        setNewTask('')

    }

    function handleNewTaskChange() {
        event.target.setCustomValidity("");
        setNewTask(event.target.value)
    }

    function deleteTask(taskToDelite) {
        const taskWithoutDeleteOne = tasks.filter(task => {
            return task.id !== taskToDelite;
        })
        setTasks(taskWithoutDeleteOne)
        setTotalTesks(tasks.length - 1)

        console.log(tasks.length);
        const completedTasks = tasks.filter(task => {
            return task.isComplit === true && task.id !== taskToDelite;
        })

        setTotalTesksComplit(completedTasks.length)

    }
    function checkComplitOrNotTask(taskToCheckOrNot) {

        const updatedTasks = tasks.map(task => {
            if (task.id === taskToCheckOrNot) {
                return { ...task, isComplit: !task.isComplit };
            }
            return task;
        });
        setTasks(updatedTasks);
       
        const completedTasks = tasks.filter(task => {
            return task.isComplit === true && task.id !== taskToCheckOrNot;
        })

        setTotalTesksComplit(completedTasks.length)
    }

    function handleNewTaskInvalid() {
        event.target.setCustomValidity("Este campo é obrigatório");
    }
    const isTaskEmpty = newTask.length === 0;




    return (
        <>
            <InfoToDoList totalTasks={totalTasks} totalTasksComplit={totalTasksComplit} />
            <section className={style.todoList}>
                <form onSubmit={handleCreateNewTask}>

                    <input
                        onChange={handleNewTaskChange}
                        type="text"
                        name='task'
                        value={newTask}
                        placeholder='Adicione uma nova tarefa'
                        onInvalid={handleNewTaskInvalid}
                        required
                    />
                    <button type="submit" disabled={isTaskEmpty}>Criar <PlusCircle size={16} /></button>

                </form>

                {(tasks.length === 0) ? <Clipboard /> : ''}



                {
                    tasks.map(task => {
                        return (
                            <Task
                                key={task.id}
                                idtask={task.id}
                                title={task.title}
                                isComplit={task.isComplit}
                                onDeleteTask={deleteTask}
                                onCheckComplitOrNotTask={checkComplitOrNotTask}
                            />

                        )
                    })
                }


            </section>
        </>
    )
}