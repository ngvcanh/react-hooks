import { useCallback, useLayoutEffect, useRef, useState } from "react";
export default function useWindowResize(callback) {
    var _a = useState([0, 0]), size = _a[0], setSize = _a[1];
    var mounted = useRef(false);
    var windowEffect = useCallback(function () {
        callback && callback();
    }, [callback]);
    useLayoutEffect(function () {
        function updateSize() {
            var innerWidth = window.innerWidth, innerHeight = window.innerHeight;
            setSize([innerWidth, innerHeight]);
            if (innerWidth !== size[0] || innerHeight !== size[1]) {
                mounted.current && windowEffect();
            }
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        mounted.current = true;
        return function () {
            window.removeEventListener('resize', updateSize);
            mounted.current = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return size;
}
