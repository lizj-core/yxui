import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext }  from './menu';

export interface MenuItemPorps {
    className?: string;
    index?: number;
    style?: React.CSSProperties;
    disabled?: boolean;
}
export const MenuItem: FC<MenuItemPorps> = (props) => {
    const { className, disabled, index, style, children } = props;
    const context = useContext(MenuContext);
    const classes = classNames("menu-item", className, {
        "is-disabled": disabled,
        "is-active": context.index === index,
    });
    const handleClick = () => {
        if(context.onSelected && !disabled && (typeof index === "number")) {
            context.onSelected(index);
        }
    }
    return (
        <li className={classes} onClick={handleClick} style={style}>{children}</li>
    )
}
MenuItem.displayName = "MenuItem";
export default MenuItem;