import { addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import '../src/styles/index.scss'
import React from 'react';

// const style: React.CSSProperties = {
//     textAlign: 'center',
    
//   }
  
//   const centerDecorator = (storyFn: any) => <div style={style}>{storyFn()}</div>

addDecorator(withInfo); 