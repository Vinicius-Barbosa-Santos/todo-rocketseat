// import CSS Modules 
import { FormEvent, useState } from 'react'
import styles from './styles.module.css'

// import Phosphor
import { PlusCircle } from '@phosphor-icons/react'

interface Props {
    handleAddTask: (item: string) => void
}

const Input = ({ handleAddTask }: Props) => {
    const [newItem, setNewItem] = useState<string>('')

    const handleAddItem = (e : FormEvent) => {
        e.preventDefault()
        if (!newItem) return
        handleAddTask(newItem)
        setNewItem('')
    }

    return (
        <form className={styles.inputForm}>
            <input
                type='text'
                value={newItem}
                placeholder='Adicione uma nova tarefa'
                onChange={(e) => setNewItem(e.target.value)}
            />

            <button onClick={handleAddItem} type='submit'>
                Criar
                <PlusCircle size={20} />
            </button>
        </form>
    )
}

export default Input