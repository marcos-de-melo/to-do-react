import { useState } from 'react'
import style from './Task.module.css'
import { CheckCircle, Circle, Trash } from 'phosphor-react'

export function Task({ idtask, title, isComplit, onDeleteTask, onCheckComplitOrNotTask }) {

    const [iconWeight, setIconWeight] = useState('regular')
    const [iconWeightFill, setIconWeightFill] = useState('fill')
    const [iconColorChecked, setIconColorChecked] = useState('#4EA8DE')

    const handleMouseHover = () => {
        setIconWeight('duotone')
        setIconColorChecked('#1E6F9F')
    }
    const handleMouseLeave = () => {
        setIconWeight('regular')
        setIconColorChecked('#4EA8DE')
    }

    function handleDeleteTask() {
        console.log(`Deletei o ${idtask}`);
        onDeleteTask(idtask)
    }
    function handleCheckComplitOrNotTask() {
        onCheckComplitOrNotTask(idtask)
    }

    function checkedComplit(condicao) {
        if (condicao) {
            return <CheckCircle size={24} weight={iconWeightFill} color={iconColorChecked} />;
        } else {
            return <Circle size={24} weight={iconWeight} color={iconColorChecked} />;
        }
    }

    return (
        <>
            <div className={style.taskBox}>

                <button onClick={handleCheckComplitOrNotTask} onMouseOver={handleMouseHover} onMouseLeave={handleMouseLeave}>
                    {checkedComplit(isComplit)}
                </button>
                <p>{title}</p>
                <button onClick={handleDeleteTask}>
                    <Trash size={24} />
                </button>
            </div>
        </>
    )
}
