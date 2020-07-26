import React from 'react';
import classNames from 'classnames';
var MenuItem = function (props) {
    var children = props.children, index = props.index, className = props.className, style = props.style, disable = props.disable;
    var classes = classNames('menu-item', className, {
        'is-disable': disable,
    });
    return (React.createElement("li", { className: classes, style: style }, children));
};
export default MenuItem;
