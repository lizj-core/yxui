import React from 'react';

import {storiesOf } from '@storybook/react'
import DialogFileImport from './dialogFileImport';
import { withKnobs, boolean } from '@storybook/addon-knobs'

const defaultDialog = () => {
    let isV =boolean('isV', true);
    function onClose(){
        isV = boolean('isV', false)
        
    }
    return (
        <div>
             <DialogFileImport visible={isV} onClose={onClose} />
        </div>
    )
}



storiesOf("DialogFileImport Component", module)
    .addDecorator(withKnobs)
    .add("default", defaultDialog);