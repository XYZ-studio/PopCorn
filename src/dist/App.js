"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var count_1 = require("./components/count");
var title_1 = require("./components/title");
require("./index.sass");
require("./components/sass/image.sass");
var react_cookie_1 = require("react-cookie");
var keyList = [];
var sleep = function (ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
};
var isMobileDevice = function () {
    var mobileDevice = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone'];
    var isMobileDevice = mobileDevice.some(function (e) { return navigator.userAgent.match(e); });
    return isMobileDevice;
};
var App = function () {
    var _a = react_cookie_1.useCookies(['count']), cookies = _a[0], setCookie = _a[1], removeCookie = _a[2];
    var _b = react_1.useState(0), count = _b[0], setCount = _b[1];
    var _c = react_1.useState(false), styleSwitch = _c[0], setStyleSwitch = _c[1];
    var _d = react_1.useState(false), touch = _d[0], setTouch = _d[1];
    var touchFun = function () {
        setCount(count + 1);
        setTouch(true);
        var audio = new Audio('wtf.mp3');
        audio.volume = 0.5;
        audio.play();
        (function () { return __awaiter(void 0, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        setStyleSwitch(true);
                        return [4 /*yield*/, sleep(100)];
                    case 1:
                        _a.sent();
                        setStyleSwitch(false);
                        return [2 /*return*/];
                }
            });
        }); })();
    };
    if (isMobileDevice()) {
        // mobile
        document.ontouchstart = touchFun;
        document.ontouchend = function () {
            setTouch(false);
        };
    }
    else {
        // not mobile
        document.onmousedown = touchFun;
        document.onmouseup = function () {
            setTouch(false);
        };
    }
    // key event
    document.onkeydown = function (event) {
        if (!keyList.includes(event.code)) {
            touchFun();
            keyList.push(event.code);
        }
    };
    document.onkeyup = function (event) {
        if (keyList.includes(event.code)) {
            var index = keyList.indexOf(event.code);
            setTouch(false);
            if (index > -1)
                keyList.splice(index, 1);
        }
    };
    react_1.useEffect(function () {
        if (cookies.count)
            setCount(Number(cookies.count));
    }, []);
    react_1.useEffect(function () {
        setCookie('count', count);
    }, [count]);
    return (react_1["default"].createElement("div", { className: "App" },
        react_1["default"].createElement(title_1["default"], null),
        react_1["default"].createElement(count_1["default"], { count: count, styleSwitch: styleSwitch }),
        react_1["default"].createElement("div", { id: "image", className: touch ? 'no-touch' : 'touch' })));
};
exports["default"] = App;
