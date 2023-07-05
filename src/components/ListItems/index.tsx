// import Styles
import styles from './styles.module.css'

// import Phosphor
import { Trash } from '@phosphor-icons/react'

interface Props {
    item: ItemListType,
    onHandleChecked: (id: number) => void,
    onHandleDelete: (id: number) => void
}

const ListItems = ({
    item,
    onHandleChecked,
    onHandleDelete
}: Props) => {
    return (
        <div className={styles.listItems}>
            <input
                type='checkbox'
                onChange={() => onHandleChecked(item.id)}
            />
            <div
                className={styles.item}
                style={{
                    color: item.checked ? 'var(--gray-300)' : 'var(--gray-100)',
                    textDecoration: item.checked ? 'line-through' : undefined
                }}
            >{item.item}</div>
            <Trash onClick={() => onHandleDelete(item.id)} className={styles.trash} size={18} />
        </div>
    )
}

export default ListItems