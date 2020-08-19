"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * 列表控制-菜单组件
 */
var Dialog = function Dialog(_ref) {
  var items = _ref.items,
      onCheckedChange = _ref.onCheckedChange,
      title = _ref.title,
      checked = _ref.checked;
  return /*#__PURE__*/React.createElement("div", {
    className: "mdui-dialog",
    id: title
  }, /*#__PURE__*/React.createElement("div", {
    className: "mdui-dialog-title"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "mdui-dialog-content"
  }, /*#__PURE__*/React.createElement("ul", {
    className: "mdui-list"
  }, items.map(function (item, i) {
    return /*#__PURE__*/React.createElement("label", {
      key: item.name,
      "mdui-dialog-close": "true",
      className: "mdui-list-item mdui-ripple"
    }, /*#__PURE__*/React.createElement("div", {
      className: "mdui-radio"
    }, /*#__PURE__*/React.createElement("input", {
      onChange: function onChange() {
        return onCheckedChange && onCheckedChange(i);
      },
      type: "radio",
      checked: items[checked].value === item.value
    }), /*#__PURE__*/React.createElement("i", {
      className: "mdui-radio-icon"
    })), /*#__PURE__*/React.createElement("div", {
      className: "mdui-list-item-content"
    }, item.name));
  }))), /*#__PURE__*/React.createElement("div", {
    className: "mdui-dialog-actions"
  }, /*#__PURE__*/React.createElement("button", {
    "mdui-dialog-close": "true",
    className: "mdui-btn mdui-ripple"
  }, "\u53D6\u6D88")));
};

var _default = function _default(_ref2) {
  var checked = _ref2.checked,
      items = _ref2.items,
      _ref2$title = _ref2.title,
      title = _ref2$title === void 0 ? "请选择" : _ref2$title,
      onCheckedChange = _ref2.onCheckedChange,
      icon = _ref2.icon;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("li", {
    "mdui-dialog": "{target:'#" + title + "',history:false}",
    className: "mdui-list-item mdui-ripple"
  }, icon && /*#__PURE__*/React.createElement("i", {
    className: "mdui-list-item-icon mdui-icon material-icons"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "mdui-list-item-content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mdui-list-item-title mdui-list-item-one-line"
  }, title), /*#__PURE__*/React.createElement("div", {
    className: "mdui-list-item-text mdui-list-item-one-line"
  }, items[checked].name))), /*#__PURE__*/React.createElement(Dialog, {
    checked: checked,
    title: title,
    onCheckedChange: onCheckedChange,
    items: items
  }));
};

exports["default"] = _default;