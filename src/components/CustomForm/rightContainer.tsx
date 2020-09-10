import React, { FC,useState } from 'react';
import classNames from 'classnames';

const RightContainer: FC = (props) => {
    const [active, setActive] = useState(false)
    const onDrop = (e: any) => {
        setActive(false);
        console.log('onDrop', e.dataTransfer.getData('test'));
        
    }

    const onDragOver = (e: any) => {
        e.preventDefault();
        setActive(true);
        // console.log('onDragOver', e.target);
    }

    return (
        <div 
            className={classNames('container', {
                [`active`]: active
            })}
            draggable
            onDrop={(e) => onDrop(e)} 
            onDragOver={(e) => onDragOver(e)} 
        >

         </div>
    )
}

export default RightContainer;