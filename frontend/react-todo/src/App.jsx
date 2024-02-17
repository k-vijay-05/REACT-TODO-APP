import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './Components/Createtodo'
import { Todos } from './Components/Todos'


function App() {
  const [todos, settodos] = useState([]);

  return (
  <div>
     <CreateTodo></CreateTodo>
     {/* <Todos></Todos> */}
  </div>  
  )
}

export default App
