import {Component} from 'react'
import {v4} from 'uuid'

import TagsComponent from '../TagsComponent'
import TaskComponent from '../TaskComponent'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    inputText: '',
    optionSelected: tagsList[0].optionId,
    taskList: [],
    activeTag: 'INITIAL',
  }

  onInputChange = event => {
    this.setState({inputText: event.target.value})
  }

  onChangeSelectOption = event => {
    console.log(event.target.value)
    this.setState({optionSelected: event.target.value})
  }

  onSubmitTask = event => {
    event.preventDefault()

    const {inputText, optionSelected, taskList} = this.state

    const newObj = {
      id: v4(),
      task: inputText,
      option: optionSelected,
    }

    this.setState({
      taskList: [...taskList, newObj],
      inputText: '',
      optionSelected: tagsList[0].optionId,
    })
  }

  clickTag = e => {
    this.setState({activeTag: e})
  }

  render() {
    const {taskList, inputText, activeTag, optionSelected} = this.state
    console.log(activeTag)
    console.log(taskList)
    const filteredList =
      activeTag === 'INITIAL'
        ? taskList
        : taskList.filter(each => each.option === activeTag.toUpperCase())
    return (
      <div className="bg-container">
        <div className="left-section-container">
          <div className="left-internal-container">
            <h1 className="create-task-text">Create a task!</h1>
            <form className="form-container" onSubmit={this.onSubmitTask}>
              <div className="task-input-container">
                <label htmlFor="taskInputElement" className="label-element">
                  Task
                </label>
                <input
                  id="taskInputElement"
                  type="text"
                  className="input-element"
                  placeholder="Enter the task here"
                  onChange={this.onInputChange}
                  value={inputText}
                />
              </div>
              <div className="tag-input-container">
                <label htmlFor="tagSelectElement" className="label-element">
                  Tags
                </label>
                <select
                  id="tagSelectElement"
                  className="input-element"
                  onChange={this.onChangeSelectOption}
                  value={optionSelected}
                >
                  {tagsList.map(each => (
                    <option className="option-element" value={each.optionId}>
                      {each.displayText}
                    </option>
                  ))}
                </select>
              </div>
              <div className="button-container">
                <button type="submit" className="add-button">
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="right-section-container">
          <h1 className="task-tags-text">Tags</h1>
          <ul className="tag-container">
            {tagsList.map(each => (
              <TagsComponent
                key={each.optionId}
                tagDetails={each}
                clickTag={this.clickTag}
                isActive={activeTag.toUpperCase() === each.optionId}
              />
            ))}
          </ul>
          <h1 className="task-tags-text">Tasks</h1>
          <ul className="task-container">
            {filteredList.length > 0 ? (
              filteredList.map(each => (
                <TaskComponent key={each.id} taskDetails={each} />
              ))
            ) : (
              <li className="no-items-container">
                <p className="no-task-text">No Tasks Added Yet</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default MyTasks
