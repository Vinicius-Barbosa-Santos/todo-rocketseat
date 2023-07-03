// import Styles
import styles from './styles.module.css'

// import Phosphor
import { Trash } from '@phosphor-icons/react'

interface Props {
    item: ItemListType,
    handleChecked: (id: number) => void
}

const ListItems = ({ item, handleChecked }: Props) => {
    return (
        <div className={styles.listItems}>
            <input
                type='checkbox'
                onChange={() => handleChecked(item.id)}
            />
            <div 
                className={styles.item}
                style={{
                    color : item.checked ? 'var(--gray-300)' : 'var(--gray-100)',
                    textDecoration : item.checked ? 'line-through' : undefined
                }}
            >{item.item}</div>
            <Trash className={styles.trash} size={20} />
        </div>
    )
}

export default ListItems