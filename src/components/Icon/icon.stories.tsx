import { storiesOf } from '@storybook/react';
import React from 'react';

import Icon from './icon';

const IconFunc = () => {
  return <Icon icon="address-book" />
}

storiesOf("Icon Component", module)
  .add('icon图标展示', IconFunc)