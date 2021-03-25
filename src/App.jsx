import axios from 'axios';
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(async () => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  //Fetch Tasks

  const fetchTasks = () => {
    return axios.get('http://localhost:5000/tasks')
      .then(response => response.data);
  }

  // Add Task

  const addTask = (task) => {
    return axios.post('http://localhost:5000/tasks', task)
      .then(response => setTasks([...tasks, response.data]))
  }


  // Delete task

  const deleteTask = (task) => {
    return axios.delete(`http://localhost:5000/tasks/${task.id}`)
      .then(setTasks(tasks.filter((element) => element !== task)))
  }


  // Toggle Reminder

  const toggleReminder = async (task) => {

    const newTasks = tasks.map((task) => task);

    const taskToUpdate = tasks.indexOf(task);

    const updateTask = {
      ...task,
      reminder: !task.reminder
    }

    newTasks.splice(taskToUpdate, 1, updateTask);

    return axios.put(`http://localhost:5000/tasks/${task.id}`, updateTask)
      .then(setTasks(newTasks))
  }

  return (

    <Router>
      <div className="container">
        <Header title='Task Tracker'
          onShow={() => setShowAddTask(!showAddTask)}
          showAdd={showAddTask} />
        <Route path='/' exact render={(props) => (
          <>
            {showAddTask && <AddTask onAdd={addTask} onShow={() => setShowAddTask(!showAddTask)} />}
            {tasks.length > 0 ?
              (<Tasks tasks={tasks}
                onDelete={deleteTask}
                onToggle={toggleReminder}
              />) : ('No Tasks To Show')}
          </>
        )}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
