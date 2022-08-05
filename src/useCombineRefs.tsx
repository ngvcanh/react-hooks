// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { MutableRefObject, Ref, useEffect, useRef } from "react";

export default function useCombineRefs<T>(refs: Array<Ref<T>>){

  const targetRef = useRef<T | null>(null);

  useEffect(() => {
    refs.forEach(ref => {
      if (!ref) return;

      if (typeof ref === 'function'){
        ref(targetRef.current);
      }
      else{
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        (ref as MutableRefObject<T>).current = targetRef.current!;
      }
    });
  }, [ refs ]);

  return targetRef;
}