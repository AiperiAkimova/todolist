import React, { useContext } from 'react'
import styles from './TodoInput.module.css'
import TodoContext from '../store/context'



const TodoInput = () => {

const contextInput = useContext(TodoContext)

const [value, setValue] = React.useState("")


const handleSubmit = e => {
    e.preventDefault();
    const formItem = {
        id: Math.random().toString(),
        text: value
    }
    if(value === ""){
    return console.log("Please add something to-do")
    }
    {contextInput.createTodoItem(formItem)}
    setValue("")
    }

return (
<form onSubmit={handleSubmit}>
    <div className={styles.form}>
<input
type="text"
placeholder="Text"
value={value}
onChange={(e) => setValue(e.target.value)}
/>
<button onClick={handleSubmit}>Create</button>
</div>
</form>
)}


export default TodoInput