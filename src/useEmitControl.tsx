import { RefObject, useEffect, useState } from "react";

export type ControlElement = 'input' | 'select' | 'textarea';

function getPrototype(element: HTMLElement | null){
  switch(element?.tagName){
    case 'SELECT':
      return window.HTMLSelectElement.prototype;
    case 'TEXTAREA':
      return window.HTMLTextAreaElement.prototype;
    default:
      return window.HTMLInputElement.prototype;
  }
}

export default function useEmitControl(elememt: RefObject<HTMLElement>){

  const [ prototype, setPrototype ] = useState(getPrototype(elememt.current));

  useEffect(() => {
    setPrototype(getPrototype(elememt.current));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ elememt.current ]);

  return function emitControl(eventName: string, value?: string){
    if (!elememt.current) return;
    
    if (value !== undefined){
      Object.getOwnPropertyDescriptor(prototype, 'value')?.set
        ?.call(elememt.current, value.toString());
    }

    elememt.current.dispatchEvent(new Event(eventName, { bubbles: true }));
  }

}