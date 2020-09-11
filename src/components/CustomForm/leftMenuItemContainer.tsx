import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { useEventEmitter } from '../../hooks/useEventEmitter'

interface LeftMenuContainerProps {
    className?: string;
    layout?: number;
}

const LeftMenuContainer: FC<LeftMenuContainerProps> = (props) => {
    const { children, className, layout } = props;
    const { emit } = useEventEmitter();
    const [active, setActive] = useState(false);

    const onDragstart = (e: any) => {
        console.log(e.target.getAttribute('data-layout'));
        e.dataTransfer.setData("layout", e.target.getAttribute('data-layout'))
        e.dataTransfer.setData("layout", e.target.getAttribute('data-layout'))
    }

    const onDrag = (e: any) => {
        setActive(true);
    }

    const onDragEnd = (e: any) => {
        setActive(false);
        emit('leftOnDragEnd', 'deee')
    }

    const onDragLeave = (e: any) => {
        setActive(false);
        console.log("onDragLeave")
    }
    

    return (
        <div
            data-layout={layout}
            className={classNames(className, 'column', {
                [`active`]: active
            })}
            draggable
            onDragStart={(e) => onDragstart(e)}
            onDragEnd={(e) => onDragEnd(e)}
            onDrag={(e) => onDrag(e)}
            onDragLeave={(e) => onDragLeave(e)}
        >
            {children}
        </div>
    )

}

export default LeftMenuContainer;