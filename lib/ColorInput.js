"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
/**
  *颜色选择按钮组件
  **/
/***必须要class组件，因为需要用到Ref***/
var Color = /** @class */ (function (_super) {
    __extends(Color, _super);
    function Color() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Color.prototype.render = function () {
        var _this = this;
        var _a = this.props, color = _a.color, text = _a.text, onColorChange = _a.onColorChange;
        return (React.createElement(React.Fragment, null,
            React.createElement("button", { className: "mdui-btn mdui-btn-block", onClick: function () {
                    _this.input.click();
                } },
                React.createElement("i", { style: { color: color }, className: "mdui-icon-left mdui-icon material-icons" }, "lens"),
                text,
                color),
            React.createElement("input", { style: { display: 'none' }, value: color, ref: function (r) { return _this.input = r; }, type: "color", onChange: function (e) {
                    onColorChange(e.target.value);
                } })));
    };
    return Color;
}(React.Component));
exports.default = Color;
