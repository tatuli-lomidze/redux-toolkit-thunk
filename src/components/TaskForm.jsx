import { useDispatch } from 'react-redux'
import { addTodo } from '../store/todoSlice'
import { useState } from 'react'

const TaskForm = () => {
  const [taskName, setTaskName] = useState('')
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    setTaskName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (taskName.trim() !== '') {
      dispatch(addTodo({ name: taskName }))
      setTaskName('')
    }
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task name"
        value={taskName}
        onChange={handleInputChange}
      />
      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm
