import style from './Header.module.css'
import logo from '../assets/Logo.png'


export function Header(){

    


    return(
        <>
        <header className={style.header}>
            <img src={logo} alt="" />
            
        </header>
        </>
    )
}