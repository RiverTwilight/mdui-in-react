"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ToTop = function () {
    var _a = React.useState(true), isHide = _a[0], setHide = _a[1];
    React.useEffect(function () {
        window.addEventListener("scroll", function () {
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            if (t <= 148) {
                setHide(true);
            }
            else {
                setHide(false);
            }
        });
        return window.removeEventListener("scroll", function () { });
    }, []);
    return (React.createElement("button", { onClick: function () {
            window.toTop = setInterval(function () {
                if (document.documentElement.scrollTop === 0)
                    clearInterval(window.toTop);
                document.documentElement.scrollTop -= 200;
            }, 50);
        }, className: "mdui-color-theme mdui-fab mdui-fab-fixed " + (isHide ? 'mdui-fab-hide' : '') },
        React.createElement("i", { className: "mdui-icon material-icons" }, "\uE5D8")));
};
exports.default = ToTop;
