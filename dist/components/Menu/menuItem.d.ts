import React from 'react';
export interface MenuItemProps {
    index?: number;
    disable?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
