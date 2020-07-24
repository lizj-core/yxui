import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '../src/styles/index.scss'
import React from 'react';

const style: React.CSSProperties = {
  padding: '0 40px',

}
  
const centerDecorator = (storyFn: any) => (
  <div style={style}>
    <h4>组件演示</h4>
    {storyFn()}
  </div>
)
addDecorator(centerDecorator); 
addDecorator(withInfo); 
addParameters({
  info: {
    inline: true,
    header: false,
  }
})
