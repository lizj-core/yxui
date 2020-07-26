var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import classNames from 'classnames';
export var Button = function (props) {
    var _a;
    var className = props.className, disable = props.disable, size = props.size, btnType = props.btnType, children = props.children, href = props.href, restProps = __rest(props, ["className", "disable", "size", "btnType", "children", "href"]);
    var classes = classNames('btn', className, (_a = {},
        _a["btn-" + btnType] = btnType,
        _a["btn-" + size] = size,
        _a['disable'] = btnType === 'link' && disable,
        _a));
    if (btnType === 'link' && href) {
        return (React.createElement("a", __assign({ href: href, className: classes }, restProps), children));
    }
    else {
        return (React.createElement("button", __assign({ className: classes, disabled: disable }, restProps), children));
    }
};
Button.defaultProps = {
    disable: false,
    btnType: 'default',
};
export default Button;
