'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  *颜色选择按钮组件
  **/

/***必须要class组件，因为需要用到Ref***/
var Color = function (_React$Component) {
	(0, _inherits3.default)(Color, _React$Component);

	function Color() {
		(0, _classCallCheck3.default)(this, Color);
		return (0, _possibleConstructorReturn3.default)(this, (Color.__proto__ || (0, _getPrototypeOf2.default)(Color)).apply(this, arguments));
	}

	(0, _createClass3.default)(Color, [{
		key: 'render',
		value: function render() {
			var _this2 = this;

			var _props = this.props,
			    color = _props.color,
			    text = _props.text;

			return _react2.default.createElement(
				_react2.default.Fragment,
				null,
				_react2.default.createElement(
					'button',
					{
						className: 'mdui-btn mdui-btn-block',
						onClick: function onClick() {
							_this2.refs.input.click();
						}
					},
					_react2.default.createElement(
						'i',
						{ style: { color: color }, className: 'mdui-icon-left mdui-icon material-icons' },
						'lens'
					),
					text,
					color
				),
				_react2.default.createElement('input', {
					style: { display: 'none' },
					value: color, ref: 'input', type: 'color',
					onChange: function onChange(e) {
						_this2.props.onColorChange(e.target.value);
					}
				})
			);
		}
	}]);
	return Color;
}(_react2.default.Component);

Color.defaultProps = {
	value: '#000000',
	onColorChange: function onColorChange() {},
	text: '选择颜色'
};

Color.propTypes = {
	text: _propTypes2.default.string, //文本
	value: _propTypes2.default.string, //颜色值
	onColorChange: _propTypes2.default.func //回调函数
};

exports.default = Color;