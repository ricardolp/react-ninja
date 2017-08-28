'use strict'

import React, { Component } from 'react'
import LikeButton from './like-button'
import SearchButton from './search-button'

export default class App extends Component {
  render () {
    return (
      <div>
        <LikeButton />
        <SearchButton />
      </div>
    )
  }
}
