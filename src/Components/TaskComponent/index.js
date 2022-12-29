import './index.css'

const TaskComponent = props => {
  const {taskDetails} = props
  const {task, option} = taskDetails

  return (
    <li className="list-item-container">
      <p className="task-text">{task}</p>
      <p className="option-text">{option}</p>
    </li>
  )
}

export default TaskComponent
