import React, { FC } from 'react';
import classNames from 'classnames';

interface RightColItemProps {
    component: Object;
    sortCode: number;
}

const RightColItem: FC<RightColItemProps> = (props) => {
    const { sortCode } = props;
    return (
        <div className={classNames('item')}>
            模块{ sortCode }
        </div>
    )
}

export default RightColItem;