import clipboard from '../assets/Clipboard.png'
import style from './Clipboard.module.css'
export function Clipboard(){
    return(
        <>
                <div className={style.taksClear}>
                    <img src={clipboard} alt="" />
                    <p><b>Você ainda não tem tarefas cadastradas</b></p>
                    <p>Crie tarefas e organiza seus itens a fazer</p>
                </div>
        </>
    )
}