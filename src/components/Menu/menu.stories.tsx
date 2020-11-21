import React from 'react';

import { storiesOf } from '@storybook/react';
import Menu from './menu';
import MenuItem from './menuItem';

const defaultMenu =() => (
    <Menu onSelected={(index) => alert(index)}>
        <MenuItem index={0}>dddd</MenuItem>
        <MenuItem index={1} disabled>dddd</MenuItem>
        <MenuItem index={2}>dddd</MenuItem>

    </Menu>
)

storiesOf('Menu组件', module)
    .add("默认", defaultMenu)