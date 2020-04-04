"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var mdui_1 = require("mdui");
var RangeInput_1 = require("./RangeInput");
/**
 * 必须要class组件，因为需要用到Ref
 * */
var MusicPlayer = /** @class */ (function (_super) {
    __extends(MusicPlayer, _super);
    function MusicPlayer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            onPlay: false,
            playProgress: 0,
            audioLength: 2000
        };
        return _this;
    }
    MusicPlayer.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (nextProps.audio) {
            var audioDom = this.audioDom;
            audioDom.addEventListener('loadedmetadata', function () {
                _this.setState({
                    audioLength: Math.round(audioDom.duration) //设置音频总长度             
                }, function () { return mdui_1.updateSliders(); });
            });
            audioDom.load();
            audioDom.addEventListener('play', function () {
                window.progress = setInterval(function () {
                    _this.setState({
                        playProgress: audioDom.currentTime
                    });
                    mdui_1.updateSliders(); //调整滑块长度
                }, 100);
            });
            audioDom.addEventListener('ended', function () {
                clearInterval(window.progress);
                _this.setState({
                    onPlay: false
                });
            });
        }
    };
    MusicPlayer.prototype.render = function () {
        var _this = this;
        var _a = this.props, audio = _a.audio, _b = _a.title, title = _b === void 0 ? "音频播放器" : _b, subtitle = _a.subtitle, _c = _a.cover, cover = _c === void 0 ? "https://s4.music.126.net/style/web2/img/default/default_album.jpg" : _c, other = __rest(_a, ["audio", "title", "subtitle", "cover"]);
        var _d = this.state, onPlay = _d.onPlay, playProgress = _d.playProgress, audioLength = _d.audioLength;
        var audioDom = this.audioDom;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { style: {
                    maxWidth: '500px'
                }, className: "mdui-card mdui-p-l-3" },
                React.createElement("div", { className: "mdui-row mdui-row-gapless" },
                    React.createElement("div", { className: "mdui-col-xs-8 mdui-p-t-1" },
                        React.createElement("div", { className: "mdui-typo-headline" }, title),
                        subtitle &&
                            React.createElement("div", { className: "mdui-typo-subheading-opacity" }, subtitle),
                        React.createElement(RangeInput_1.default, { value: String(playProgress), title: "", min: "0", max: String(audioLength), onValueChange: function (newValue) {
                                _this.setState({ playProgress: parseInt(newValue) });
                                audioDom.currentTime = newValue;
                            } }),
                        React.createElement("div", { className: "center" },
                            React.createElement("div", { className: "mdui-btn-group" },
                                React.createElement("button", { onClick: function () {
                                        if (onPlay) {
                                            audioDom.pause();
                                            _this.setState({
                                                onPlay: false
                                            });
                                        }
                                        else {
                                            audioDom.play();
                                            _this.setState({
                                                onPlay: true
                                            });
                                        }
                                    }, type: "button", className: "mdui-btn" },
                                    React.createElement("i", { className: "mdui-icon material-icons" }, onPlay ? 'pause' : 'play_arrow')),
                                React.createElement("a", { rel: "noopener noreferrer", target: "_blank", href: audio, download: true },
                                    React.createElement("button", { type: "button", className: "mdui-btn" },
                                        React.createElement("i", { className: "mdui-icon material-icons" }, "file_download")))))),
                    React.createElement("div", { style: {
                            height: (window.innerWidth) >= 1024 ? '160px' : "140px"
                        }, className: "mdui-col-xs-4" },
                        React.createElement("img", { style: {
                                width: '100%',
                                height: '100%'
                            }, src: cover }))),
                React.createElement("audio", __assign({}, other, { ref: function (r) { return _this.audioDom = r; }, style: { display: 'none' }, controls: true }),
                    React.createElement("source", { src: audio, type: "audio/mpeg" }),
                    "Your browser does not support the audio tag."))));
    };
    return MusicPlayer;
}(React.Component));
exports.default = MusicPlayer;
