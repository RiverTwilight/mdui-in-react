'use strict';

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***
   *列表控制-开关组件
   *2020-02-16 江村暮
   **/

var ListControlCheck = function ListControlCheck(_ref) {
    var onCheckedChange = _ref.onCheckedChange,
        checked = _ref.checked,
        title = _ref.title,
        icon = _ref.icon;

    return _react2.default.createElement(
        'li',
        { className: 'mdui-list-item mdui-ripple' },
        _react2.default.createElement(
            'i',
            { className: 'mdui-list-item-icon mdui-icon material-icons' },
            icon
        ),
        _react2.default.createElement(
            'div',
            { className: 'mdui-list-item-content' },
            title
        ),
        _react2.default.createElement(
            'label',
            { className: 'mdui-switch' },
            _react2.default.createElement('input', {
                onChange: function onChange(e) {
                    onCheckedChange(e.target.checked);
                },
                type: 'checkbox', checked: checked
            }),
            _react2.default.createElement('i', { className: 'mdui-switch-icon' })
        )
    );
};

ListControlCheck.defaultProps = {
    icon: 'settings',
    onCheckedChange: function onCheckedChange() {},
    title: '开关'
};

ListControlCheck.propTypes = {
    title: _propTypes2.default.string.isRequired,
    checked: _propTypes2.default.bool.isRequired,
    onCheckedChange: _propTypes2.default.func,
    icon: _propTypes2.default.string
};

module.exports = ListControlCheck;