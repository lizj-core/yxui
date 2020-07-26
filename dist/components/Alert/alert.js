import React from 'react';
import classNames from 'classnames';
export var AlertType;
(function (AlertType) {
    AlertType["Success"] = "success";
    AlertType["Default"] = "default";
    AlertType["Danger"] = "danger";
    AlertType["Warning"] = "warning";
})(AlertType || (AlertType = {}));
var Alert = function (props) {
    var _a;
    var className = props.className, type = props.type, title = props.title, describe = props.describe, isClose = props.isClose;
    var classes = classNames('alert', className, (_a = {},
        _a["alert-" + type] = type,
        _a));
    return (React.createElement("div", { className: classes },
        React.createElement("div", null,
            React.createElement("div", null, title),
            React.createElement("div", null, describe)),
        isClose && (React.createElement("div", null, "\u5173\u95ED"))));
};
export default Alert;
