'use strict';

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _mdui = require('mdui');

var _mdui2 = _interopRequireDefault(_mdui);

var _RangeInput = require('./RangeInput');

var _RangeInput2 = _interopRequireDefault(_RangeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  *音乐播放器组件
  **/

/***必须要class组件，因为需要用到Ref***/
var MusicPlayer = function (_React$Component) {
    (0, _inherits3.default)(MusicPlayer, _React$Component);

    function MusicPlayer(props) {
        (0, _classCallCheck3.default)(this, MusicPlayer);

        var _this = (0, _possibleConstructorReturn3.default)(this, (MusicPlayer.__proto__ || (0, _getPrototypeOf2.default)(MusicPlayer)).call(this, props));

        _this.state = {
            onPlay: false,
            playProgress: 0
        };
        return _this;
    }

    (0, _createClass3.default)(MusicPlayer, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var _this2 = this;

            if (nextProps.audio) {
                var audioDom = this.audioDom;

                audioDom.addEventListener('loadedmetadata', function () {
                    _this2.setState({
                        audioLength: Math.round(audioDom.duration) //设置音频总长度             
                    }, function () {
                        return _mdui2.default.updateSliders();
                    });
                });
                audioDom.load();
                audioDom.addEventListener('play', function () {
                    window.progress = setInterval(function () {
                        _this2.setState({
                            playProgress: audioDom.currentTime
                        });
                        _mdui2.default.updateSliders(); //调整滑块长度
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
        key: 'render',
        value: function render() {
            var _this3 = this;

            var _props = this.props,
                audio = _props.audio,
                title = _props.title,
                other = (0, _objectWithoutProperties3.default)(_props, ['audio', 'title']);
            var _state = this.state,
                onPlay = _state.onPlay,
                playProgress = _state.playProgress,
                audioLength = _state.audioLength;
            var audioDom = this.audioDom;

            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'mdui-card mdui-p-a-1' },
                    _react2.default.createElement(
                        'h3',
                        { className: 'mdui-typo-title' },
                        title
                    ),
                    _react2.default.createElement(_RangeInput2.default, {
                        value: String(playProgress),
                        min: '0', max: String(audioLength),
                        onValueChange: function onValueChange(newValue) {
                            _this3.setState({ playProgress: newValue });
                            audioDom.currentTime = newValue;
                        }
                    }),
                    _react2.default.createElement(
                        'center',
                        null,
                        _react2.default.createElement(
                            'div',
                            { className: 'mdui-btn-group' },
                            _react2.default.createElement(
                                'button',
                                {
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
                                    type: 'button', className: 'mdui-btn' },
                                _react2.default.createElement(
                                    'i',
                                    { className: 'mdui-icon material-icons' },
                                    onPlay ? 'pause' : 'play_arrow'
                                )
                            ),
                            _react2.default.createElement(
                                'a',
                                { rel: 'noopener noreferrer', target: '_blank', href: audio, download: true },
                                _react2.default.createElement(
                                    'button',
                                    {
                                        type: 'button',
                                        className: 'mdui-btn' },
                                    _react2.default.createElement(
                                        'i',
                                        { className: 'mdui-icon material-icons' },
                                        'file_download'
                                    )
                                )
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'audio',
                        (0, _extends3.default)({}, other, { ref: function ref(r) {
                                return _this3.audioDom = r;
                            }, style: { display: 'none' }, controls: 'controls' }),
                        _react2.default.createElement('source', { src: audio, type: 'audio/mpeg' }),
                        'Your browser does not support the audio tag.'
                    )
                )
            );
        }
    }]);
    return MusicPlayer;
}(_react2.default.Component);

MusicPlayer.defaultProps = {
    title: '音频播放器'
};

MusicPlayer.propTypes = {
    audio: _propTypes2.default.string.isRequired,
    title: _propTypes2.default.string
};

module.exports = MusicPlayer;