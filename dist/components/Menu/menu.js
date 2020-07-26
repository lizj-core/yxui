import React, { createContext, useState } from 'react';
import classNames from 'classnames';
export var MenuContext = createContext({ index: 0 });
var Menu = function (props) {
    var _a;
    var defaultIndex = props.defaultIndex, className = props.className, style = props.style, mode = props.mode, children = props.children;
    var classes = classNames('menu', className, (_a = {},
        _a["menu-vertical"] = mode === 'vertical',
        _a));
    var _b = useState(defaultIndex), currentActive = _b[0], setCurrentActive = _b[1];
    return (React.createElement("ul", { className: classes, style: style }, children));
};
Menu.defaultProps = {
    defaultIndex: 0,
};
export default Menu;
