// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  countIncrement = () => {
    const {count} = this.state
    return count % 2 === 0 ? 'Count is Even' : 'Count is Odd'
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div className="sub-container">
          <h1 className="heading">Count {count}</h1>
          <p className="even-odd-content">{this.countIncrement()}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="condition">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
