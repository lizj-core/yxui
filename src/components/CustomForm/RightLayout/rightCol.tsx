import React, { FC } from 'react';
import RightColItem from './rightColItem';
import classNames from 'classnames';

interface ComponentItemObject {
    sortCode: number;
}
interface ItemObject {
    componentList: Array<ComponentItemObject>;
}


const RightCol: FC<ItemObject> = (props) => {
    const { componentList } = props;
    // const [isDragInBody, setIsDragInBody] = useState(false);

    const onDragOver = (e: any) => {
        e.preventDefault();
        console.log(e.target)
    }
    return (
        <div className={classNames('yxui-custom-right')} draggable onDragOver={(e) => onDragOver(e)}>
            {componentList.map((component, index) => {
                return <RightColItem key={index} component={component} sortCode={component.sortCode} ></RightColItem>
            })}
        </div>
    )
}

export default RightCol;