import React, { FC,useState } from 'react';
import classNames from 'classnames';
import RightCol from './RightLayout/rightCol';

interface Obj {
    colCount: number | string;
    componentList: Array<Object>;
}

const RightContainer: FC = (props) => {
    const [active, setActive] = useState(false);
    const [data, setData] = useState(Array<Obj>());

    const onDrop = (e: any) => {
        setActive(false);
        const layout = e.dataTransfer.getData('layout');

        if(layout) {
            const componentList = [];
            for(let i = 0; i < layout; i++) {
                componentList.push({
                    sortCode: i+1,
                })
            }
            const obj: Obj = {
                colCount: Number(layout),
                componentList: componentList,
            }
            data.push(obj)
            setData(data);
        }
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
            {data.map((item, index) => {
                const { colCount, componentList } = item;
                return (
                    <RightCol key={index} componentList={componentList} />
                )
            })}
         </div>
    )
}

export default RightContainer;