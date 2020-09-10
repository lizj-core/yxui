import React, { FC, useState } from 'react';
import classNames from 'classnames';

interface LeftMenuContainerProps {
    className?: string;
    layout?: number;
}

const LeftMenuContainer: FC<LeftMenuContainerProps> = (props) => {
    const { children, className, layout } = props;

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
        >
            {children}
        </div>
    )

}

export default LeftMenuContainer;