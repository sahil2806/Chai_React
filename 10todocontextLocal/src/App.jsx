import {useState,useEffect} from 'react'
import './App.css'
import { TodoProvider } from './Contexts/TodoContext'
import TodoForm from './components/TodoForm';
import Todoitem from './components/Todoitem';
 


function App() {

const [todos,setTodos]  = useState([]);

const addTodo = (todo) =>{
  setTodos((prevTodos) =>[...prevTodos , {id:Date.now() ,completed:"false" , ...todo }])
}

const updateTodo = (todo ,id) =>{
    setTodos((prev) => prev.map((prevTodo) =>{
        if(prevTodo.id===id){
          return todo;
        }
        return prevTodo;
    }))
}

const deleteTodo = (id) =>{
    setTodos((prev) =>prev.filter((todo) => (todo.id !==id)))
}

const toggleComplete = (id) => {
  setTodos((prev) => prev.map((prevtodo) => {
      if (prevtodo.id === id) {
          return {...prevtodo ,completed:! prevtodo.completed  };
      } else {
          return prevtodo;
      }
  }));
};


  return (
    <TodoProvider value={{ todos,addTodo,deleteTodo,updateTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}
            <TodoForm/>
             
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}

            {todos.map((todo) => (
                <div key={todo.id}
                className='w-full'
                >
                
                  <Todoitem todo={todo} />
                </div>
            ))} 

          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
