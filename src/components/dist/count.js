"use strict";
exports.__esModule = true;
var react_1 = require("react");
require("./sass/count.sass");
var Count = function (_a) {
    var count = _a.count, styleSwitch = _a.styleSwitch;
    return (react_1["default"].createElement("div", { className: "count", style: { fontSize: styleSwitch ? '60px' : '' } }, count));
};
exports["default"] = Count;
