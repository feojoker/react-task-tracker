import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Waking up!',
      day: 'Everyday',
      reminder: true,
    },
    {
      id: 2,
      text: 'Take shower',
      day: 'Everyday',
      reminder: false,
    },
    {
      id: 3,
      text: 'Make breakfast',
      day: 'Everyday',
      reminder: true,
    },
  ])

  // Add Task

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }


  // Delete task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('delete', id)
  }


  // Toggle Reminder

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder } : task))
    console.log(id)
  }

  return (
    <div className="container">
      <Header title='Task Tracker'
        onShow={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} onShow={() => setShowAddTask(!showAddTask)} />}
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  )
}

export default App;
