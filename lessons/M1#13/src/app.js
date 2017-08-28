'use strict'

import React, { Component } from 'react'
import Square from './square'

export default class App extends Component {
  render () {
    return (
      <div>
        {['blue', 'red', 'green'].map((square, index) => (
          <Square key={index} color={square} />
        ))}
      </div>
    )
  }
}
