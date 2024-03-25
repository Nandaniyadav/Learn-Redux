
import React, { Component } from 'react'

export class Classlearn extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
  }
  render() {
    // console.log(this)
    const { name } = this.props
    return (
      <div>{name}
        <hr />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Addition</button> {this.state.count} <button onClick={() => this.setState({ count: this.state.count - 1 })}>Subtract</button>
      </div>
    )
  }
}

export default Classlearn