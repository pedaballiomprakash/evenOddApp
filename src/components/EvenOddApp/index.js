import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    let evenOrOdd

    if (count % 2 === 0) {
      evenOrOdd = <p>Count is Even</p>
    } else {
      evenOrOdd = <p>Count is Odd</p>
    }

    return (
      <div className="count-container">
        <div className="app-container">
          <h1 className="heading">Count {count}</h1>
          {evenOrOdd}
          <button
            type="button"
            className="button-element"
            onClick={this.onIncrement}
          >
            Increment
          </button>
          <p className="paragraph-1">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
