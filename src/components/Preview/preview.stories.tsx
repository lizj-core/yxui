import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'

import Preview from './preview';
const defaultPreview = () => {
  return (
    <div>
      <Preview data={[{ fileName: '文件', fileUuid: '3343343' }, { fileName: '文件', fileUuid: '3343344' }]} />
    </div>
  )
}

const pictureData = [
  { fileName: '文件', fileUuid: '00k0k8e4120cd9168734dc38319bf1b763adc05', previewUrl: 'http://192.168.10.89/fs/api/v1.0/viewPic.file?fileUuid=00k0k8e4120cd9168734dc38319bf1b763adc05' },
  { fileName: '文件', fileUuid: '00k0k8e4120cd9168734dc38319bf1b763adc05', previewUrl: 'http://192.168.10.89/fs/api/v1.0/viewPic.file?fileUuid=00k0k8e4120cd9168734dc38319bf1b763adc05' }
]

const picturePreview = () => {
  return (
    <div>
      <Preview type="picture" data={pictureData} />
    </div>
  )
}
storiesOf('Preview预览组件', module)
  .add('preview', defaultPreview)
  .add('图片展示', picturePreview)
