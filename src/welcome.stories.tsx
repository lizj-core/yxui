import React from 'react'
import { storiesOf } from '@storybook/react'
import * as readme from './WELCOME.md';

storiesOf('Welcome page', module)
  .add('首页', () => {
    return (
      <>
        <div>安装组件库</div>
        <code>
          npm install yuexun-ui --save
        </code>
        <div>引入css文件</div>
        <code>
          import 'yuexun-ui/dist/index.css'
        </code>
        <hr />
        <div>
          如果自定义生成文档不完整，可点击 Notes 查看md文件
        </div>
        <hr />

      </>
    )
  }, { 
    info : { disable: true },
    notes: readme,
  }
)