import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'
import './index.css'

const initialList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  fill = value => {
    this.setState({searchInput: value})
    document.getElementById('sear').value = value
  }

  filter = event => {
    const inp = event.target.value
    this.setState({searchInput: inp})
  }

  render() {
    const {searchInput} = this.state
    const filteredList = initialList.filter(ele => {
      if (
        ele.suggestion
          .toLocaleLowerCase()
          .includes(searchInput.toLocaleLowerCase())
      ) {
        return true
      }
      return false
    })
    return (
      <div>
        <div className="inn">
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
              alt="google logo"
              className="logo"
            />
          </div>
          <div className="bottom">
            <div className="search-container">
              <label htmlFor="sear">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                  alt="search icon"
                  className="search"
                />
              </label>
              <input type="search" id="sear" onChange={this.filter} />
            </div>
            <ul>
              {filteredList.map(ele => (
                <SuggestionItem deets={ele} key={ele.id} fill={this.fill} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
