import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
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
      reminder: true,
    },
    {
      id: 3,
      text: 'Make breakfast',
      day: 'Everyday',
      reminder: true,
    },
  ])

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
      <Header title='Task Tracker' />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks To Show'}
    </div>
  )
}

export default App;
