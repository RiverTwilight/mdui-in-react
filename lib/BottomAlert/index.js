"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _mdui = require("mdui");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @name 底部弹出菜单
 * 在640Px以上的屏幕会呈现为普通div元素
 */
var _default = /*#__PURE__*/function (_React$Component) {
  _inherits(_default, _React$Component);

  var _super = _createSuper(_default);

  function _default() {
    _classCallCheck(this, _default);

    return _super.apply(this, arguments);
  }

  _createClass(_default, [{
    key: "close",
    value: function close() {
      this.props.onClose();

      _mdui.JQ.hideOverlay(true);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (window.innerWidth <= 640 && this.props.ifShow) {
        document.getElementsByClassName('mdui-overlay')[0].addEventListener('click', this.close.bind(this));
      } else {
        _mdui.JQ.hideOverlay();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          ifShow = _this$props.ifShow,
          title = _this$props.title,
          children = _this$props.children,
          height = _this$props.height;

      if (window.innerWidth <= 640 && ifShow) {
        _mdui.JQ.showOverlay(1001); // 刚好超过头部

      } // 用return null会每次重载图片


      return /*#__PURE__*/React.createElement("div", {
        className: "mdui-card bottom-alert bottom-dashboard ".concat(!ifShow ? 'bottom-dashboard-hidden' : '')
      }, /*#__PURE__*/React.createElement("div", {
        className: "mdui-hidden-sm-up mdui-card-media"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mdui-card-menu"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: this.close.bind(this),
        className: "mdui-btn mdui-btn-icon"
      }, /*#__PURE__*/React.createElement("i", {
        className: "mdui-icon material-icons"
      }, "close")))), /*#__PURE__*/React.createElement("div", {
        style: {
          padding: '15px 16px 16px 16px'
        },
        className: "mdui-card-primary"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mdui-card-primary-title"
      }, title)), /*#__PURE__*/React.createElement("div", {
        style: {
          height: height ? "".concat(height, "px") : "auto"
        },
        className: "main"
      }, children), /*#__PURE__*/React.createElement("div", {
        className: "mdui-card-actions"
      }));
    }
  }]);

  return _default;
}(React.Component);

exports["default"] = _default;