import React, { FC } from 'react';
import classNames from 'classnames';
import LeftMenu from './leftMenu';
import RightContainer from './rightContainer';
import EventEmitterRC from '../EventEmitterRC'

interface CustomFormProps {

}

const CustomForm: FC<CustomFormProps> = (props) => {
    return (
        <EventEmitterRC>
            <div className={classNames('yxui-CustomForm')}>
                <div className="leftMenu">
                    <LeftMenu />
                </div>
                <div className="rightContainer" draggable>
                    <RightContainer />
                </div>
            </div>
        </EventEmitterRC>

    )
}

export default CustomForm;