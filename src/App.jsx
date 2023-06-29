import style from './App.module.css'
import { Header } from './components/Header'
import { InfoToDoList } from './components/InfoTodoList'
import { TodoList } from './components/TodoList'



import './global.css'

function App() {


  return (
    <>
      <Header/>
      <main>
        <InfoToDoList/>
       <TodoList/> 

      </main>


      

    </>
  )
}

export default App
