'use strict'

import React from 'react'
import Button from './button'

const likeButton = () => (
  <Button handleClick={() => alert('like')}>
    Curtir
  </Button>
)

export default likeButton
