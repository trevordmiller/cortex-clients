'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement(
    _reactNative.View,
    { style: {
        backgroundColor: 'lightgray',
        padding: 30
      } },
    _react2.default.createElement(
      _reactNative.Text,
      null,
      'Hello world!'
    )
  );
};
