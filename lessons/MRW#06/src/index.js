'use strict'
import React from 'react'
import { render } from 'react-dom'
import Title  from './app.js';

render(
  React.createElement(Title),
  document.querySelector('[data-js="app"]')
 )