import { addDecorator, addParameters, configure } from '@storybook/react';
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
);


addDecorator(centerDecorator); 
addDecorator(withInfo); 
addParameters({
  info: {
    inline: true,
    header: false,
  }
})

const loaderFn = () => {
  const allExports = [require('../src/welcome.stories.tsx')];
  const req = require.context('../src/components', true, /\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};

configure(loaderFn, module);
