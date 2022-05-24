import { useContext } from 'react'
import TodoContext from '../store/context'
import styles from './TodoInput.module.css'


const TodoItem = () => {

    const contextItem = useContext(TodoContext)
    return (

        <div className={styles.goal}>
            {contextItem.item.map((el) => {
                return (
                    <ul key={el.id}>
                        <li>{el.text}</li>
                        <button onClick={() => contextItem.deleteTodoItem(el.id)}>X</button>
                    </ul>
                )
            })}
        
        </div>
    )}
    export default TodoItem