"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./sass/count.sass");
var random = function () {
    var deg = [-10, -5, 0, 5, 10];
    var randomNumber = Math.floor(Math.random() * 4);
    return deg[randomNumber];
};
var Count = function (_a) {
    var count = _a.count, styleSwitch = _a.styleSwitch;
    return (react_1["default"].createElement("div", { className: "count", style: {
            fontSize: styleSwitch ? '60px' : '',
            transform: styleSwitch ? "rotate(" + random() + "deg)" : ''
        } }, count));
};
exports["default"] = Count;
