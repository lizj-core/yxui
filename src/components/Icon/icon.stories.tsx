import { storiesOf } from '@storybook/react';
import React from 'react';
import md from './icon.md';

import Icon from './icon';

const IconFunc = () => {
  return (
    <div>
      <Icon icon="address-book" theme="primary" />
      <Icon icon="angle-down" theme="primary" />
      <Icon icon="angle-left" />
      <Icon icon="angle-right" />
      <Icon icon="angle-up" />
      <Icon icon="angry" />
    </div>
  )
}

storiesOf("Icon Component", module)
  .add('icon图标展示', IconFunc, {
    notes: md,
  })