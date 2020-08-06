import React from 'react'
import { storiesOf } from '@storybook/react'

storiesOf('Welcome page', module)
  .add('welcome', () => {
    return (
      <>
        <code>
          npm install yxui --save
        </code>
      </>
    )
  }, { info : { disable: true }})