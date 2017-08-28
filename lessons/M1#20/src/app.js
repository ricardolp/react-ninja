'use strict'

import React, { Component } from 'react'
import Square from './square'
import Button from './button'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      color: 'green'
    }
    console.log(this.state)
  }
  render () {
    return (
      <div>
        <Square color={this.state.color} />
        {['green', 'red', 'blue'].map((color) => (
          <Button
            key={color}
            handleClick={() => this.setState({ color })}>
            {color}
          </Button>
        ))}
      </div>
    )
  }
}
