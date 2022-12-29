import './index.css'

const TagsComponent = props => {
  const {tagDetails, clickTag, isActive} = props
  const {displayText} = tagDetails
  const activeTagItem = isActive ? 'active-button' : 'option-button'

  const onClickButton = () => {
    clickTag(displayText)
  }
  return (
    <li className="list-element">
      <button type="button" className={activeTagItem} onClick={onClickButton}>
        {displayText}
      </button>
    </li>
  )
}

export default TagsComponent
