// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect } from "react";
export default function useClickOutside(handler, ref) {
    useEffect(function () {
        var listener = function (event) {
            ref.current && !ref.current.contains(event.target) && handler(event);
        };
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return function () {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}
