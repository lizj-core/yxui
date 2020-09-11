import React, { FC,useState,useEffect } from 'react';
import classNames from 'classnames';
import RightCol from './RightLayout/rightCol';
import { useEventEmitter } from '../../hooks/useEventEmitter'

interface Obj {
    colCount: number | string;
    componentList: Array<Object>;
}

const RightContainer: FC = (props) => {
    const [active, setActive] = useState(false);
    const [data, setData] = useState(Array<Obj>());
    const { useListener } = useEventEmitter();
    
    useListener('leftOnDragEnd', () => {  
        setActive(false);
    }, [active])
   
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

    const onDragEnd = (e: any) => {
        setActive(false);
    } 
    
    return (
        <div 
            className={classNames('container', {
                [`active`]: active
            })}
            onDrop={(e) => onDrop(e)} 
            onDragOver={(e) => onDragOver(e)} 
            onDragEnd={(e) => onDragEnd(e)}
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