// import CSS Modules 
import styles from './styles.module.css'

// import Phosphor
import { PlusCircle } from '@phosphor-icons/react'

const Input = () => {
    return(
        <form onSubmit={(e) => e.preventDefault()} className={styles.inputForm}>
            <input 
                type='text'
                placeholder='Adicione uma nova tarefa'
            />

            <button type='submit'>
                Criar
                <PlusCircle size={20}/>
            </button>
        </form>
    )
} 

export default Input