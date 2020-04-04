"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
 * 列表控制-菜单组件
 */
var Dialog = function (_a) {
    var items = _a.items, onCheckedChange = _a.onCheckedChange, title = _a.title, checked = _a.checked;
    return (React.createElement("div", { className: "mdui-dialog", id: "list" },
        React.createElement("div", { className: "mdui-dialog-title" }, title),
        React.createElement("div", { className: "mdui-dialog-content" },
            React.createElement("ul", { className: "mdui-list" }, items.map(function (item, i) { return (React.createElement("label", { key: item.title, "mdui-dialog-close": "true", className: "mdui-list-item mdui-ripple" },
                React.createElement("div", { className: "mdui-radio" },
                    React.createElement("input", { onChange: function (_) { return onCheckedChange(i); }, type: "radio", key: i, checked: items[checked].value === item.value }),
                    React.createElement("i", { className: "mdui-radio-icon" })),
                React.createElement("div", { className: "mdui-list-item-content" }, item.name))); }))),
        React.createElement("div", { className: "mdui-dialog-actions" },
            React.createElement("button", { "mdui-dialog-close": "true", className: "mdui-btn mdui-ripple" }, "\u53D6\u6D88"))));
};
exports.default = (function (_a) {
    var checked = _a.checked, items = _a.items, _b = _a.title, title = _b === void 0 ? "请选择" : _b, onCheckedChange = _a.onCheckedChange, _c = _a.icon, icon = _c === void 0 ? "setting" : _c;
    return (React.createElement(React.Fragment, null,
        React.createElement("li", { "mdui-dialog": "{target:'#list',history:false}", className: "mdui-list-item mdui-ripple" },
            React.createElement("i", { className: "mdui-list-item-icon mdui-icon material-icons" }, icon),
            React.createElement("div", { className: "mdui-list-item-content" },
                React.createElement("div", { className: "mdui-list-item-title mdui-list-item-one-line" }, title),
                React.createElement("div", { className: "mdui-list-item-text mdui-list-item-one-line" }, items[checked].name))),
        React.createElement(Dialog, { checked: checked, title: title, onCheckedChange: onCheckedChange, items: items })));
});
