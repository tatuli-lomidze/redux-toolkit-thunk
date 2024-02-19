import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getTodo } from "../store/todoThunks"

const TaskForm = () => {
    const dispatch = useDispatch()
    const {todo, loading, error} = useSelector(state => state.todo)
    useEffect(() => {
        dispatch(getTodo())
    }, [dispatch])
    

    if(loading) return <div>Loading .. </div>
    if(error) return <div>{error}</div>
 
    return <div className="tasks">
            <h1>tasks</h1>
        {todo.map(task => <div style={{border: '1px solid black'}} key={task._uuid}> 
            <h3>{task._uuid}</h3>
         </div>)}
    </div>
}
export default TaskForm