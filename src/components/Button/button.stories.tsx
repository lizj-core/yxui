import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Button from './button';

const defaultButton = () => (
  <Button onClick={action('clicked')}> default button </Button>
)

const buttonWithSize = () => (
  <div>
    <Button size="lg" onClick={action('333')}> large button </Button>
    <Button size="sm"> small button </Button>
  </div>
)

const buttonWithType = () => (
  <div>
    <Button btnType="primary"> primary button </Button>
    <Button btnType="danger"> danger button </Button>
    <Button btnType="link" href="https://google.com"> link button </Button>
  </div>
)

storiesOf('Button', module)
  .add("自定义按钮1", defaultButton)
  .add("自定义按钮2", buttonWithSize)
  .add("自定义按钮3", buttonWithType)