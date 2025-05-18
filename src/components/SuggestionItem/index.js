import {Component} from 'react'
import './index.css'

class SuggestionItem extends Component {
  sub = () => {
    const {deets, fill} = this.props
    const {suggestion} = deets
    fill(suggestion)
  }

  render() {
    const {deets} = this.props
    const {suggestion} = deets
    return (
      <li className="inner-elements">
        <p>{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="suggestion-arrow"
          onClick={this.sub}
        />
      </li>
    )
  }
}

export default SuggestionItem
