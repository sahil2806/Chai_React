/* eslint-disable no-unused-vars */
import React from 'react'
import {useContext , createContext} from 'react'


export const TodoContext = createContext({
    todo : [
        // {
        //     id:1,
        //     todo:"React js",
        //     completed :false,
        // } 
    ],
    addTodo : (todo) =>{},
    updateTodo : (id,todo) => {},
    deleteTodo : (id) =>{},
    toggleComplete :(id) =>{}
})

export const TodoProvider = TodoContext.Provider

export const useTodo =  () =>{
    return  useContext(TodoContext)
}

