import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Transition from './transition';


const style = {
  border:'1px solid #e0e0e0',
  padding:'10px',
  marginBottom:'10px'
}
const defaultTest = () => {
  const isIn = boolean('isIn', true)
  return (
    <Transition animation="zoom-in-top" in={isIn} timeout={300}>
      <div>
        <div style={style}>1</div>
        <div style={style}>1</div>
        <div style={style}>1</div>
      </div>
    </Transition>
  )
}

storiesOf('Transition', module)
  .addDecorator(withKnobs)
  .add('text', defaultTest)