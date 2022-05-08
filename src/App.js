import { useState, useEffect } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { StyleSheet, Text, View } from 'react-native'

const data = [
  {
    id: 1,
    text: 'Create'
  },
  {
    id: 2,
    text: 'Remove'
  },
]

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = () => {
      const tasksFromServer = fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  const fetchTasks = () => data

  const addTask = async (task) => {
    task.id = Math.random()

    setTasks([...tasks, task])
  }

  const deleteTask = async (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
      <View style={styles.container}>
        <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0
            ? <Tasks
                tasks={tasks}
                onDelete={deleteTask}
            />
            : <Text>No Tasks To Show</Text>
        }
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 500,
    marginTop: 80,
    marginBottom: 80,
    marginLeft: 20,
    marginRight: 20,
    minHeight: '70%',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'steelblue',
    borderRadius: 20,
    padding: 30,
  },
});

export default App
