import { RefObject } from "react";
export declare type ClickOutsideEvent = MouseEvent | TouchEvent;
export interface ClickOutsideEventHandler {
    (event: ClickOutsideEvent): void;
}
export default function useClickOutside<Element extends HTMLElement = HTMLElement>(handler: ClickOutsideEventHandler, ref: RefObject<Element>): void;
