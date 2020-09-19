import React, {useState,useEffect} from 'react';
import './App.css';
import Form from "./components/Form"
import TodoList from "./components/TodoList"

function App() {
  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status,setStatus] = useState("all")
  const [selectedTodos,setSelectedTodos] = useState([])


  useEffect(() => {
    getLocalTodos()
  }, [] )

  useEffect(() =>{
    selectHandler()
    saveLocalTodos()
  },[todos,status])

  const selectHandler = () => {
    switch(status){
      case "completed":
        setSelectedTodos(todos.filter((todo) => todo.completed === true ))
        break
      case "incompleted":
        setSelectedTodos(todos.filter((todo) => todo.completed === false ))
        break
      default:
        setSelectedTodos(todos)
        break
    }
  }

const saveLocalTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos))
}

const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]))
    }
    else {
        let todoLocal = JSON.parse(localStorage.getItem("todos"))
        setTodos(todoLocal)
    }
}
  return (
    <div className="App">
      <header>
        <h1> My Todo List </h1>
      </header>

      <Form 
      inputText = {inputText}
      setInputText = {setInputText}
      todos = {todos}
      setTodos = {setTodos} 
      setStatus={setStatus}
      />

      <TodoList 
      setTodos={setTodos} 
      todos={todos}
      selectedTodos={selectedTodos}
      />

    </div>
  );
}

export default App;
