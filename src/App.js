import './App.css';
import { useState } from 'react';
import TodoInput from './components/ToDoInput';
import TodoItem from './components/ToDoItem';
import TodoContext from './store/context';

    


  function App() {

    const [todoItems, setTodoItems] = useState([])
      const createTodoItem = (formItem) => {
        setTodoItems((prevState) => {
          return [...prevState, formItem]
        });
        };


        const deleteTodoItem = (id) => {
          const filteredItem = todoItems.filter((el) => {
            if(el.id !== id){
              return [el]
              
            }
          }) 
          setTodoItems(filteredItem)
          }

    return (
      <TodoContext.Provider value={{createTodoItem: createTodoItem, 
      deleteTodoItem: deleteTodoItem, item: todoItems}}>
      <TodoInput />
        
      <TodoItem />
  
      </TodoContext.Provider>
      );
    }

export default App;