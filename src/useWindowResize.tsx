import { useCallback, useLayoutEffect, useRef, useState } from "react";

export default function useWindowResize(callback?: (() => any)){
  const [ size, setSize ] = useState([0, 0]);
  const mounted = useRef(false);
  
  const windowEffect = useCallback(() => {
    callback && callback();
  }, [ callback ]);

  useLayoutEffect(() => {
    function updateSize(){
      const { innerWidth, innerHeight } = window;
      setSize([ innerWidth, innerHeight ]);

      if (innerWidth !== size[0] || innerHeight !== size[1]){
        mounted.current && windowEffect();
      }
    }

    window.addEventListener('resize', updateSize);
    updateSize();
    mounted.current = true;

    return () => {
      window.removeEventListener('resize', updateSize);
      mounted.current = false;
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return size;
}