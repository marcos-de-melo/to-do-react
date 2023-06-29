import style from './InfoToDoList.module.css'

export function InfoToDoList(){
    return(
        <>
        <div className={style.todoList}>
<p className={style.createdTasks}>Tarefas criadas <span>0</span></p>
<p className={style.completedTasks}>Concluidas <span>2 de 5</span></p>
        </div>
        </>
    )
}