import { useSelector, useDispatch } from 'react-redux'
import { toggleDarkMode } from '../store/darkModeSlice'
import TaskForm from './TaskForm'

const TodoList = () => {
  const darkMode = useSelector((state) => state.darkMode)
  const dispatch = useDispatch()

  return (
    <div className={darkMode}>
      <button onClick={() => dispatch(toggleDarkMode())}>
      Current Mode: {darkMode}
      </button>
      <TaskForm />
    </div>
  )
}

export default TodoList