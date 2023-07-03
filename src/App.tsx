// import Components
import Header from "./components/Header"
import Content from "./components/Content"

// import CSS Modules
import './css/global.css'
import styles from './App.module.css'
import { useState } from "react"

const App = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    },
    {
      id: 2,
      checked: false,
      item: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    },
    {
      id: 3,
      checked: false,
      item: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    },
    {
      id: 4,
      checked: false,
      item: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    },
    {
      id: 5,
      checked: false,
      item: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.'
    },
  ])

  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>

      <main>
        <Content 
          items={items}  
        />
      </main>
    </div>
  )
}

export default App