import React from "react";
import useWindowResize from "../useWindowResize";
import { Story } from "@storybook/react";

export default {
  title: 'Hooks/useWindowResize()'
}

const Template: Story = args => {

  const [ width, height ] = useWindowResize(() => {
    console.log('window resized');
  });

  return <div>
    Resize window to change size.

    <p>Size (Width: <span style={{ color: 'red' }}>{ width }px</span>; Height: <span style={{ color: 'red' }}>{ height }px</span>)</p>
  </div>

}

export const Usage = Template.bind({});
Usage.parameters = {
  docs: {
    source: {
      code: `const [ width, height ] = useWindowResize();

// Or
const callback = () => console.log('Window resized!');
const [ width, height ] = useWindowResize(callback);
      `,
      language: "jsx",
      type: "auto",
    },
  },
};