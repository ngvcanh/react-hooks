import { CSSProperties, useLayoutEffect, useState } from "react";

const css: CSSProperties = {
  overflow: 'scroll',
  msOverflowStyle: 'scrollbar',
  opacity: 0,
  position: 'absolute',
  zIndex: -1,
  pointerEvents: 'none',
  top: '-9999px'
}

export default function useScrollbarSize(){

  const [ size, setSize ] = useState(0);

  useLayoutEffect(() => {
    const div = document.createElement('div');
    Object.assign(div.style, css);
    document.body.appendChild(div);

    const inner = document.createElement('div');
    div.appendChild(inner);

    setSize(div.offsetWidth - inner.offsetWidth);
    div.remove();
  }, []);

  return size;

}