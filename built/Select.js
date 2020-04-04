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
var mdui = require("mdui");
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            dom: null
        };
        return _this;
    }
    Select.prototype.componentDidMount = function () {
        var inst = new mdui.Drawer(this.selectDom);
        this.setState({ dom: inst });
    };
    Select.prototype.componentDidUpdate = function () {
        var _this = this;
        //保留平滑切换动画
        setTimeout(function () { return _this.state.dom.handleUpdate(); }, 100);
    };
    Select.prototype.render = function () {
        var _this = this;
        var _a = this.props, options = _a.options, value = _a.value, onOptionChange = _a.onOptionChange;
        return (React.createElement("select", { onChange: function (e) {
                onOptionChange(e.target.value);
            }, ref: function (r) { return _this.selectDom = r; }, value: value, className: "mdui-select" }, options.map(function (a) { return (React.createElement("option", { key: a.value, value: a.value }, a.name)); })));
    };
    return Select;
}(React.Component));
exports.default = Select;
