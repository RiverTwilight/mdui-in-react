"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('List Component', function () {
  it('provided a none empty array', function () {
    var res = (0, _enzyme.shallow)( /*#__PURE__*/_react["default"].createElement(_index["default"], {
      items: ['dsf', 'fsad']
    }));
    expect(res.find('li').length).toEqual(2);
  });
});