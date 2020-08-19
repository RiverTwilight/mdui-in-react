"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeListener = exports.signListener = exports["default"] = void 0;

var _react = require("react");

var signListener = function signListener(cb, getEventCb) {
  document.ondragover = function (e) {
    e.preventDefault();
  };

  document.ondragenter = function () {//dropBox.style.background = '#888888'
  };

  document.ondragleave = function () {//dropBox.style.background = null
  };

  document.ondrop = function (e) {
    e.preventDefault();
    var dataFile = e.dataTransfer.files[0];
    var fr = new FileReader();

    if (e.dataTransfer.files[0].type.match(/text\/.+/)) {
      fr.readAsText(dataFile, "gb2312");
    } else {
      fr.readAsDataURL(dataFile);
    }

    getEventCb && getEventCb(e);

    fr.onload = function () {
      cb && cb(fr.result, dataFile, e.dataTransfer.files);
    };
  };
};

exports.signListener = signListener;

var removeListener = function removeListener() {
  document.ondrop = null;
  document.ondragleave = null;
  document.ondragenter = null;
  document.ondragenter = null;
};

exports.removeListener = removeListener;

var useFileDrager = function useFileDrager(cb) {
  (0, _react.useEffect)(function () {
    signListener(cb);
    return removeListener;
  }, [cb]);
};

var _default = useFileDrager;
exports["default"] = _default;