'use strict'

import React from 'react'
import Button from './button'

const searchButton = () => (
  <Button handleClick={() => alert('search')}>
    Pesquisar
  </Button>
)

export default searchButton
