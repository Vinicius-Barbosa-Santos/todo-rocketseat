// import CSS Modules
import styles from './styles.module.css'

// import Components
import ListItems from '../ListItems'

// import Assets
import clipboard from '../../assets/clipboard.svg'

interface Props {
    items: ItemListType[],
    tasks: number,
    finishTasks: number,
    onHandleChecked: (id: number) => void,
    onHandleDelete: (id: number) => void
}

const Content = ({ 
        items, 
        tasks,
        finishTasks,
        onHandleChecked, 
        onHandleDelete 
    }: Props) => {
    return (
        <div className={styles.contentMain}>
            <div className={styles.contentTaskFlex}>
                <div className={styles.contentTask}>
                    <div className={styles.taskCreated}>
                        <span>Tarefas criadas</span>
                        <div className={styles.quantity}>{tasks}</div>
                    </div>

                    <div className={styles.finishTask}>
                        <span className={styles.spanFinish}>Concluídas</span>
                        <div className={styles.quantityOfTask}>{finishTasks} de {tasks}</div>
                    </div>
                </div>

                {items.length === 0 &&
                    <div className={styles.todoEmpty}>
                        <div className={styles.line} />

                        <div className={styles.todoEmptyImage}>
                            <img src={clipboard} alt="" />
                        </div>

                        <div className={styles.todoEmptyText}>
                            <span><strong>Você ainda não tem tarefas cadastradas</strong></span>
                            <span>Crie tarefas e organize seus itens a fazer</span>
                        </div>
                    </div>
                }

                {items.length > 0 &&
                    <div className={styles.items}>
                        {items.map((item) => (
                            <ListItems
                                key={item.id}
                                item={item}
                                onHandleChecked={onHandleChecked}
                                onHandleDelete={onHandleDelete}
                            />
                        ))}
                    </div>
                }
            </div>
        </div>
    )
}

export default Content