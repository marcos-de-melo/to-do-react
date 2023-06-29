import { useState } from 'react'
import style from './Task.module.css'
import { Circle, Trash } from 'phosphor-react'

export function Task({idtask,title,isComplit}) {
    



    const [iconWeight, setIconWeight] = useState('regular')
    const [iconColorChecked, setIconColorChecked] = useState('#4EA8DE')

    const handleMouseHover = () => {
        setIconWeight('duotone')
        setIconColorChecked('#1E6F9F')
    }
    const handleMouseLeave = () => {
        setIconWeight('regular')
        setIconColorChecked('#4EA8DE')
    }
    return (
        <>
            <div className={style.taskBox}>

                <button onMouseOver={handleMouseHover} onMouseLeave={handleMouseLeave}>
                    <Circle size={24} weight={iconWeight} color={iconColorChecked} />
                </button>
                <p>id:{idtask} - {title} - Concluida: {isComplit}</p>
                <button>
                    <Trash size={24} />
                </button>
            </div>
        </>
    )
}
