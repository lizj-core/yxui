import React from 'react';
import Editor from './editor';

import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions'

const defaultEditor = () => {
  return (
    <Editor onChange={action('输出内容：')} placeholder="请输入内容" />
  )
}

storiesOf('Editor 富文本框', module)
  .addDecorator(withKnobs)
  .add('default', defaultEditor)