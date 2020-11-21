import React, { FC, createContext, useState, Children } from 'react';
import classNames from 'classnames';
import { MenuItemPorps } from './menuItem';

type MenuMode = "across" | "vertical";
type SelectedCallback = (index:number) => void;

export interface IMenuContext{
    index: number;
    onSelected?: SelectedCallback;
}
export interface MenuProps {
    className?: string;
    style?: React.CSSProperties;
    mode?: MenuMode;
    defaultIndex?: number;
    onSelected?: (index:number) => void;
}
export const MenuContext = createContext<IMenuContext>({index: 0})
const Menu : FC<MenuProps> = (props) =>{
    const { className, style,  mode, children, defaultIndex, onSelected } = props;
    const [currentActive, setActive] = useState(defaultIndex)
    const classes = classNames("yxui-menu", className, {
        "menu-vertical": mode === "vertical",
    });
    const handleClick = (index: number) => {
        setActive(index);
        if(onSelected) {
            onSelected(index);
        }
    }
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : 0,
        onSelected: handleClick,
    }
    const renderChildren = () => {
        return React.Children.map(children, (child, index) => {
            const childrenElement = child as React.FunctionComponentElement<MenuItemPorps>;
            const { displayName } = childrenElement.type;
            if(displayName === "MenuItem") {
                return React.cloneElement(childrenElement, {
                    index,
                });
            }else {
                console.error("warning:传入的子组件不是MenuItem类型")
            }
        })
    }
    return (
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext}>
                { renderChildren() }
            </MenuContext.Provider>
            
        </ul>
    ) 
}

Menu.defaultProps = {
    mode: 'across',
    defaultIndex: 0,
}

export default Menu;