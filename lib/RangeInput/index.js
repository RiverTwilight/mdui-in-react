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
  *进度调节Slidebar
  **/
var _default = function _default(_ref) {
  var _ref$max = _ref.max,
      max = _ref$max === void 0 ? "10" : _ref$max,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? "1" : _ref$min,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? "1" : _ref$step,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? "5" : _ref$value,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "调节" : _ref$title,
      onValueChange = _ref.onValueChange;
  return /*#__PURE__*/React.createElement("div", {
    className: "mdui-textfield"
  }, /*#__PURE__*/React.createElement("label", {
    className: "mdui-textfield-label"
  }, title), /*#__PURE__*/React.createElement("label", {
    className: "mdui-slider"
  }, /*#__PURE__*/React.createElement("input", {
    onChange: function onChange(e) {
      onValueChange && onValueChange(e.target.value);
    },
    type: "range",
    value: value,
    step: step,
    min: min,
    max: max
  })));
};

exports["default"] = _default;