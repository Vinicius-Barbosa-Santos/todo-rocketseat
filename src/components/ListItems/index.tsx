// import Styles
import styles from './styles.module.css'

// import Phosphor
import { Trash } from '@phosphor-icons/react'

interface Props {
    item: ItemListType
}

const ListItems = ({ item }: Props) => {
    return (
        <div className={styles.listItems}>
            <input
                type='checkbox'
            />
            <div className={styles.item}>{item.item}</div>
            <Trash className={styles.trash} size={20} />
        </div>
    )
}

export default ListItems