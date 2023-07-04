// import Components
import Header from "./components/Header"
import Content from "./components/Content"

// import CSS Modules
import './css/global.css'
import styles from './App.module.css'

// import React
import { useState } from "react"

const App = () => {
  const [tasks, setTask] = useState<number>(0)
  const [items, setItems] = useState<ItemListType[]>([])

  const handleChecked = (id: number) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
  }

  const handleDelete = (id: number) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)
    setTask(tasks - 1)
  }

  const handleAddTask = (item: string) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const newArrayList = { id, checked: false, item }
    const listItems = [...items, newArrayList]
    setItems(listItems)
    setTask(tasks + 1)
  }

  return (
    <div className={styles.container}>
      <header>
        <Header
          handleAddTask={handleAddTask}
        />
      </header>

      <main>
        <Content
          items={items}
          tasks={tasks}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  )
}

export default App