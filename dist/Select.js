'use strict';

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _mdui = require('mdui');

var _mdui2 = _interopRequireDefault(_mdui);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Select = function (_React$Component) {
    (0, _inherits3.default)(Select, _React$Component);

    function Select(props) {
        (0, _classCallCheck3.default)(this, Select);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Select.__proto__ || (0, _getPrototypeOf2.default)(Select)).call(this, props));

        _this.state = {
            dom: null
        };
        return _this;
    }

    (0, _createClass3.default)(Select, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var inst = new _mdui2.default.Select(this.selectDom);
            this.setState({ dom: inst });
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            var _this2 = this;

            //保留平滑切换动画
            setTimeout(function () {
                return _this2.state.dom.handleUpdate();
            }, 100);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                options = _props.options,
                value = _props.value,
                onOptionChange = _props.onOptionChange;

            return _react2.default.createElement(
                'select',
                {
                    onChange: function onChange(e) {
                        onOptionChange(e.target.value);
                    },
                    ref: function ref(r) {
                        return _this3.selectDom = r;
                    },
                    value: value, className: 'mdui-select' },
                options.map(function (a) {
                    return _react2.default.createElement(
                        'option',
                        { key: a.value, value: a.value },
                        a.name
                    );
                })
            );
        }
    }]);
    return Select;
}(_react2.default.Component);

Select.defaultProps = {
    onOptionChange: function onOptionChange() {}
};

Select.propTypes = {
    options: _propTypes2.default.arrayOf(_propTypes2.default.object).isRequired,
    value: _propTypes2.default.string.isRequired,
    onOptionChange: _propTypes2.default.func.isRequired
};

module.exports = Select;