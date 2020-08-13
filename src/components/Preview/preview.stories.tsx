import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Preview from './preview';
const defaultPreview = () => {
  return (
    <div>
      <Preview data={[{ fileName: '文件', fileUuid: '3343343' }, { fileName: '文件', fileUuid: '3343344' }]} />
    </div>
  )
}
storiesOf('Preview预览组件', module)
  .add('preview', defaultPreview)