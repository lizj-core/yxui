import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomForm from './customForm';

const defaultT = () => {
    return (
        <CustomForm />
    )
}

storiesOf('CustomForm 自定义表单(拖拽)', module)
    .add('default', defaultT)