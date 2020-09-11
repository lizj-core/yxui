import React, { FC } from 'react';
import RightColItem from './rightColItem';
import classNames from 'classnames';

interface ItemObject {
    componentList: Array<Object>;
}


const RightCol: FC<ItemObject> = (props) => {
    const { componentList } = props;
    console.log(props)
    return (
        <div className={classNames('yxui-custom-right')} draggable>
            {componentList.map((component, index) => {
                return <RightColItem key={index} component={component} ></RightColItem>
            })}
        </div>
    )
}

export default RightCol;