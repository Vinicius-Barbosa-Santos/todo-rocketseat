// import CSS Modules
import styles from './styles.module.css'

// import Components
import Input from '../Input'

// import Assets
import logo from '../../assets/logo.svg'

interface Props {
    handleAddTask: (item: string) => void
}

const Header = ({ handleAddTask }: Props) => {
    return (
        <div className={styles.headerContainer}>
            <div className={styles.headerImage}>
                <img src={logo} alt="todo" />
            </div>

            <div className={styles.inputContainer}>
                <Input handleAddTask={handleAddTask} />
            </div>
        </div>
    )
}

export default Header