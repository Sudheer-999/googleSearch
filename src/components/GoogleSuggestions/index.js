import {Component} from 'react'
import SuggestionItem from '../SuggestionItem/index'
import './index.css'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onArrowClick = suggestion => {
    this.setState({searchInput: suggestion})
  }

  onChanger = event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(eachItem =>
      eachItem.name.includes(searchInput),
    )

    return (
      <div className="bg-container">
        <div className="google-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
        </div>
        <div className="suggestion-container">
          <div className="search-box">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
            />
            <input
              type="search"
              onChange={this.onChanger}
              className="search-box"
              value={searchInput}
            />
          </div>
          <ul>
            {searchResults.map(eachItem => (
              <SuggestionItem
                onClicking={this.onArrowClick}
                items={eachItem}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
