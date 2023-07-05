// import CSS Modules
import styles from './styles.module.css'

// import Components
import Input from '../Input'

// import Assets
import logo from '../../assets/logo.svg'

interface Props {
    onHandleAddTask: (item: string) => void
}

const Header = ({ onHandleAddTask }: Props) => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerImage}>
                <img src={logo} alt="todo" />
            </div>

            <div className={styles.inputContainer}>
                <Input handleAddTask={onHandleAddTask} />
            </div>
        </div>
    )
}

export default Header