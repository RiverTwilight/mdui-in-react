'use strict';

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***
   *列表控制-菜单组件
   *2020-02-16 江村暮
   **/

var Dialog = function Dialog(props) {
	var items = props.items.map(function (item, i) {
		return _react2.default.createElement(
			'label',
			{ key: i, 'mdui-dialog-close': 'true', className: 'mdui-list-item mdui-ripple' },
			_react2.default.createElement(
				'div',
				{ className: 'mdui-radio' },
				_react2.default.createElement('input', {
					onChange: function onChange(e) {
						return props.onCheckedChange(i);
					},
					type: 'radio', key: i,
					checked: props.items[props.checked].value === item.value }),
				_react2.default.createElement('i', { className: 'mdui-radio-icon' })
			),
			_react2.default.createElement(
				'div',
				{ className: 'mdui-list-item-content' },
				item.name
			)
		);
	});
	return _react2.default.createElement(
		'div',
		{ className: 'mdui-dialog', id: 'list' },
		_react2.default.createElement(
			'div',
			{ className: 'mdui-dialog-title' },
			props.title
		),
		_react2.default.createElement(
			'div',
			{ className: 'mdui-dialog-content' },
			_react2.default.createElement(
				'ul',
				{ className: 'mdui-list' },
				items
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'mdui-dialog-actions' },
			_react2.default.createElement(
				'button',
				{ 'mdui-dialog-close': 'true', className: 'mdui-btn mdui-ripple' },
				'\u53D6\u6D88'
			)
		)
	);
};

var ListControlMenu = function ListControlMenu(props) {
	var checked = props.checked,
	    items = props.items,
	    text = props.text;

	return _react2.default.createElement(
		_react2.default.Fragment,
		null,
		_react2.default.createElement(
			'li',
			{ 'mdui-dialog': '{target:\'#list\',history:false}', className: 'mdui-list-item mdui-ripple' },
			_react2.default.createElement(
				'i',
				{ className: 'mdui-list-item-icon mdui-icon material-icons' },
				props.icon
			),
			_react2.default.createElement(
				'div',
				{ className: 'mdui-list-item-content' },
				_react2.default.createElement(
					'div',
					{ className: 'mdui-list-item-title mdui-list-item-one-line' },
					text
				),
				_react2.default.createElement(
					'div',
					{ className: 'mdui-list-item-text mdui-list-item-one-line' },
					items[checked].name
				)
			)
		),
		_react2.default.createElement(Dialog, {
			checked: checked,
			title: text,
			onCheckedChange: props.onCheckedChange,
			items: items })
	);
};

ListControlMenu.defaultProps = {
	icon: 'settings',
	onCheckedChange: function onCheckedChange() {},
	text: '请选择...'
};

ListControlMenu.propTypes = {
	text: _propTypes2.default.string, //文本
	checked: _propTypes2.default.number.isRequired, //选中的项目名索引
	items: _propTypes2.default.array.isRequired, //待选项目
	onCheckedChange: _propTypes2.default.func, //回调函数
	icon: _propTypes2.default.string //图标
};

module.exports = ListControlMenu;