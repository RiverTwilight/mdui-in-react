'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(_ref) {
    var icon = _ref.icon,
        rows = _ref.rows,
        header = _ref.header,
        placeholder = _ref.placeholder,
        value = _ref.value,
        onValueChange = _ref.onValueChange,
        others = (0, _objectWithoutProperties3.default)(_ref, ['icon', 'rows', 'header', 'placeholder', 'value', 'onValueChange']);

    icon = icon ? _react2.default.createElement(
        'i',
        { className: 'mdui-icon material-icons' },
        icon
    ) : null;
    var TagType = rows ? 'textarea' : 'input';
    var Lable = header ? _react2.default.createElement(
        'label',
        { className: 'mdui-textfield-label' },
        header
    ) : null;
    return _react2.default.createElement(
        'div',
        { className: 'mdui-textfield ' + (placeholder ? '' : 'mdui-textfield-floating-label') },
        icon,
        Lable,
        _react2.default.createElement(TagType, (0, _extends3.default)({}, others, {
            placeholder: placeholder,
            rows: rows,
            onChange: function onChange(e) {
                onValueChange(e.target.value);
            },
            value: value,
            className: 'mdui-textfield-input' }))
    );
};

Input.defaultProps = {
    placeholder: '',
    value: ''
};

Input.propTypes = {
    value: _propTypes2.default.string,
    onValueChange: _propTypes2.default.func,
    icon: _propTypes2.default.string,
    placeholder: _propTypes2.default.string,
    rows: _propTypes2.default.string
};

module.exports = Input;