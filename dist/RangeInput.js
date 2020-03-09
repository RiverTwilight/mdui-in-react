'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RangeInput = function RangeInput(_ref) {
	var max = _ref.max,
	    min = _ref.min,
	    step = _ref.step,
	    value = _ref.value,
	    title = _ref.title,
	    onValueChange = _ref.onValueChange;

	console.log(value);
	return _react2.default.createElement(
		'div',
		{ className: 'mdui-textfield' },
		_react2.default.createElement(
			'label',
			{ className: 'mdui-textfield-label' },
			title
		),
		_react2.default.createElement(
			'label',
			{ className: 'mdui-slider' },
			_react2.default.createElement('input', {
				onChange: function onChange(e) {
					onValueChange(e.target.value);
				},
				type: 'range', value: value,
				step: step, min: min,
				max: max
			})
		)
	);
};

RangeInput.defaultProps = {
	max: 10,
	min: 1,
	step: 1,
	value: 5,
	title: '调节'
};

RangeInput.propTypes = {
	max: _propTypes2.default.string,
	min: _propTypes2.default.string,
	step: _propTypes2.default.string,
	value: _propTypes2.default.string,
	onValueChange: _propTypes2.default.func,
	title: _propTypes2.default.string
};

module.exports = RangeInput;