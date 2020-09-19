import React, { Component } from 'react'

const Form = ({inputText, setInputText,todos, setTodos, setStatus}) => {

    const inputTextHandler = (event) => {
        setInputText(event.target.value)
    }
    
    const submitTodoHandler = e => {
        e.preventDefault()
        if (inputText == ""){
            return
        }
        else{
            setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}])
        }
        setInputText("")
    }

    const statusHandler = (e) => {
        setStatus(e.target.value)
    }

    

    return(
        <form>
            <input value = {inputText}  onChange={inputTextHandler} type="text" classNameName="todo-input" />
            <button onClick = {submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange = {statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="incompleted">Incompleted</option>
                </select>
            </div>
        </form>

    )
}

export default Form
