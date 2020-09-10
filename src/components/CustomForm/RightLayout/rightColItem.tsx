import React, { FC } from 'react';
import classNames from 'classnames';

interface ItemObject {
    sortCode: number;
}

interface RightColItemProps {
    component: Object;
}

const RightColItem: FC<RightColItemProps> = (props) => {
    const { component } = props;
    return (
        <div className={classNames('item')}>
            模块
        </div>
    )
}

export default RightColItem;