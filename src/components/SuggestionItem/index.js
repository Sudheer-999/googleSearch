import './index.css'

const SuggestionItem = props => {
  const {onClicking, items} = props
  const {suggestion} = items

  const onArrow = () => {
    onClicking(suggestion)
  }

  return (
    <li className="suggestion-con">
      <p>{suggestion}</p>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="arrow-logo"
          alt="arrow"
          onClick={onArrow}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
