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
    console.log('delete')
  }

  return (
    <div className="container">
      <Header title='Task Tracker' />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  )
}

export default App;
