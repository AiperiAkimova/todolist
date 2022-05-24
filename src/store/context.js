import { createContext } from "react";


 const TodoContext = createContext({createTodoItem: {}, deleteTodoItem: {}, item:[]})



export default TodoContext