import React, { createContext, useState } from 'react';
import classNames from 'classnames';

type menuMode = 'horizontal' | 'vertical';
type SelectedCallback = (selectedIndex: number) => void;
export interface MenuProps {
    defaultIndex?: Number;
    className?: String;
    mode?: menuMode;
    onSelected?: SelectedCallback;
    style?: React.CSSProperties;
}

interface IMenuContext {
    index: number;
    onSelected?: SelectedCallback;
}

export const MenuContext = createContext<IMenuContext>({index: 0});

const Menu: React.FC<MenuProps> = (props) => {
    const {
        defaultIndex,
        className,
        style,
        mode,
        children,
    } = props;
    const classes = classNames('menu', className, {
        [`menu-vertical`]: mode === 'vertical'
    })
    const [ currentActive, setCurrentActive ] = useState(defaultIndex);
    return (
        <ul className={classes} style={style}>
            {children}
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: 0,
}

export default Menu;


