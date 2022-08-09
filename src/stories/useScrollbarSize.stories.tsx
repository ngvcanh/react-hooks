import React from "react";
import useScrollbarSize from "../useScrollbarSize";
import { Story } from '@storybook/react';

export default {
  title: 'Hooks/useScrollbarSize()'
}

export const Usage: Story = function DemoUseScrollbarSize(){

  const size = useScrollbarSize();

  return <div>
    Demo useScrollbarSize().<br />
    Size: <span style={{ color: '#f00' }}>{ size }</span>px
  </div>

}