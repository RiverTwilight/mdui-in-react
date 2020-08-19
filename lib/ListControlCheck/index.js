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
 * 列表控制-开关组件
 */
var _default = function _default(_ref) {
  var onCheckedChange = _ref.onCheckedChange,
      _ref$checked = _ref.checked,
      checked = _ref$checked === void 0 ? true : _ref$checked,
      title = _ref.title,
      _ref$icon = _ref.icon,
      icon = _ref$icon === void 0 ? "settings" : _ref$icon;
  return /*#__PURE__*/React.createElement("li", {
    className: "mdui-list-item mdui-ripple"
  }, /*#__PURE__*/React.createElement("i", {
    className: "mdui-list-item-icon mdui-icon material-icons"
  }, icon), /*#__PURE__*/React.createElement("div", {
    className: "mdui-list-item-content"
  }, title), /*#__PURE__*/React.createElement("label", {
    className: "mdui-switch"
  }, /*#__PURE__*/React.createElement("input", {
    onChange: function onChange(e) {
      onCheckedChange && onCheckedChange(e.target.checked);
    },
    type: "checkbox",
    checked: checked
  }), /*#__PURE__*/React.createElement("i", {
    className: "mdui-switch-icon"
  })));
};

exports["default"] = _default;