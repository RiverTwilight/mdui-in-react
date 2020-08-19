"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var page = _ref.page,
      onPageChange = _ref.onPageChange,
      items = _ref.items;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "mdui-shadow-17 mdui-text-color-theme mdui-bottom-nav-scroll-hide mdui-color-white mdui-bottom-nav"
  }, items.map(function (item) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      key: item.name,
      onClick: function onClick() {
        onPageChange(item.page);
        window.location.hash = "#".concat(item.page);
      },
      title: item.name,
      className: "mdui-ripple ".concat(page === item.page ? "mdui-bottom-nav-active" : "")
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "mdui-icon material-icons"
    }, item.icon));
  }));
};

exports["default"] = _default;