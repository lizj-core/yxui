import React from 'react';
import Button from './components/Button/button';
import Alert, { AlertType } from './components/Alert/alert';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement(Menu, null,
                React.createElement(MenuItem, null, "link1"),
                React.createElement(MenuItem, null, "link2"),
                React.createElement(MenuItem, null, "link3")),
            React.createElement(Button, null, "hello"),
            React.createElement(Button, { btnType: 'primary', size: "lg" }, "hello"),
            React.createElement(Button, { btnType: "link", href: "baidu.com" }, "hello"),
            React.createElement(Button, { btnType: "primary", disable: true, href: "baidu.com" }, "hello"),
            React.createElement(Alert, { type: AlertType.Success, title: "title", isClose: true }),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."))));
}
export default App;
