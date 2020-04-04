"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Input = function (_a) {
    var error = _a.error, helper = _a.helper, icon = _a.icon, rows = _a.rows, header = _a.header, placeholder = _a.placeholder, value = _a.value, onValueChange = _a.onValueChange, others = __rest(_a, ["error", "helper", "icon", "rows", "header", "placeholder", "value", "onValueChange"]);
    var TagType = rows ? 'textarea' : 'input';
    return (React.createElement("div", { className: "mdui-textfield " + ((placeholder) ? '' : 'mdui-textfield-floating-label') },
        icon &&
            React.createElement("i", { className: "mdui-icon material-icons" }, icon),
        header &&
            React.createElement("label", { className: "mdui-textfield-label" }, header),
        React.createElement(TagType, __assign({}, others, { placeholder: placeholder, rows: rows, onChange: function (e) {
                onValueChange(e.target.value);
            }, value: value, className: "mdui-textfield-input" })),
        error &&
            React.createElement("div", { className: "mdui-textfield-error" }, error),
        helper &&
            React.createElement("div", { className: "mdui-textfield-helper" }, helper)));
};
exports.default = Input;
