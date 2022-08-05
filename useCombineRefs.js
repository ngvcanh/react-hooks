// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useEffect, useRef } from "react";
export default function useCombineRefs(refs) {
    var targetRef = useRef(null);
    useEffect(function () {
        refs.forEach(function (ref) {
            if (!ref)
                return;
            if (typeof ref === 'function') {
                ref(targetRef.current);
            }
            else {
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                ref.current = targetRef.current;
            }
        });
    }, [refs]);
    return targetRef;
}
