import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <code>
          npm install yuexun-ui --save
        </code>
      </>
    )
  }, { info : { disable: true }})