import { storiesOf } from '@storybook/react';  
import React from 'react';
import { withKnobs, boolean} from '@storybook/addon-knobs'
import Transition from './transition';

const style = {
  height: "30px",
  border: "1px solid green",
  margin: "6px",
  paddingLeft: "8px",
};

const defaultComponent = () => {
  const open = boolean('open', true);
  return (
    <Transition
      animation="zoom-in-top"
      timeout={300}
      in={open}
    >
      <div>
        <div style={style}>2</div>
        <div style={style}>2</div>
        <div style={style}>2</div>
        <div style={style}>2</div>
        <div style={style}>2</div>
        <div style={style}>2</div>
        
      </div>
      
    </Transition>
  )
}


storiesOf('动画组件', module)
  .addDecorator(withKnobs)
  .add("test", defaultComponent)
