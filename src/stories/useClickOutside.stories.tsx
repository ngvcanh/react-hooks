import React, { useEffect, useRef, useState } from "react";
import useClickOutside, { ClickOutsideEvent } from "../useClickOutside";
import { Story } from '@storybook/react';

export default {
  title: 'Hooks/useClickOutside()'
}

export const Default: Story = function DemoUseClickOutside(){

  const elementRef = useRef<HTMLDivElement>(null);
  const [ clickedAt, setClickedAt ] = useState<Date>();
  const [ coordinates, setCoordinates ] = useState<[number, number]>([ 0, 0 ]);

  useClickOutside<HTMLDivElement>(
    (event: ClickOutsideEvent) => {
      setClickedAt(new Date());
      const { clientX, clientY } = event as MouseEvent;
      setCoordinates([ clientX, clientY ]);
    }, 
    elementRef
  );

  return <div>
    <div 
      style={{ width: 150, height: 150, backgroundColor: '#f00' }} 
      ref={ elementRef }
    />
    <div>
      {!!clickedAt && (
        <div>
          Clicked at: { clickedAt.toString() }<br />
          Position (
            X: <span style={{ color: '#f00' }}>{ coordinates[0] }</span>;
            Y: <span style={{ color: '#f00' }}>{ coordinates[1] }</span>
          )
        </div>
      )}
    </div>
  </div>

}

export const Dropdown: Story = function DemoClickOutsideWithDropdown(){

  const [ open, setOpen ] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const dropdown = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && dropdown.current){
      const rect = (button.current as HTMLButtonElement).getBoundingClientRect();
      dropdown.current.style.top = rect.height + 'px';
      dropdown.current.style.height = dropdown.current.scrollHeight + 'px';
    }
  }, [ open, dropdown ]);
  
  useClickOutside(event => {
    (event.target as HTMLElement).isEqualNode(button.current) || close();
  }, dropdown);

  const close = () => {
    if (!dropdown.current) return;
    dropdown.current.style.height = 0 + 'px';
    setTimeout(() => setOpen(false), 300);
  }

  const onClickButton = () => open ? close() : setOpen(true);

  return <div style={{ height: 200, position: 'relative' }}>

    <button ref={ button } onClick={ onClickButton }>
      Click to open dropdown
    </button>

    {open && (
      <div 
        ref={ dropdown }
        style={{
          position: 'absolute',
          zIndex: 99,
          width: 200,
          border: '1px solid #efefef',
          padding: '8px 0',
          boxShadow: '3px 3px 3px #efefef, -3px 0px 3px #efefef',
          height: 0,
          overflow: 'hidden',
          transition: 'height ease-in-out 0.3s',
          boxSizing: 'border-box'
        }}
      >
        <div style={{ padding: '12px 8px' }}>Dropdown item 1</div>
        <div style={{ padding: '12px 8px' }}>Dropdown item 3</div>
        <div style={{ padding: '12px 8px' }}>Dropdown item 2</div>
      </div>
    )}
  </div>

}