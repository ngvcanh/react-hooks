import React, { KeyboardEvent, useRef, useState } from "react";
import useEmitControl from '../useEmitControl';
import { Story } from '@storybook/react';

export default {
  title: 'Hooks/useEmitControl()'
}

export const Usage: Story = function DemoUseEmitControl(){

  const inputRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const [ inputDate, setInputDate ] = useState<Date>();
  const [ textareaDate, setTextareaDate ] = useState<Date>();

  const emitInput = useEmitControl(inputRef);
  const emitTextarea = useEmitControl(textAreaRef);

  const onKeyDownInput = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    emitInput('change', 'new value' + Date.now());
  }

  const onKeyDownTextarea = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    emitTextarea('change', 'new value' + Date.now());
  }

  return <div>
    <input 
      ref={ inputRef } 
      type="text" 
      onKeyDown={ onKeyDownInput }
      onChange={ () => setInputDate(new Date()) }
    />
    
    <p>Emit change at: <span style={{ color: 'red' }}>{inputDate?.toString()}</span></p>

    <textarea 
      ref={ textAreaRef }
      onKeyDown={ onKeyDownTextarea }
      onChange={ () => setTextareaDate(new Date()) } 
    />

    <p>Emit change at: <span style={{ color: 'red' }}>{textareaDate?.toString()}</span></p>

    <p>Focus input and type any key to emit change event</p>
  </div>

}