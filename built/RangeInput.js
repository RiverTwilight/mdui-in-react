"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
  *进度调节Slidebar
  **/
exports.default = (function (_a) {
    var _b = _a.max, max = _b === void 0 ? "10" : _b, _c = _a.min, min = _c === void 0 ? "1" : _c, _d = _a.step, step = _d === void 0 ? "1" : _d, _e = _a.value, value = _e === void 0 ? "5" : _e, _f = _a.title, title = _f === void 0 ? "调节" : _f, onValueChange = _a.onValueChange;
    return (React.createElement("div", { className: "mdui-textfield" },
        React.createElement("label", { className: "mdui-textfield-label" }, title),
        React.createElement("label", { className: "mdui-slider" },
            React.createElement("input", { onChange: function (e) {
                    onValueChange(e.target.value);
                }, type: "range", value: value, step: step, min: min, max: max }))));
});
