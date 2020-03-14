"use strict";

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ToTop = function (_React$Component) {
    (0, _inherits3.default)(ToTop, _React$Component);

    function ToTop(props) {
        (0, _classCallCheck3.default)(this, ToTop);

        var _this = (0, _possibleConstructorReturn3.default)(this, (ToTop.__proto__ || (0, _getPrototypeOf2.default)(ToTop)).call(this, props));

        _this.state = {
            isHide: true
        };
        return _this;
    }

    (0, _createClass3.default)(ToTop, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            window.addEventListener("scroll", function (e) {
                var t = document.documentElement.scrollTop || document.body.scrollTop;
                if (t <= 148) {
                    _this2.setState({ isHide: true });
                } else {
                    _this2.setState({ isHide: false });
                }
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            window.removeEventListener("scroll", function () {});
        }
    }, {
        key: "render",
        value: function render() {
            var isHide = this.state.isHide;

            return _react2.default.createElement(
                "button",
                {
                    onClick: function onClick() {
                        return window.location.href = "#";
                    },
                    className: "mdui-color-theme mdui-fab mdui-fab-fixed " + (isHide ? 'mdui-fab-hide' : '') },
                _react2.default.createElement(
                    "i",
                    { className: "mdui-icon material-icons" },
                    "\uE5D8"
                )
            );
        }
    }]);
    return ToTop;
}(_react2.default.Component);

module.exports = ToTop;