import { useLayoutEffect, useState } from "react";
var css = {
    overflow: 'scroll',
    msOverflowStyle: 'scrollbar',
    opacity: 0,
    position: 'absolute',
    zIndex: -1,
    pointerEvents: 'none',
    top: '-9999px'
};
export default function useScrollbarSize() {
    var _a = useState(0), size = _a[0], setSize = _a[1];
    useLayoutEffect(function () {
        var div = document.createElement('div');
        Object.assign(div.style, css);
        document.body.appendChild(div);
        var inner = document.createElement('div');
        div.appendChild(inner);
        setSize(div.offsetWidth - inner.offsetWidth);
        div.remove();
    }, []);
    return size;
}
