'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextInput = function TextInput(_ref) {
    var icon = _ref.icon,
        rows = _ref.rows,
        header = _ref.header,
        placeholder = _ref.placeholder,
        maxlength = _ref.maxlength,
        value = _ref.value,
        onTextChange = _ref.onTextChange,
        type = _ref.type,
        autofocus = _ref.autofocus;

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
        icon ? _react2.default.createElement(
            'i',
            { className: 'mdui-icon material-icons' },
            icon
        ) : null,
        Lable,
        _react2.default.createElement(TagType, {
            maxLength: maxlength,
            placeholder: placeholder,
            rows: rows,
            onChange: function onChange(e) {
                onTextChange(e.target.value);
            },
            value: value || '',
            autoFocus: autofocus, type: type, className: 'mdui-textfield-input' })
    );
};

TextInput.defaultProps = {
    icon: '',
    type: 'text',
    autofocus: false,
    maxlength: null,
    placeholder: ''
};

TextInput.propTypes = {
    text: _propTypes2.default.string,
    value: _propTypes2.default.bool,
    onTextChange: _propTypes2.default.func,
    icon: _propTypes2.default.string,
    autofocus: _propTypes2.default.bool,
    placeholder: _propTypes2.default.string,
    rows: _propTypes2.default.string
};

exports.default = TextInput;