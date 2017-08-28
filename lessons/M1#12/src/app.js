'use strict'

import React, { Component } from 'react'
import Square from './square'

export default class App extends Component {
  render () {
    return (
      <div>
        {['blue', 'red', 'green'].map((square) => (
          <Square key={square} color={square} />
        ))}
      </div>
    )
  }
}
