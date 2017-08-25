'use strict'
import React from 'react'
import ReactDOM from 'react-dom'


var Title = require('./app.js');

ReactDOM.render(
  React.createElement(Title),
  document.querySelector('[data-js="app"]')
 )