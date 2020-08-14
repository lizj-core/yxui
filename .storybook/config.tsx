import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import "../src/styles/index.scss"
library.add(fas)
const wrapperStyle: React.CSSProperties = {
  padding: '20px 40px'
}

console.log(process)

const storyWrapper = (stroyFn: any) => (
  <div style={wrapperStyle}>
    <h3>组件演示</h3>
    {stroyFn()}
  </div>
)
addDecorator(storyWrapper)
addDecorator(withInfo)
addParameters({
  info: { inline: true, header: false},
  options: {
    theme: {
      brandTitle: 'yuexun组件库',
      brandUrl: 'https://github.com/lizj-core/yxui',
      // icon: 'http://192.168.10.89/fs/api/v1.0/viewPic.file?fileUuid=00b0k7t292017adbb72475abec0df44488f1399',
      // toolbar: {
      //   icon: 'http://192.168.10.89/fs/api/v1.0/viewPic.file?fileUuid=00b0k7t292017adbb72475abec0df44488f1399',
      //   // array of plain string values or MenuItem shape (see below)
      //   items: ['light', 'dark'],
      // },
    }
  }
})
const loaderFn = () => {
  const allExports = [require('../src/welcome.stories.tsx')];
  const req = require.context('../src/components', true, /\.stories\.tsx$/);
  req.keys().forEach(fname => allExports.push(req(fname)));
  return allExports;
};


// automatically import all files ending in *.stories.js
configure(loaderFn, module);
