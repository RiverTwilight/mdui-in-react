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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Selector = function (_React$Component) {
    (0, _inherits3.default)(Selector, _React$Component);

    function Selector(props) {
        (0, _classCallCheck3.default)(this, Selector);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Selector.__proto__ || (0, _getPrototypeOf2.default)(Selector)).call(this, props));

        _this.state = {
            dom: null
        };
        return _this;
    }

    (0, _createClass3.default)(Selector, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var inst = new mdui.Select(this.selectDom);
            this.setState({ dom: inst });
        }
    }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
            this.state.dom.handleUpdate();
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                opt = _props.opt,
                val = _props.val,
                onOptionChange = _props.onOptionChange;

            return React.createElement(
                "select",
                {
                    onChange: function onChange(e) {
                        onOptionChange(e.target.value);
                    },
                    ref: function ref(r) {
                        return _this2.selectDom = r;
                    },
                    value: val, className: "mdui-select", "mdui-select": "true" },
                opt.map(function (a) {
                    return React.createElement(
                        "option",
                        { key: a.value, value: a.value },
                        a.text
                    );
                })
            );
        }
    }]);
    return Selector;
}(React.Component);