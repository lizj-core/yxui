import React from 'react';
declare type menuMode = 'horizontal' | 'vertical';
declare type SelectedCallback = (selectedIndex: number) => void;
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
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<MenuProps>;
export default Menu;
