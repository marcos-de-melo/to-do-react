import style from './InfoToDoList.module.css'

export function InfoToDoList({totalTasks,totalTasksComplit}){
    return(
        <>
        <div className={style.todoList}>
<p className={style.createdTasks}>Tarefas criadas <span>{totalTasks}</span></p>
<p className={style.completedTasks}>Concluidas <span>{totalTasksComplit} de {totalTasks}</span></p>
        </div>
        </>
    )
}