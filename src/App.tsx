// import Components
import Header from "./components/Header"
import Content from "./components/Content"

// import CSS Modules
import './css/global.css'
import styles from './App.module.css'

// import React
import { useState } from "react"

const App = () => {
  const [tasks, setTasks] = useState<number>(0)
  const [tasksFinish, setTasksFinish] = useState<number>(0)
  const [items, setItems] = useState<ItemListType[]>([])

  const handleCheckedItemIsTrue = (listItemsChecked: number) => {
    setTasksFinish(listItemsChecked)
  }

  const handleChecked = (id: number) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item)
    setItems(listItems)
    
    const listItemsChecked = listItems.filter((item) => item.checked)
    handleCheckedItemIsTrue(listItemsChecked.length)
  }

  const handleDelete = (id: number) => {
    const listItems = items.filter((item) => item.id !== id)
    setItems(listItems)

    setTasks(tasks - 1)

    const listItemsChecked = listItems.filter((item) => item.checked)
    handleCheckedItemIsTrue(listItemsChecked.length)
  }

  const handleAddTask = (item: string) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const newArrayList = { id, checked: false, item }
    const listItems = [...items, newArrayList]
    setItems(listItems)

    setTasks(tasks + 1)
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
          tasksFinish={tasksFinish}
          handleChecked={handleChecked}
          handleDelete={handleDelete}
        />
      </main>
    </div>
  )
}

export default App