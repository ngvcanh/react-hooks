import React from "react";
import useForceUpdate from '../useForceUpdate';
import { Story } from "@storybook/react";

export default {
  title: 'Hooks/useForceUpdate'
}

let clicked = 0;

export const Usage: Story = function DemoUseForceUpdate(){

  const forceUpdate = useForceUpdate();

  return <div>
    <h1>You are clicked { clicked++ } times.</h1>
    <button onClick={ forceUpdate }>Click to force update</button>
    <p>Change to Docs tab to view source demo</p>
  </div>

}

Usage.parameters = {
  docs: {
    source: {
      code: `import React from 'react';
import useForceUpdate from '@kensoni/react-hooks/useForceUpdate';

let clicked = 0;

function DemoUseForceUpdate(){
  
  const forceUpdate = useForceUpdate();

  return <div>
    <h1>You are clicked { clicked++ } times.</h1>
    <button onClick={ forceUpdate }>Click to force update</button>
  </div>

}`
    }
  }
}