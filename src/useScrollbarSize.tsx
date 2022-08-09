import { CSSProperties, useLayoutEffect } from "react";

const css: CSSProperties = {
  overflow: 'scroll',
  msOverflowStyle: 'scrollbar',
  position: 'absolute',
  pointerEvents: 'none',
  top: '-9999px',
  width: '100px',
  height: '100px'
}

let scrollbarSize = -1;

const getScrollbarSize = () => {
  if (typeof document === "undefined") return 0;
  const div = document.createElement('div');
  
  Object.assign(div.style, css);
  document.body.appendChild(div);
  
  const size = div.offsetWidth - div.clientWidth;
  document.body.removeChild(div);

  return size;
}

export default function useScrollbarSize(forceUpdate = false){

  useLayoutEffect(() => {
    if (!forceUpdate && scrollbarSize > 0) return;
    scrollbarSize = getScrollbarSize();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return Math.max(scrollbarSize, 0);

}