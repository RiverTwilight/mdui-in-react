"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/***
   *列表控制-开关组件
   **/
exports.default = (function (_a) {
    var onCheckedChange = _a.onCheckedChange, _b = _a.checked, checked = _b === void 0 ? true : _b, title = _a.title, _c = _a.icon, icon = _c === void 0 ? "settings" : _c;
    return (React.createElement("li", { className: "mdui-list-item mdui-ripple" },
        React.createElement("i", { className: "mdui-list-item-icon mdui-icon material-icons" }, icon),
        React.createElement("div", { className: "mdui-list-item-content" }, title),
        React.createElement("label", { className: "mdui-switch" },
            React.createElement("input", { onChange: function (e) {
                    onCheckedChange(e.target.checked);
                }, type: "checkbox", checked: checked }),
            React.createElement("i", { className: "mdui-switch-icon" }))));
});
