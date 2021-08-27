"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Count = function (_a) {
    var count = _a.count, styleSwitch = _a.styleSwitch;
    return (react_1["default"].createElement("div", { className: styleSwitch ? 'count' : '' }, count));
};
exports["default"] = Count;
