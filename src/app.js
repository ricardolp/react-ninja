'use strict'

import React, { Component } from 'react'

import Timer from './timer'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      showTimer: true
    }
    console.log('constructor')
  }
  componentWillMount () {
    console.log('vai montar')
  }
  componentDidMount () {
    console.log('montado')
  }
  render () {
    console.log('render')
    return (
      <div>
        {this.state.showTimer && <Timer />}
        <button onClick={() => this.setState({ showTimer: !this.state.showTimer })}>Show / hide</button>
      </div>
    )
  }
}
