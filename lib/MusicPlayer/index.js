"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _mdui = require("mdui");

var _RangeInput = _interopRequireDefault(require("../RangeInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
 * 必须要class组件，因为需要用到Ref
 * */
var MusicPlayer = /*#__PURE__*/function (_React$Component) {
  _inherits(MusicPlayer, _React$Component);

  var _super = _createSuper(MusicPlayer);

  function MusicPlayer(props) {
    var _this;

    _classCallCheck(this, MusicPlayer);

    _this = _super.call(this, props);
    _this.state = {
      onPlay: false,
      playProgress: 0,
      audioLength: 2000
    };
    return _this;
  }

  _createClass(MusicPlayer, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.audio) {
        var audioDom = this.audioDom;
        audioDom.addEventListener('loadedmetadata', function () {
          _this2.setState({
            audioLength: Math.round(audioDom.duration) //设置音频总长度             

          }, function () {
            return (0, _mdui.updateSliders)();
          });
        });
        audioDom.load();
        audioDom.addEventListener('play', function () {
          window.progress = setInterval(function () {
            _this2.setState({
              playProgress: audioDom.currentTime
            });

            (0, _mdui.updateSliders)(); //调整滑块长度
          }, 100);
        });
        audioDom.addEventListener('ended', function () {
          clearInterval(window.progress);

          _this2.setState({
            onPlay: false
          });
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props = this.props,
          audio = _this$props.audio,
          _this$props$title = _this$props.title,
          title = _this$props$title === void 0 ? "音频播放器" : _this$props$title,
          subtitle = _this$props.subtitle,
          _this$props$cover = _this$props.cover,
          cover = _this$props$cover === void 0 ? "https://s4.music.126.net/style/web2/img/default/default_album.jpg" : _this$props$cover,
          other = _objectWithoutProperties(_this$props, ["audio", "title", "subtitle", "cover"]);

      var _this$state = this.state,
          onPlay = _this$state.onPlay,
          playProgress = _this$state.playProgress,
          audioLength = _this$state.audioLength;
      var audioDom = this.audioDom;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        style: {
          maxWidth: '500px'
        },
        className: "mdui-card mdui-p-l-3"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mdui-row mdui-row-gapless"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mdui-col-xs-8 mdui-p-t-1"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mdui-typo-headline"
      }, title), subtitle && /*#__PURE__*/React.createElement("div", {
        className: "mdui-typo-subheading-opacity"
      }, subtitle), /*#__PURE__*/React.createElement(_RangeInput["default"], {
        value: String(playProgress),
        title: "",
        min: "0",
        max: String(audioLength),
        onValueChange: function onValueChange(newValue) {
          _this3.setState({
            playProgress: parseInt(newValue)
          });

          audioDom.currentTime = newValue;
        }
      }), /*#__PURE__*/React.createElement("div", {
        className: "center"
      }, /*#__PURE__*/React.createElement("div", {
        className: "mdui-btn-group"
      }, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          if (onPlay) {
            audioDom.pause();

            _this3.setState({
              onPlay: false
            });
          } else {
            audioDom.play();

            _this3.setState({
              onPlay: true
            });
          }
        },
        type: "button",
        className: "mdui-btn"
      }, /*#__PURE__*/React.createElement("i", {
        className: "mdui-icon material-icons"
      }, onPlay ? 'pause' : 'play_arrow')), /*#__PURE__*/React.createElement("a", {
        rel: "noopener noreferrer",
        target: "_blank",
        href: audio,
        download: true
      }, /*#__PURE__*/React.createElement("button", {
        type: "button",
        className: "mdui-btn"
      }, /*#__PURE__*/React.createElement("i", {
        className: "mdui-icon material-icons"
      }, "file_download")))))), /*#__PURE__*/React.createElement("div", {
        style: {
          height: window.innerWidth >= 1024 ? '160px' : "130px"
        },
        className: "mdui-col-xs-4"
      }, /*#__PURE__*/React.createElement("img", {
        style: {
          width: '100%',
          height: '100%'
        },
        alt: "cover",
        src: cover
      }))), /*#__PURE__*/React.createElement("audio", _extends({}, other, {
        ref: function ref(r) {
          return _this3.audioDom = r;
        },
        style: {
          display: 'none'
        },
        controls: true
      }), /*#__PURE__*/React.createElement("source", {
        src: audio,
        type: "audio/mpeg"
      }), "Your browser does not support the audio tag.")));
    }
  }]);

  return MusicPlayer;
}(React.Component);

exports["default"] = MusicPlayer;