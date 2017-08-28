'use strict'

import React, { Component } from 'react'
import Square from './square'

export default class App extends Component {
  render () {
    return (
      <div
        className='container'
        onClick={(e) => {
          alert('click')
        }}>
        <Square />
      </div>
    )
  }
}
