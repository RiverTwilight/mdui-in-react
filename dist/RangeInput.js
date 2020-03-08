'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

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
/*
RangeInput.defaultProps = {
    max:10,
    min:1,
    step:1,
    title:'滑块'
}

RangeInput.propTypes={
    max:PropTypes.string,
    min:PropTypes.string,
    step:PropTypes.string,
    value:PropTypes.string,
    onValueChange:PropTypes.func,
    title:PropTypes.string,
}
*/
exports.default = RangeInput;